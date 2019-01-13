<?php

/*
 * This file is part of fof/pages.
 *
 * Copyright (c) 2019 FriendsOfFlarum.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace FoF\Pages\Command;

use Flarum\User\AssertPermissionTrait;
use FoF\Pages\Page;
use FoF\Pages\PageValidator;

class CreatePageHandler
{
    use AssertPermissionTrait;

    /**
     * @var PageValidator
     */
    protected $validator;

    /**
     * @param PageValidator $validator
     */
    public function __construct(PageValidator $validator)
    {
        $this->validator = $validator;
    }

    /**
     * @param CreatePage $command
     *
     * @return Page
     */
    public function handle(CreatePage $command)
    {
        $actor = $command->actor;
        $data = $command->data;

        $this->assertAdmin($actor);

        $page = Page::build(
            array_get($data, 'attributes.title'),
            array_get($data, 'attributes.slug'),
            array_get($data, 'attributes.content'),
            array_get($data, 'attributes.isHidden'),
            array_get($data, 'attributes.isHtml')
        );

        $this->validator->assertValid($page->getAttributes());

        $page->save();

        return $page;
    }
}
