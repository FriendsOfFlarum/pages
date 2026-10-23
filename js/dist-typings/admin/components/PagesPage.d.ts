import ExtensionPage from 'flarum/admin/components/ExtensionPage';
export default class PagesPage extends ExtensionPage {
    /**
     * Changing the key remounts the list, which reloads it without remounting this page.
     */
    listKey: number;
    content(): JSX.Element;
    refreshList(): void;
}
