import { extend } from 'flarum/common/extend';
import BasicsPage from 'flarum/admin/components/BasicsPage';

export default function () {
  extend(BasicsPage.prototype, 'homePageItems', (items) => {
    items.add('fof-pages', {
      path: '/pages/home',
      label: 'FriendsOfFlarum Pages',
    });
  });
}
