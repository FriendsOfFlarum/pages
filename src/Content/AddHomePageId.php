<?php

namespace FoF\Pages\Content;

use Flarum\Frontend\Document;
use Flarum\Settings\SettingsRepositoryInterface;

class AddHomePageId {
    /**
     * @var SettingsRepositoryInterface
     */
    protected $settings;

    /**
     * @param SettingsRepositoryInterface $settings
     */
    public function __construct(SettingsRepositoryInterface $settings)
    {
        $this->settings = $settings;
    }

    public function __invoke(Document $document) {
        if (($id = $this->settings->get('pages_home')) != null) {
            $document->payload['fof-pages.home'] = $id;
        }
    }
}

