<?php

use Flarum\Database\Migration;

return Migration::renameColumns('pages', [
    'time' => 'created_at',
    'edit_time' => 'updated_at',
]);
