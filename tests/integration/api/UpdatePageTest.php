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
use FoF\Pages\Page;
use PHPUnit\Framework\Attributes\Test;
use Psr\Http\Message\ResponseInterface;

class UpdatePageTest extends TestCase
{
    use RetrievesAuthorizedUsers;

    protected function setUp(): void
    {
        parent::setUp();

        $this->extension('fof-pages');

        // Guests send no API token, so CSRF would answer 400 before the endpoint's own guard runs.
        $this->extend((new Extend\Csrf())->exemptRoute('pages.update'));

        $this->prepareDatabase([
            User::class => [
                $this->normalUser(),
            ],
            Page::class => [
                ['id' => 1, 'title' => 'Original title', 'slug' => 'original', 'content' => '<t>Original content</t>', 'is_html' => false, 'is_hidden' => false, 'is_restricted' => false],
            ],
        ]);
    }

    protected function updatePage(?int $actor): ResponseInterface
    {
        $options = [
            'json' => [
                'data' => [
                    'type'       => 'pages',
                    'id'         => '1',
                    'attributes' => [
                        'title' => 'Changed title',
                    ],
                ],
            ],
        ];

        if ($actor !== null) {
            $options['authenticatedAs'] = $actor;
        }

        return $this->send($this->request('PATCH', '/api/pages/1', $options));
    }

    protected function title(): string
    {
        return $this->database()->table('pages')->where('id', 1)->value('title');
    }

    #[Test]
    public function guest_cannot_update_page(): void
    {
        $response = $this->updatePage(null);

        $this->assertEquals(401, $response->getStatusCode());
        $this->assertEquals('Original title', $this->title());
    }

    #[Test]
    public function normal_user_cannot_update_page(): void
    {
        $response = $this->updatePage(2);

        $this->assertEquals(403, $response->getStatusCode());
        $this->assertEquals('Original title', $this->title());
    }

    #[Test]
    public function admin_can_update_page(): void
    {
        $response = $this->updatePage(1);

        $this->assertEquals(200, $response->getStatusCode(), (string) $response->getBody());
        $this->assertEquals('Changed title', $this->title());
    }
}
