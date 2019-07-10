<?php

/*
 * This file is part of fof/pages.
 *
 * Copyright (c) 2019 FriendsOfFlarum.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace FoF\Pages\Content;

use Flarum\Api\Client;
use Flarum\Frontend\Document;
use Flarum\Http\Exception\RouteNotFoundException;
use Flarum\Http\UrlGenerator;
use Flarum\Settings\SettingsRepositoryInterface;
use Flarum\User\User;
use FoF\Pages\Api\Controller\ShowPageController;
use Illuminate\Contracts\View\Factory;
use Psr\Http\Message\ServerRequestInterface;

class Page
{
    /**
     * @var Client
     */
    protected $api;

    /**
     * @var UrlGenerator
     */
    protected $url;

    /**
     * @var SettingsRepositoryInterface
     */
    protected $settings;

    /**
     * @var Factory
     */
    protected $view;

    /**
     * @param Client                      $api
     * @param UrlGenerator                $url
     * @param SettingsRepositoryInterface $settings
     * @param Factory                     $view
     */
    public function __construct(Client $api, UrlGenerator $url, SettingsRepositoryInterface $settings, Factory $view)
    {
        $this->api = $api;
        $this->url = $url;
        $this->settings = $settings;
        $this->view = $view;
    }

    public function __invoke(Document $document, ServerRequestInterface $request)
    {
        $queryParams = $request->getQueryParams();

        $params = [
            'id' => array_get($queryParams, 'id') ?? $this->settings->get('pages_home'),
        ];

        $apiDocument = $this->getApiDocument($request->getAttribute('actor'), $params);

        $document->content = $this->view->make('fof-pages::content.page', compact('apiDocument'));

        $document->payload['apiDocument'] = $apiDocument;

        return $document;
    }

    /**
     * Get the result of an API request to list discussions.
     *
     * @param User  $actor
     * @param array $params
     *
     * @return object
     */
    private function getApiDocument(User $actor, array $params)
    {
        $response = $this->api->send(ShowPageController::class, $actor, $params);

        if ($response->getStatusCode() === 404) {
            throw new RouteNotFoundException();
        }

        return json_decode($response->getBody());
    }
}
