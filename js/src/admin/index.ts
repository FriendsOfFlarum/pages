import app from 'flarum/admin/app';
import addPageHomePageOption from './addPageHomePageOption';

export { default as extend } from './extend';

app.initializers.add('fof-pages', () => {
  addPageHomePageOption();
});
