import ExtensionPage from 'flarum/components/ExtensionPage';
import Button from 'flarum/components/Button';

import EditPageModal from './EditPageModal';
import PagesList from './PagesList';

export default class PagesPage extends ExtensionPage {
    oninit(vnode) {
        super.oninit(vnode);
    }
    content() {
        return (
            <div className="PagesPage">
                <div className="PagesPage-header">
                    <div className="container">
                        <p>{app.translator.trans('fof-pages.admin.pages.about_text')}</p>
                        {Button.component({
                            className: 'Button Button--primary',
                            icon: 'fas fa-plus',
                            onclick: () => app.modal.show(EditPageModal),
                        }, app.translator.trans('fof-pages.admin.pages.create_button'))}
                    </div>
                </div>
                <div className="PagesPage-list">
                    <div className="container">{PagesList.component()}</div>
                </div>
            </div>
        );
    }
}
