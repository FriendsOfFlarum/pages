<?php

/*
 * This file is part of fof/pages.
 *
 * Copyright (c) FriendsOfFlarum.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace FoF\Pages\Search;

use Flarum\Search\Database\AbstractSearcher;
use Flarum\User\User;
use FoF\Pages\Page;
use Illuminate\Database\Eloquent\Builder;

class PageSearcher extends AbstractSearcher
{
    public function getQuery(User $actor): Builder
    {
        return Page::whereVisibleTo($actor)->select('pages.*');
    }
}
