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
use PHPUnit\Framework\Attributes\Test;
use Psr\Http\Message\ResponseInterface;

class CreatePageTest extends TestCase
{
    use RetrievesAuthorizedUsers;

    protected function setUp(): void
    {
        parent::setUp();

        $this->extension('fof-pages');

        // Guests send no API token, so CSRF would answer 400 before the endpoint's own guard runs.
        $this->extend((new Extend\Csrf())->exemptRoute('pages.create'));

        $this->prepareDatabase([
            User::class => [
                $this->normalUser(),
            ],
        ]);
    }

    protected function createPage(?int $actor): ResponseInterface
    {
        $options = [
            'json' => [
                'data' => [
                    'type'       => 'pages',
                    'attributes' => [
                        'title'   => 'New page',
                        'slug'    => 'new-page',
                        'content' => '<p>Hello</p>',
                        'isHtml'  => true,
                    ],
                ],
            ],
        ];

        if ($actor !== null) {
            $options['authenticatedAs'] = $actor;
        }

        return $this->send($this->request('POST', '/api/pages', $options));
    }

    protected function pageExists(): bool
    {
        return $this->database()->table('pages')->where('slug', 'new-page')->exists();
    }

    #[Test]
    public function guest_cannot_create_page(): void
    {
        $response = $this->createPage(null);

        $this->assertEquals(401, $response->getStatusCode());
        $this->assertFalse($this->pageExists());
    }

    #[Test]
    public function normal_user_cannot_create_page(): void
    {
        $response = $this->createPage(2);

        $this->assertEquals(403, $response->getStatusCode());
        $this->assertFalse($this->pageExists());
    }

    #[Test]
    public function admin_can_create_page(): void
    {
        $response = $this->createPage(1);

        $this->assertEquals(201, $response->getStatusCode(), (string) $response->getBody());
        $this->assertTrue($this->pageExists());
    }
}
