import Page from '../common/models/Page';
import PagesPage from './components/PagesPage';
import addPageHomePageOption from './addPageHomePageOption';
import addPermissions from './addPermissions';

app.initializers.add('fof-pages', app => {
    app.store.models.pages = Page;

    app.extensionData.for('fof-pages').registerPage(PagesPage);
    
    addPageHomePageOption();
    addPermissions();
});
