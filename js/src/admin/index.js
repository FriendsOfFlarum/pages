import Page from '../common/models/Page';
import PagesPage from './components/PagesPage';
import addPageHomePageOption from './addPageHomePageOption';

app.initializers.add('fof-pages', (app) => {
    app.store.models.pages = Page;

    app.extensionData
        .for('fof-pages')
        .registerPage(PagesPage)
        .registerPermission(
            {
                icon: 'fas fa-file-alt',
                label: app.translator.trans('fof-pages.admin.permissions.restricted'),
                permission: 'fof-pages.viewRestricted',
            },
            'view'
        );

    addPageHomePageOption();
});
