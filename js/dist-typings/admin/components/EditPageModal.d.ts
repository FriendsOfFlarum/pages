/**
 * The `EditPageModal` component shows a modal dialog which allows the user
 * to create or edit a page.
 */
export default class EditPageModal extends FormModal<import("flarum/common/components/FormModal").IFormModalAttrs, undefined> {
    constructor();
    oninit(vnode: any): void;
    page: any;
    pageTitle: any;
    slug: any;
    pageContent: any;
    isHidden: any;
    isRestricted: any;
    isHtml: any;
    content(): JSX.Element;
    onsubmit(e: any): void;
    hideAndRefresh(): void;
    delete(): void;
}
import FormModal from "flarum/common/components/FormModal";
