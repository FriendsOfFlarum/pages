<?php

/*
 * This file is part of fof/pages.
 *
 * Copyright (c) FriendsOfFlarum.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace FoF\Pages;

use Carbon\Carbon;
use Flarum\Database\AbstractModel;
use Flarum\Database\ScopeVisibilityTrait;
use Flarum\Formatter\Formatter;
use Flarum\Post\Post;
use Illuminate\Database\Eloquent\Factories\HasFactory;

/**
 * @property string $title
 * @property string $slug
 * @property Carbon $created_at
 * @property Carbon $updated_at
 * @property string $content
 * @property bool   $is_hidden
 * @property bool   $is_restricted
 * @property bool   $is_html
 */
class Page extends AbstractModel
{
    use ScopeVisibilityTrait;
    use HasFactory;

    protected $table = 'pages';

    protected $casts = [
        'id'            => 'integer',
        'is_hidden'     => 'boolean',
        'is_restricted' => 'boolean',
        'is_html'       => 'boolean',
        'created_at'    => 'datetime',
        'updated_at'    => 'datetime',
    ];

    public $timestamps = true;

    /**
     * The text formatter instance.
     *
     * @var \Flarum\Formatter\Formatter
     */
    protected static $formatter;

    /**
     * Unparse the parsed content.
     *
     * @param string $value
     *
     * @return string
     */
    public function getContentAttribute($value)
    {
        return static::$formatter->unparse($value, new Post());
    }

    /**
     * Get the parsed/raw content.
     *
     * @return string
     */
    public function getParsedContentAttribute()
    {
        return $this->attributes['content'];
    }

    /**
     * Parse the content before it is saved to the database.
     *
     * @param string $value
     */
    public function setContentAttribute($value): void
    {
        $this->attributes['content'] = $value ? static::$formatter->parse($value, $this) : null;
    }

    /**
     * Get the content rendered as HTML.
     *
     * @return string
     */
    public function getContentHtmlAttribute()
    {
        if ($this->is_html) {
            return $this->content;
        }

        return static::$formatter->render($this->attributes['content'], $this);
    }

    /**
     * Get the text formatter instance.
     *
     * @return \Flarum\Formatter\Formatter
     */
    public static function getFormatter()
    {
        return static::$formatter;
    }

    /**
     * Set the text formatter instance.
     *
     * @param \Flarum\Formatter\Formatter $formatter
     */
    public static function setFormatter(Formatter $formatter): void
    {
        static::$formatter = $formatter;
    }
}
