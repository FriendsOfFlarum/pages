/**
 * The `PageHero` component displays the hero on a page page.
 *
 * ### Props
 *
 * - `page`
 */
export default class PageHero extends Component<any, undefined> {
    constructor();
    view(): JSX.Element;
    /**
     * Build an item list for the contents of the page hero.
     *
     * @return {ItemList}
     */
    items(): ItemList<any>;
}
import Component from "flarum/common/Component";
import ItemList from "flarum/common/utils/ItemList";
