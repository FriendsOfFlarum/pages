<?php

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
