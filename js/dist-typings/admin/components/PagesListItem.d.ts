/**
 * ### Props
 *
 * - `page`
 * - `onchange` called after the page is saved or deleted
 */
export default class PagesListItem extends Component<any, undefined> {
    constructor();
    view(): JSX.Element;
    setAsHomePage(): void;
    loading: boolean | undefined;
    delete(): void;
}
import Component from 'flarum/common/Component';
