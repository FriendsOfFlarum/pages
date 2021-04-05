<?php

namespace FoF\Pages\Search;

use Flarum\Filter\AbstractFilterer;
use Flarum\User\User;
use FoF\Pages\PageRepository;
use Illuminate\Database\Eloquent\Builder;

class PageFilterer extends AbstractFilterer
{
    /**
     * @var PageRepository
     */
    protected $pages;

    public function __construct(array $filters, array $filterMutators, PageRepository $pages)
    {
        parent::__construct($filters, $filterMutators);

        $this->pages = $pages;
    }

    protected function getQuery(User $actor): Builder
    {
        return $this->pages->query();
    }
}
