<?php

/*
 * This file is part of fof/pages.
 *
 * Copyright (c) 2019 FriendsOfFlarum.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace FoF\Pages;

use Flarum\User\User;
use Illuminate\Database\Eloquent\Builder;

class PageRepository
{
    /**
     * Get a new query builder for the pages table.
     *
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function query()
    {
        return Page::query();
    }

    /**
     * Find a page by ID.
     *
     * @param int  $id
     * @param User $user
     *
     * @throws \Illuminate\Database\Eloquent\ModelNotFoundException
     *
     * @return Page
     */
    public function findOrFail($id, User $user = null)
    {
        $query = Page::where('id', $id)->orWhere('slug', $id);

        return $this->scopeVisibleTo($query, $user)->firstOrFail();
    }

    /**
     * Scope a query to only include records that are visible to a user.
     *
     * @param Builder $query
     * @param User    $user
     *
     * @return Builder
     */
    protected function scopeVisibleTo(Builder $query, User $user = null)
    {
        if ($user !== null && !$user->isAdmin()) {
            $query->whereIsHidden(0);
        }

        return $query;
    }
}
