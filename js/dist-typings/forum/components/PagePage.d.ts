export default class PagePage extends Page<import("flarum/common/components/Page").IPageAttrs, undefined> {
    constructor();
    oninit(vnode: any): void;
    /**
     * The page that is being viewed.
     *
     * @type {fof/pages/models/Page}
     */
    page: any;
    view(): JSX.Element;
    /**
     * Initialize page.
     *
     * @param {fof/pages/models/Page} page
     * @protected
     */
    protected show(page: any): void;
    /**
     * Get the hero of current page.
     */
    hero(): Mithril.Vnode;
    /**
     * Get the content of page.
     */
    content(): any;
    /**
     * Get current page id from route.
     *
     * @return string
     */
    id(): any;
    /**
     * Load page from the store, or make a request
     * if we don't have it yet. Then initialize the page.
     */
    loadPage(): void;
}
import Page from "flarum/common/components/Page";
