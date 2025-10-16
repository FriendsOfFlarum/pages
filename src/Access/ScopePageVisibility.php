<?php

/*
 * This file is part of fof/pages.
 *
 * Copyright (c) FriendsOfFlarum.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace FoF\Pages\Access;

use Flarum\User\User;
use Illuminate\Database\Eloquent\Builder;

class ScopePageVisibility
{
    public function __invoke(User $actor, Builder $query)
    {
        if (!$actor->hasPermission('fof-pages.viewHidden')) {
            $query->where('is_hidden', false);
        }

        if ($actor->hasPermission('fof-pages.viewHidden')) {
            $query->where('is_hidden', true)->orWhere('is_hidden', false);
        }

        if (!$actor->hasPermission('fof-pages.viewRestricted')) {
            $query->where('is_restricted', false);
        }

        if ($actor->hasPermission('fof-pages.viewRestricted')) {
            $query->where('is_restricted', true)->orWhere('is_restricted', false);
        }
    }
}
// 