<?php

namespace FoF\Pages\Command;

use Flarum\Settings\SettingsRepositoryInterface;
use Flarum\User\AssertPermissionTrait;
use FoF\Pages\PageRepository;

class DeletePageHandler
{
    use AssertPermissionTrait;

    /**
     * @var SettingsRepositoryInterface
     */
    protected $settings;

    /**
     * @var PageRepository
     */
    protected $pages;

    /**
     * @param PageRepository $pages
     */
    public function __construct(PageRepository $pages, SettingsRepositoryInterface $settings)
    {
        $this->pages = $pages;
        $this->settings = $settings;
    }

    /**
     * @param DeletePage $command
     *
     * @return \FoF\Pages\Page
     *
     * @throws \Flarum\Core\Exception\PermissionDeniedException
     */
    public function handle(DeletePage $command)
    {
        $actor = $command->actor;

        $page = $this->pages->findOrFail($command->pageId, $actor);

        $this->assertAdmin($actor);

        // if it has been set as home page revert back to default router
        $homePage = intval($this->settings->get('pages_home'));
        if ($homePage && $page->id === $homePage) {
            $this->settings->delete('pages_home');
            $this->settings->set('default_route', '/all');
        }

        $page->delete();

        return $page;
    }
}
