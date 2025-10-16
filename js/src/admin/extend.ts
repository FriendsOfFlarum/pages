import app from 'flarum/admin/app';
import Extend from 'flarum/common/extenders';
import PagesPage from './components/PagesPage';
import Page from '../common/models/Page';

export default [
  new Extend.Admin() //
    .page(PagesPage) //
    .permission(
      () => ({
        icon: 'fas fa-file-alt',
        label: app.translator.trans('fof-pages.admin.permissions.restricted'),
        permission: 'fof-pages.viewRestricted',
      }),
      'view'
    ),

  new Extend.Store() //
    .add('pages', Page),
];
