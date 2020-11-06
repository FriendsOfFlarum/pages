import IndexPage from 'flarum/components/IndexPage';
import icon from 'flarum/helpers/icon';

import PagePage from './PagePage';

export default class HomePage extends PagePage {
    oninit(vdom) {
        super.oninit(vdom);

        app.history.push('homePage', icon('fas fa-home'));
        app.drawer.hide();
        app.modal.close();
    }

    show(page) {
        this.page = page;
        app.setTitle('');
        m.redraw.sync();
    }

    hero() {
        return IndexPage.prototype.hero();
    }

    id() {
        return app.data['fof-pages.home'];
    }
}
