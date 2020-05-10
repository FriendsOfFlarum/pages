<?php

/*
 * This file is part of fof/pages.
 *
 * Copyright (c) 2019 FriendsOfFlarum.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace FoF\Pages\Access;

use Flarum\User\AbstractPolicy;
use Flarum\User\User;
use FoF\Pages\Page;
use Illuminate\Database\Eloquent\Builder;

class PagePolicy extends AbstractPolicy
{
    protected $model = Page::class;

    public function find(User $actor, Builder $query)
    {
        if (!$actor->hasPermission('fof-pages.viewHidden')) {
            $query->whereIsHidden(0);
        }

        if (!$actor->hasPermission('fof-pages.viewRestricted')) {
            $query->whereIsRestricted(0);
        }
    }
}
