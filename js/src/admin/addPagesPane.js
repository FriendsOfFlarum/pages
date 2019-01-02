import { extend } from 'flarum/extend';
import AdminNav from 'flarum/components/AdminNav';
import AdminLinkButton from 'flarum/components/AdminLinkButton';

import PagesPage from './components/PagesPage';

export default function() {
    app.routes.pages = { path: 'pages', component: PagesPage.component() };

    app.extensionSettings['fof-pages'] = () => m.route(app.route('pages'));

    extend(AdminNav.prototype, 'items', items => {
        items.add(
            'pages',
            AdminLinkButton.component({
                href: app.route('pages'),
                icon: 'fas fa-file-alt',
                children: app.translator.trans('fof-pages.admin.nav.pages_button'),
                description: app.translator.trans('fof-pages.admin.nav.pages_text'),
            })
        );
    });
}
