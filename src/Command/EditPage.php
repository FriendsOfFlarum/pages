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

class EditPage
{
    /**
     * @param int   $pageId The ID of the page to edit.
     */
    public function __construct(public $pageId, public User $actor, public array $data)
    {
    }
}
