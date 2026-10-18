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

use Flarum\Testing\integration\TestCase;
use PHPUnit\Framework\Attributes\Test;

class ForumAttributesTest extends TestCase
{
    protected function setUp(): void
    {
        parent::setUp();

        $this->extension('fof-pages');
    }

    protected function forumAttributes(): array
    {
        $response = $this->send($this->request('GET', '/api'));

        $this->assertEquals(200, $response->getStatusCode(), (string) $response->getBody());

        return json_decode($response->getBody(), true)['data']['attributes'];
    }

    #[Test]
    public function home_page_id_is_serialized_to_the_forum(): void
    {
        $this->setting('pages_home', '5');

        $this->assertEquals('5', $this->forumAttributes()['fofPagesHome']);
    }

    #[Test]
    public function home_page_id_is_null_when_no_home_page_is_set(): void
    {
        $this->assertNull($this->forumAttributes()['fofPagesHome']);
    }
}
