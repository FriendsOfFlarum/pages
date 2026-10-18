import app from 'flarum/forum/app';
import IndexPage from 'flarum/forum/components/IndexPage';
import extractText from 'flarum/common/utils/extractText';

import PagePage from './PagePage';

export default class HomePage extends PagePage {
  oninit(vnode) {
    super.oninit(vnode);

    app.history.push('homePage', extractText(app.translator.trans('core.forum.header.back_to_index_tooltip')));
  }

  show(page) {
    this.page = page;
    app.setTitle('');
    m.redraw();
  }

  hero() {
    return IndexPage.prototype.hero();
  }

  id() {
    return app.forum.attribute('fofPagesHome');
  }
}
