<?php

namespace FoF\Pages\Providers;

use Flarum\Formatter\Formatter;
use Flarum\Foundation\AbstractServiceProvider;
use Flarum\Foundation\Paths;
use FoF\Pages\Page;

class PageServiceProvider extends AbstractServiceProvider
{
    public function boot()
    {
        $this->container->instance('path.pages', ($this->container->make(Paths::class))->base . DIRECTORY_SEPARATOR . 'pages');

        Page::setFormatter($this->container->make(Formatter::class));
    }
}
