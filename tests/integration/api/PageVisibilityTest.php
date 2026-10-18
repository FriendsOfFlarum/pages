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

use Flarum\Group\Group;
use Flarum\Testing\integration\RetrievesAuthorizedUsers;
use Flarum\Testing\integration\TestCase;
use Flarum\User\User;
use FoF\Pages\Page;
use PHPUnit\Framework\Attributes\DataProvider;
use PHPUnit\Framework\Attributes\Test;

class PageVisibilityTest extends TestCase
{
    use RetrievesAuthorizedUsers;

    protected function setUp(): void
    {
        parent::setUp();

        $this->extension('fof-pages');

        $this->prepareDatabase([
            User::class => [
                $this->normalUser(),
            ],
            Page::class => [
                ['id' => 1, 'title' => 'Public', 'slug' => 'public', 'content' => '<t>Public</t>', 'is_hidden' => false, 'is_restricted' => false],
                ['id' => 2, 'title' => 'Hidden', 'slug' => 'hidden', 'content' => '<t>Hidden</t>', 'is_hidden' => true, 'is_restricted' => false],
                ['id' => 3, 'title' => 'Restricted', 'slug' => 'restricted', 'content' => '<t>Restricted</t>', 'is_hidden' => false, 'is_restricted' => true],
                ['id' => 4, 'title' => 'Hidden and restricted', 'slug' => 'hidden-restricted', 'content' => '<t>Both</t>', 'is_hidden' => true, 'is_restricted' => true],
            ],
        ]);
    }

    /**
     * @return array<string, array{0: list<string>, 1: list<int>}>
     */
    public static function memberPermissions(): array
    {
        return [
            'no permissions'      => [[], [1]],
            'view hidden'         => [['fof-pages.viewHidden'], [1, 2]],
            'view restricted'     => [['fof-pages.viewRestricted'], [1, 3]],
            'view both'           => [['fof-pages.viewHidden', 'fof-pages.viewRestricted'], [1, 2, 3, 4]],
        ];
    }

    /**
     * @param list<string> $permissions
     * @param list<int>    $visible
     */
    #[Test]
    #[DataProvider('memberPermissions')]
    public function member_sees_only_pages_their_permissions_allow(array $permissions, array $visible): void
    {
        $this->prepareDatabase([
            'group_permission' => array_map(fn (string $permission) => ['group_id' => Group::MEMBER_ID, 'permission' => $permission], $permissions),
        ]);

        $response = $this->send($this->request('GET', '/api/pages', ['authenticatedAs' => 2]));

        $this->assertEquals(200, $response->getStatusCode(), (string) $response->getBody());
        $this->assertEqualsCanonicalizing($visible, $this->ids($response->getBody()));

        foreach ([1, 2, 3, 4] as $id) {
            $show = $this->send($this->request('GET', "/api/pages/$id", ['authenticatedAs' => 2]));

            $this->assertEquals(in_array($id, $visible, true) ? 200 : 404, $show->getStatusCode(), "page $id");
        }
    }

    #[Test]
    public function guest_sees_only_public_pages(): void
    {
        $response = $this->send($this->request('GET', '/api/pages'));

        $this->assertEquals(200, $response->getStatusCode(), (string) $response->getBody());
        $this->assertEquals([1], $this->ids($response->getBody()));
    }

    #[Test]
    public function admin_sees_every_page(): void
    {
        $response = $this->send($this->request('GET', '/api/pages', ['authenticatedAs' => 1]));

        $this->assertEquals(200, $response->getStatusCode(), (string) $response->getBody());
        $this->assertEqualsCanonicalizing([1, 2, 3, 4], $this->ids($response->getBody()));
    }

    /**
     * @return list<int>
     */
    protected function ids(string $body): array
    {
        return array_map(fn (array $page) => (int) $page['id'], json_decode($body, true)['data']);
    }
}
