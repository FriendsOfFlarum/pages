<?php

/*
 * This file is part of fof/pages.
 *
 * Copyright (c) FriendsOfFlarum.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace FoF\Pages\Search\Page;

use Flarum\Search\AbstractSearch;

class PageSearch extends AbstractSearch
{
    /**
     * {@inheritdoc}
     */
    protected $defaultSort = ['editTime' => 'desc'];
}
