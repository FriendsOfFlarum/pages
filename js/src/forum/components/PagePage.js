import Page from 'flarum/components/Page';
import LoadingIndicator from 'flarum/components/LoadingIndicator';

import PageHero from './PageHero';

export default class PagePage extends Page {
    oninit(vnode) {
        super.oninit(vnode);

        /**
         * The page that is being viewed.
         *
         * @type {fof/pages/models/Page}
         */
        this.page = null;

        this.loadPage();

        this.bodyClass = 'App--page';
    }

    view() {
        const page = this.page;

        return (
            <div className="Pages">
                <div className="Pages-page">
                    {page
                        ? [
                              this.hero(),
                              <div className="Pages-container container">
                                  <div className="Post-body">{this.content()}</div>
                              </div>,
                          ]
                        : LoadingIndicator.component({ className: 'LoadingIndicator--block' })}
                </div>
            </div>
        );
    }

    /**
     * Initialize page.
     *
     * @param {fof/pages/models/Page} page
     * @protected
     */
    show(page) {
        this.page = page;

        app.history.push('page', page.title());
        app.setTitle(page.title());

        m.redraw();
    }

    /**
     * Get the hero of current page.
     */
    hero() {
        return PageHero.component({ page: this.page });
    }

    /**
     * Get the content of page.
     */
    content() {
        return m.trust(this.page.contentHtml());
    }

    /**
     * Get current page id from route.
     *
     * @return string
     */
    id() {
        const id = m.route.param('id').split('-')[0];
        if (!isNaN(parseInt(id))) {
          return id;
        } else {
          return m.route.param('id');
        }
      }

    /**
     * Load page from the store, or make a request
     * if we don't have it yet. Then initialize the page.
     */
    loadPage() {
        const id = this.id();

        const preloaded = app.preloadedApiDocument();
        const page = (!Array.isArray(preloaded) && preloaded) || app.store.getById('pages', id);

        if (page) {
            this.show(page);
        } else {
            app.store.find('pages', id).then(this.show.bind(this));
        }
    }
}
