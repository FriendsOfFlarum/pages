import IndexPage from 'flarum/forum/components/IndexPage';
import icon from 'flarum/common/helpers/icon';

import PagePage from './PagePage';

export default class HomePage extends PagePage {
    oninit(vnode) {
        super.oninit(vnode);

        app.history.push('homePage', icon('fas fa-home'));
        app.drawer.hide();
        app.modal.close();
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
        return app.data['fof-pages.home'];
    }
}
