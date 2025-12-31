<?php

/*
 * This file is part of fof/pages.
 *
 * Copyright (c) FriendsOfFlarum.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace FoF\Pages\Api\Resource;

use Flarum\Api\Context as FlarumContext;
use Flarum\Api\Endpoint;
use Flarum\Api\Resource;
use Flarum\Api\Schema;
use Flarum\Api\Sort\SortColumn;
use Flarum\Bus\Dispatcher;
use FoF\Pages\Command\DeletePage;
use FoF\Pages\Events\PageCreated;
use FoF\Pages\Events\PageDeleted;
use FoF\Pages\Page;
use FoF\Pages\PageRepository;
use FoF\Pages\Util\Html;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Arr;
use Tobyz\JsonApiServer\Context;

/**
 * @extends Resource\AbstractDatabaseResource<Page>
 */
class PageResource extends Resource\AbstractDatabaseResource
{
    public function __construct(
        protected Dispatcher $bus,
        protected PageRepository $pages
    ) {
    }

    public function type(): string
    {
        return 'pages';
    }

    public function model(): string
    {
        return Page::class;
    }

    /**
     * @param FlarumContext $context
     */
    public function scope(Builder $query, Context $context): void
    {
        $query->whereVisibleTo($context->getActor());
    }

    /**
     * @param FlarumContext $context
     */
    public function find(string $id, Context $context): ?object
    {
        return $this->pages->findOrFail((int) $id, $context->getActor());
    }

    public function endpoints(): array
    {
        return [
            Endpoint\Create::make(),
            Endpoint\Update::make(),
            Endpoint\Delete::make()
                ->action(function (FlarumContext $context) {
                    $attributes = $context->request->getAttributes();
                    $pageId = Arr::get($attributes, 'routeParameters.id');

                    $this->bus->dispatch(
                        new DeletePage($pageId, $context->getActor())
                    );
                }),
            Endpoint\Show::make(),
            Endpoint\Index::make()
                ->defaultSort('-createdAt')
                ->paginate(),
        ];
    }

    public function fields(): array
    {
        return [
            Schema\Str::make('title')
                ->requiredOnCreate()
                ->maxLength(200)
                ->writable(),

            Schema\Str::make('slug')
                ->requiredOnCreate()
                ->unique('pages', 'slug')
                ->maxLength(200)
                ->writable(),

            Schema\DateTime::make('createdAt'),

            Schema\DateTime::make('updatedAt')
                ->nullable(),

            Schema\Str::make('content')
                ->visible(fn (Page $page, FlarumContext $context) => $context->getActor()->isAdmin())
                ->requiredOnCreate()
                ->maxLength(16777215)
                ->writable(),

            Schema\Str::make('contentHtml')
                ->get(fn (Page $page, FlarumContext $context) => Html::render($page->content_html, $page)),

            Schema\Boolean::make('isHtml')
                ->writable(),

            Schema\Boolean::make('isHidden')
                ->writable()
                ->visible(fn (Page $page, FlarumContext $context) => $context->getActor()->isAdmin()),

            Schema\Boolean::make('isRestricted')
                ->writable()
                ->visible(fn (Page $page, FlarumContext $context) => $context->getActor()->isAdmin()),
        ];
    }

    public function sorts(): array
    {
        return [
            SortColumn::make('createdAt'),
        ];
    }

    /**
     * @param Page $model
     * @param FlarumContext $context
     */
    public function created(object $model, Context $context): ?object
    {
        $this->events->dispatch(
            new PageCreated($model, $context->getActor())
        );

        return parent::created($model, $context);
    }

    /**
     * @param Page $model
     * @param FlarumContext $context
     */
    public function deleted(object $model, Context $context): void
    {
        $this->events->dispatch(
            new PageDeleted($model, $context->getActor())
        );

        parent::deleted($model, $context);
    }
}
