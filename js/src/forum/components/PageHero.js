import app from 'flarum/common/app';
import Component from 'flarum/common/Component';
import Link from 'flarum/common/components/Link';
import ItemList from 'flarum/common/utils/ItemList';
import listItems from 'flarum/common/helpers/listItems';

/**
 * The `PageHero` component displays the hero on a page page.
 *
 * ### Props
 *
 * - `page`
 */
export default class PageHero extends Component {
  view() {
    return (
      <header className="Hero PageHero">
        <div className="container">
          <ul className="PageHero-items">{listItems(this.items().toArray())}</ul>
        </div>
      </header>
    );
  }

  /**
   * Build an item list for the contents of the page hero.
   *
   * @return {ItemList}
   */
  items() {
    const items = new ItemList();
    const page = this.attrs.page;

    items.add(
      'title',
      <h1 className="PageHero-title">
        <Link href={app.route.page(page)}>{page.title()}</Link>
      </h1>
    );

    return items;
  }
}
