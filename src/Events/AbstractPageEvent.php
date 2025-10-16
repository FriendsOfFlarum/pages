<?php

/*
 * This file is part of fof/pages.
 *
 * Copyright (c) FriendsOfFlarum.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace FoF\Pages\Events;

use Flarum\User\User;
use FoF\Pages\Page;

class AbstractPageEvent
{
    public function __construct(
        public Page $page,
        public User $actor
    ) {
    }
}
