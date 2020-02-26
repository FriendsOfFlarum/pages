<?php

/*
 * This file is part of fof/pages.
 *
 * Copyright (c) 2019 FriendsOfFlarum.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

use Flarum\Database\Migration;

return Migration::addColumns('pages', [
    'is_restricted' => ['boolean', 'default' => 0],
]);
