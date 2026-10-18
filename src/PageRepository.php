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

use Flarum\User\Guest;
use Flarum\User\User;
use Illuminate\Database\Eloquent\ModelNotFoundException;

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
     * Find a page by ID, by slug, or by the `{id}-{slug}` the forum links to.
     *
     * @param int|string $id
     * @param User       $user
     *
     * @throws ModelNotFoundException
     *
     * @return Page
     */
    public function findOrFail($id, ?User $user = null)
    {
        $id = (string) $id;

        $query = Page::query()
            // We never pass a null $user from our own code, but third-party extensions
            // like v17development/flarum-seo do it so we must allow null for backward compatibility
            ->whereVisibleTo($user ?? new Guest());

        $bySlug = fn () => (clone $query)->where('slug', $id)->first();
        $byId = fn () => preg_match('/^(\d+)(?:-|$)/', $id, $matches)
            ? (clone $query)->where('id', (int) $matches[1])->first()
            : null;

        // A bare number is an ID. Anything else is a slug, unless no page has it as one.
        $page = ctype_digit($id) ? ($byId() ?? $bySlug()) : ($bySlug() ?? $byId());

        if (!$page) {
            throw (new ModelNotFoundException())->setModel(Page::class, [$id]);
        }

        return $page;
    }
}
