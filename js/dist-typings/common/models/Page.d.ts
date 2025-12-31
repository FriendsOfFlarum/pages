import Model from 'flarum/common/Model';
import ItemList from 'flarum/common/utils/ItemList';
export default class Page extends Model {
    title: () => unknown;
    createdAt: () => Date | null | undefined;
    updatedAt: () => Date | null | undefined;
    content: () => unknown;
    contentHtml: () => unknown;
    contentPlain: () => string;
    slug: () => unknown;
    isHidden: () => unknown;
    isRestricted: () => unknown;
    isHtml: () => unknown;
    badges(): ItemList<unknown>;
}
