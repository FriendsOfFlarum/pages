import Page from 'flarum/components/Page';
import Button from 'flarum/components/Button';

import EditPageModal from './EditPageModal';
import PagesList from './PagesList';

export default class PagesPage extends Page {
    view() {
        return (
            <div className="PagesPage">
                <div className="PagesPage-header">
                    <div className="container">
                        <p>{app.translator.trans('fof-pages.admin.pages.about_text')}</p>
                        {Button.component({
                            className: 'Button Button--primary',
                            icon: 'fas fa-plus',
                            children: app.translator.trans('fof-pages.admin.pages.create_button'),
                            onclick: () => app.modal.show(new EditPageModal()),
                        })}
                    </div>
                </div>
                <div className="PagesPage-list">
                    <div className="container">{PagesList.component()}</div>
                </div>
            </div>
        );
    }
}
