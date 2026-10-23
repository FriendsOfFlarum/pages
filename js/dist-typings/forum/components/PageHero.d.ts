/**
 * The `PageHero` component displays the hero on a page page.
 *
 * ### Props
 *
 * - `page`
 */
export default class PageHero extends Hero<any> {
    constructor();
    /**
     * Build an item list for the contents of the page hero.
     *
     * @return {ItemList}
     */
    items(): ItemList<any>;
}
import Hero from 'flarum/forum/components/Hero';
import ItemList from 'flarum/common/utils/ItemList';
