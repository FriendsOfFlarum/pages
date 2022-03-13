import ExtensionPage from 'flarum/admin/components/ExtensionPage';
import Button from 'flarum/common/components/Button';

import EditPageModal from './EditPageModal';
import PagesList from './PagesList';

export default class PagesPage extends ExtensionPage {
  content() {
    return (
      <div className="PagesPage">
        <div className="PagesPage-header">
          <div className="container">
            {Button.component(
              {
                className: 'Button Button--primary',
                icon: 'fas fa-plus',
                onclick: () => app.modal.show(EditPageModal),
              },
              app.translator.trans('fof-pages.admin.pages.create_button')
            )}
          </div>
        </div>
        <div className="PagesPage-list">
          <div className="container">{PagesList.component()}</div>
        </div>
      </div>
    );
  }
}
