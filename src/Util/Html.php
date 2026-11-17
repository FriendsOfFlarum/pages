<?php

/*
 * This file is part of fof/pages.
 *
 * Copyright (c) FriendsOfFlarum.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace FoF\Pages\Util;

use FoF\Pages\Page;

class Html
{
    public static function render(?string $html, Page $page): string
    {
        if (empty($html)) {
            return '';
        }

        $base = strpos($html, '@include(') !== false ? realpath(resolve('path.pages')) : false;

        if ($base !== false) {
            $html = preg_replace_callback(
                '/\@include\([\"\']?([\.\/\w\s]+)[\"\']?\)/mi',
                function ($matches) use ($base, $page) {
                    $path = trim($matches[1], " \r\n\t\f/.");
                    $path = $base.DIRECTORY_SEPARATOR.$path;
                    if (substr($path, -4) != '.php') {
                        $path .= '.php';
                    }
                    $path = realpath($path);
                    // The separator stops a sibling folder whose name starts with the pages folder's name from passing.
                    if ($path !== false && str_starts_with($path, $base.DIRECTORY_SEPARATOR) && is_readable($path)) {
                        $view = resolve('view')->file($path);
                        /** @phpstan-ignore-next-line */
                        $view->page = $page;

                        return $view->render();
                    }

                    return $matches[0];
                },
                $html
            );
        }

        return $html;
    }
}
