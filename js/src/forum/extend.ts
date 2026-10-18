import app from 'flarum/forum/app';
import Extend from 'flarum/common/extenders';
import HomePage from './components/HomePage';
import PagePage from './components/PagePage';

import commonExtend from '../common/extend';

export default [
  ...commonExtend,

  new Extend.Routes() //
    .add('homePage', '/pages/home', HomePage) //
    .add('page', '/p/:id', PagePage) //
    .helper('page', (page) => app.route('page', { id: page.id() + '-' + page.slug() })),
];
