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

use Flarum\Filter\AbstractFilterer;
use Flarum\User\User;
use FoF\Pages\PageRepository;
use Illuminate\Database\Eloquent\Builder;

class PageFilterer extends AbstractFilterer
{
    public function __construct(array $filters, array $filterMutators, protected PageRepository $pages)
    {
        parent::__construct($filters, $filterMutators);
    }

    protected function getQuery(User $actor): Builder
    {
        return $this->pages->query();
    }
}
