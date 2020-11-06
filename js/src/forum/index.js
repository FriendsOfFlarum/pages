import HomePage from './components/HomePage';
import PagePage from './components/PagePage';
import Page from '../common/models/Page';

app.initializers.add('fof-pages', app => {
    app.routes.homePage = { path: '/pages/home', component: HomePage };

    app.routes.page = { path: '/p/:id', component: PagePage };
    app.store.models.pages = Page;

    /**
     * Generate a URL to a page.
     *
     * @param {../common/models/Page} page
     * @return {String}
     */
    app.route.page = page => {
        return app.route('page', {
            id: page.id() + '-' + page.slug(),
        });
    };
});
