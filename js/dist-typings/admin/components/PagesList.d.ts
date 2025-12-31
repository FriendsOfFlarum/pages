/**
 * The `PagesList` component displays a list of Pages.
 *
 */
export default class PagesList extends Component<any, undefined> {
    constructor();
    oninit(vnode: any): void;
    /**
     * Whether or not pages results are loading.
     *
     * @type {Boolean}
     */
    loading: boolean | undefined;
    /**
     * The pages in the pages list.
     *
     * @type {Page}
     */
    pages: any;
    /**
     * Current page number.
     *
     * @type {Integer}
     */
    page: any;
    /**
     * The number of activity items to load per request.
     *
     * @type {Integer}
     */
    loadLimit: any;
    view(): any;
    /**
     * @public
     */
    public refresh(clear?: boolean): Promise<Page[]>;
    /**
     * Load a new page of Pages results.
     *
     * @param {Integer} page number.
     * @return {Promise}
     */
    loadResults(): Promise<any>;
    /**
     * Load the next page of results.
     *
     * @public
     */
    public loadNext(): void;
    /**
     * Load the previous page of results.
     *
     * @public
     */
    public loadPrev(): void;
    /**
     * Parse results and append them to the page list.
     *
     * @param {Page[]} results
     * @return {Page[]}
     */
    parseResults(results: Page[]): Page[];
    nextResults: boolean | undefined;
    prevResults: boolean | undefined;
}
import Component from "flarum/common/Component";
