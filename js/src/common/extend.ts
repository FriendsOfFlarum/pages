import Extend from 'flarum/common/extenders';
import Page from './models/Page';

export default [
  new Extend.Store() //
    .add('pages', Page),
];
