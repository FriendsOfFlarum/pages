<?php

namespace FoF\Pages\Providers;

use Flarum\Foundation\AbstractServiceProvider;
use FoF\Pages\Search\NoOpGambit;
use FoF\Pages\Search\PageSearcher;

class SearchServiceProvider extends AbstractServiceProvider
{
    public function register()
    {
        // Workaround for https://github.com/flarum/core/issues/2712
        $this->container->extend('flarum.simple_search.fulltext_gambits', function ($oldFulltextGambits) {
            $oldFulltextGambits[PageSearcher::class] = NoOpGambit::class;

            return $oldFulltextGambits;
        });
    }
}
