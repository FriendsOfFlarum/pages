<?php

/*
 * This file is part of fof/pages.
 *
 * Copyright (c) FriendsOfFlarum.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace FoF\Pages;

use Flarum\Extend;

return [
    new Extend\Locales(__DIR__.'/resources/locale'),

    (new Extend\Frontend('admin'))
        ->css(__DIR__.'/resources/less/admin.less')
        ->js(__DIR__.'/js/dist/admin.js'),

    (new Extend\Frontend('forum'))
        ->css(__DIR__.'/resources/less/forum.less')
        ->js(__DIR__.'/js/dist/forum.js')
        ->route('/pages/home', 'pages.home')
        ->route('/p/{id:[\d\S]+(?:-[^/]*)?}', 'pages.page', Content\Page::class)
        ->content(Content\AddHomePageId::class),

    (new Extend\View())
        ->namespace('fof-pages', __DIR__.'/resources/views'),

    (new Extend\ModelVisibility(Page::class))
        ->scope(Access\ScopePageVisibility::class),

    (new Extend\ServiceProvider())
        ->register(Providers\PageServiceProvider::class),

    new Extend\ApiResource(Api\Resource\PageResource::class),

    (new Extend\SearchDriver(\Flarum\Search\Database\DatabaseSearchDriver::class))
        ->addSearcher(Page::class, Search\PageSearcher::class),
];
