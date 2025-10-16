<?php

/*
 * This file is part of fof/pages.
 *
 * Copyright (c) FriendsOfFlarum.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace FoF\Pages\Api\Serializer;

use Flarum\Api\Serializer\AbstractSerializer;
use FoF\Pages\Page;
use FoF\Pages\Util\Html;

/**
 * @TODO: Remove this in favor of one of the API resource classes that were added.
 *      Or extend an existing API Resource to add this to.
 *      Or use a vanilla RequestHandlerInterface controller.
 *      @link https://docs.flarum.org/2.x/extend/api#endpoints
 */
class PageSerializer extends AbstractSerializer
{
    /**
     * {@inheritdoc}
     */
    protected $type = 'pages';

    /**
     * @param Page $page
     *
     * @return array
     */
    protected function getDefaultAttributes($page)
    {
        $attributes = [
            'id'          => $page->id,
            'title'       => $page->title,
            'slug'        => $page->slug,
            'time'        => $page->time,
            'editTime'    => $page->edit_time,
            'contentHtml' => Html::render($page->content_html, $page),
            'isHtml'      => $page->is_html,
        ];

        if ($this->actor->isAdmin()) {
            $attributes['content'] = $page->content;
            $attributes['isHidden'] = $page->is_hidden;
            $attributes['isRestricted'] = $page->is_restricted;
        }

        return $attributes;
    }
}
