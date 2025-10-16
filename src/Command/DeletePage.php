<?php

/*
 * This file is part of fof/pages.
 *
 * Copyright (c) FriendsOfFlarum.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace FoF\Pages\Command;

use Flarum\User\User;

class DeletePage
{
    /**
     * @param int   $pageId The ID of the page to delete.
     *                      is unused by default, but may be used by extensions.
     */
    public function __construct(public $pageId, public User $actor, public array $data = [])
    {
    }
}
