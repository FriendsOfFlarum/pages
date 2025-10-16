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

use Flarum\Search\Filter\FilterInterface;
use Flarum\Search\SearchState;

/**
 * We need to register at least one gambit for the searcher or filter, but we don't actually have any
 * We only configure the searcher/filterer so we can use pagination and for extensions to hook into.
 */
class NoOpFilter implements FilterInterface
{
    public function getFilterKey(): string
    {
        return 'noop';
    }

    public function filter(SearchState $state, array|string $value, bool $negate): void
    {
        // Does nothing
    }
}
