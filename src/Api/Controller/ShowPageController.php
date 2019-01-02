<?php

namespace FoF\Pages\Api\Controller;

use Flarum\Api\Controller\AbstractShowController;
use Psr\Http\Message\ServerRequestInterface;
use FoF\Pages\PageRepository;
use Tobscure\JsonApi\Document;

class ShowPageController extends AbstractShowController
{
    /**
     * {@inheritdoc}
     */
    public $serializer = 'FoF\Pages\Api\Serializer\PageSerializer';

    /**
     * @var PageRepository
     */
    protected $pages;

    /**
     * @param PageRepository $pages
     */
    public function __construct(PageRepository $pages)
    {
        $this->pages = $pages;
    }

    /**
     * {@inheritdoc}
     */
    protected function data(ServerRequestInterface $request, Document $document)
    {
        $id = array_get($request->getQueryParams(), 'id');

        $actor = $request->getAttribute('actor');

        return $this->pages->findOrFail($id, $actor);
    }
}
