<?php

/*
 * This file is part of fof/pages.
 *
 * Copyright (c) FriendsOfFlarum.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace FoF\Pages\Tests\integration\api;

use Flarum\Extend;
use Flarum\Testing\integration\RetrievesAuthorizedUsers;
use Flarum\Testing\integration\TestCase;
use Flarum\User\User;
use FoF\Pages\Events\PageDeleted;
use FoF\Pages\Page;
use PHPUnit\Framework\Attributes\Test;
use Psr\Http\Message\ResponseInterface;

class DeletePageTest extends TestCase
{
    use RetrievesAuthorizedUsers;

    /**
     * Ids of the pages a PageDeleted event was dispatched for.
     *
     * @var list<int>
     */
    protected array $deletedEvents = [];

    protected function setUp(): void
    {
        parent::setUp();

        $this->extension('fof-pages');

        // Guests send no API token, so CSRF would answer 400 before the endpoint's own guard runs.
        $this->extend((new Extend\Csrf())->exemptRoute('pages.delete'));

        $this->extend(
            (new Extend\Event())->listen(PageDeleted::class, function (PageDeleted $event) {
                $this->deletedEvents[] = $event->page->id;
            })
        );

        $this->prepareDatabase([
            User::class => [
                $this->normalUser(),
            ],
            Page::class => [
                ['id' => 1, 'title' => 'Home', 'slug' => 'home', 'content' => '<t>Home</t>'],
                ['id' => 2, 'title' => 'Other', 'slug' => 'other', 'content' => '<t>Other</t>'],
            ],
        ]);
    }

    protected function deletePage(int $id, ?int $actor): ResponseInterface
    {
        return $this->send($this->request('DELETE', "/api/pages/$id", $actor === null ? [] : ['authenticatedAs' => $actor]));
    }

    protected function pageExists(int $id): bool
    {
        return $this->database()->table('pages')->where('id', $id)->exists();
    }

    protected function settingValue(string $key): ?string
    {
        return $this->database()->table('settings')->where('key', $key)->value('value');
    }

    #[Test]
    public function guest_cannot_delete_page(): void
    {
        $response = $this->deletePage(2, null);

        $this->assertEquals(401, $response->getStatusCode());
        $this->assertTrue($this->pageExists(2));
    }

    #[Test]
    public function normal_user_cannot_delete_page(): void
    {
        $response = $this->deletePage(2, 2);

        $this->assertEquals(403, $response->getStatusCode());
        $this->assertTrue($this->pageExists(2));
    }

    #[Test]
    public function admin_can_delete_page_and_the_deleted_event_is_dispatched(): void
    {
        $response = $this->deletePage(2, 1);

        $this->assertEquals(204, $response->getStatusCode(), (string) $response->getBody());
        $this->assertFalse($this->pageExists(2));
        $this->assertEquals([2], $this->deletedEvents);
    }

    #[Test]
    public function deleting_the_home_page_restores_the_default_route(): void
    {
        $this->setting('pages_home', '1');
        $this->setting('default_route', '/pages/home');

        $response = $this->deletePage(1, 1);

        $this->assertEquals(204, $response->getStatusCode(), (string) $response->getBody());
        $this->assertNull($this->settingValue('pages_home'));
        $this->assertEquals('/all', $this->settingValue('default_route'));
    }

    #[Test]
    public function deleting_the_home_page_keeps_a_default_route_that_does_not_use_it(): void
    {
        $this->setting('pages_home', '1');
        $this->setting('default_route', '/tags');

        $response = $this->deletePage(1, 1);

        $this->assertEquals(204, $response->getStatusCode(), (string) $response->getBody());
        $this->assertNull($this->settingValue('pages_home'));
        $this->assertEquals('/tags', $this->settingValue('default_route'));
    }

    #[Test]
    public function deleting_another_page_leaves_the_home_page_settings_alone(): void
    {
        $this->setting('pages_home', '1');
        $this->setting('default_route', '/pages/home');

        $response = $this->deletePage(2, 1);

        $this->assertEquals(204, $response->getStatusCode(), (string) $response->getBody());
        $this->assertEquals('1', $this->settingValue('pages_home'));
        $this->assertEquals('/pages/home', $this->settingValue('default_route'));
    }
}
