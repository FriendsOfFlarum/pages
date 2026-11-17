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
use Illuminate\Filesystem\Filesystem;
use PHPUnit\Framework\Attributes\DataProvider;
use PHPUnit\Framework\Attributes\Test;

class IncludeTest extends TestCase
{
    private string $root;

    protected function setUp(): void
    {
        parent::setUp();

        $this->extension('fof-pages');

        // <root>/pages holds the includable views; <root>/pages_old is a sibling
        // whose name starts with the pages folder's name.
        // Resolved, so a symlinked temp folder (macOS) doesn't hide the prefix bug.
        $this->root = realpath(sys_get_temp_dir()).DIRECTORY_SEPARATOR.'fof-pages-include-'.bin2hex(random_bytes(4));
        mkdir($this->root.'/pages/sub', 0777, true);
        mkdir($this->root.'/pages_old', 0777, true);
        file_put_contents($this->root.'/pages/inside.php', 'INSIDE');
        file_put_contents($this->root.'/pages_old/outside.php', 'OUTSIDE');
    }

    protected function tearDown(): void
    {
        (new Filesystem())->deleteDirectory($this->root);

        parent::tearDown();
    }

    /**
     * @return array<string, array{0: string, 1: string, 2: string}>
     */
    public static function includes(): array
    {
        return [
            'file in the pages folder'          => ['pages', '@include(inside)', 'INSIDE'],
            'path through a subfolder'          => ['pages', '@include(sub/../inside)', 'INSIDE'],
            'sibling folder with a prefix name' => ['pages', '@include(sub/../../pages_old/outside)', '@include(sub/../../pages_old/outside)'],
            'pages folder reached by a symlink' => ['linked', '@include(inside)', 'INSIDE'],
            'symlink in pages pointing outside' => ['pages', '@include(escape)', '@include(escape)'],
        ];
    }

    #[Test]
    #[DataProvider('includes')]
    public function include_renders_only_files_inside_the_pages_folder(string $pagesFolder, string $content, string $expected): void
    {
        if ($pagesFolder === 'linked' || $content === '@include(escape)') {
            if (!@symlink($this->root.'/pages', $this->root.'/linked')
                || !@symlink($this->root.'/pages_old/outside.php', $this->root.'/pages/escape.php')) {
                $this->markTestSkipped('This system cannot create symlinks.');
            }
        }

        $this->prepareDatabase([
            Page::class => [
                ['id' => 1, 'title' => 'Include', 'slug' => 'include', 'content' => $content, 'is_html' => true],
            ],
        ]);

        $this->app()->getContainer()->instance('path.pages', $this->root.DIRECTORY_SEPARATOR.$pagesFolder);

        $response = $this->send($this->request('GET', '/api/pages/1'));

        $this->assertEquals(200, $response->getStatusCode(), (string) $response->getBody());
        $this->assertEquals($expected, json_decode($response->getBody(), true)['data']['attributes']['contentHtml']);
    }
}
