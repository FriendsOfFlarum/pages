import app from 'flarum/common/app';
import Model from 'flarum/common/Model';
import computed from 'flarum/common/utils/computed';
import { getPlainContent } from 'flarum/common/utils/string';
import ItemList from 'flarum/common/utils/ItemList';
import Badge from 'flarum/common/components/Badge';

export default class Page extends Model {
  title = Model.attribute('title');
  createdAt = Model.attribute('createdAt', Model.transformDate);
  updatedAt = Model.attribute('updatedAt', Model.transformDate);
  content = Model.attribute('content');
  contentHtml = Model.attribute('contentHtml');
  contentPlain = computed('contentHtml', function (this: Page, contentHtml: unknown) {
    return getPlainContent(contentHtml as string);
  });
  slug = Model.attribute('slug');
  isHidden = Model.attribute('isHidden');
  isRestricted = Model.attribute('isRestricted');
  isHtml = Model.attribute('isHtml');

  badges() {
    const items = new ItemList();

    if (this.isHidden()) {
      items.add(
        'hidden',
        Badge.component({
          type: 'hidden',
          icon: 'fas fa-trash',
          label: app.translator.trans('fof-pages.admin.badges.hidden'),
        })
      );
    }

    if (this.isRestricted()) {
      items.add(
        'restricted',
        Badge.component({
          type: 'restricted',
          icon: 'fas fa-user-shield',
          label: app.translator.trans('fof-pages.admin.badges.restricted'),
        })
      );
    }

    return items;
  }
}
