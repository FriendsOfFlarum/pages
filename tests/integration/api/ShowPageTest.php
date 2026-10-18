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
use FoF\Pages\Page;
use PHPUnit\Framework\Attributes\DataProvider;
use PHPUnit\Framework\Attributes\Test;

class ShowPageTest extends TestCase
{
    protected function setUp(): void
    {
        parent::setUp();

        $this->extension('fof-pages');

        $this->prepareDatabase([
            Page::class => [
                ['id' => 1, 'title' => 'First', 'slug' => 'first', 'content' => '<t>First</t>'],
                ['id' => 2, 'title' => 'About', 'slug' => 'about', 'content' => '<t>About</t>'],
                ['id' => 3, 'title' => 'Rules', 'slug' => '2024-rules', 'content' => '<t>Rules</t>'],
            ],
        ]);
    }

    /**
     * The forum links to `/p/{id}-{slug}`, and `/p/{slug}` and `/p/{id}` must keep working.
     *
     * @return array<string, array{0: string, 1: int}>
     */
    public static function lookups(): array
    {
        return [
            'id'                        => ['2', 2],
            'id and slug'               => ['2-about', 2],
            'slug'                      => ['about', 2],
            'slug starting with digits' => ['2024-rules', 3],
            'id and digit slug'         => ['3-2024-rules', 3],
        ];
    }

    #[Test]
    #[DataProvider('lookups')]
    public function page_can_be_found_by_id_or_slug(string $identifier, int $expectedId): void
    {
        $response = $this->send($this->request('GET', "/api/pages/$identifier"));

        $this->assertEquals(200, $response->getStatusCode(), (string) $response->getBody());
        $this->assertEquals($expectedId, (int) json_decode($response->getBody(), true)['data']['id']);
    }

    #[Test]
    public function unknown_slug_is_not_found(): void
    {
        $response = $this->send($this->request('GET', '/api/pages/missing'));

        $this->assertEquals(404, $response->getStatusCode());
    }
}
