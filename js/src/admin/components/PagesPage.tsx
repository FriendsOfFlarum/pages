import app from 'flarum/admin/app';
import ExtensionPage from 'flarum/admin/components/ExtensionPage';
import Button from 'flarum/common/components/Button';

import EditPageModal from './EditPageModal';
import PagesList from './PagesList';

export default class PagesPage extends ExtensionPage {
  /**
   * Changing the key remounts the list, which reloads it without remounting this page.
   */
  listKey = 0;

  content() {
    return (
      <div className="PagesPage">
        <div className="PagesPage-header">
          <div className="container">
            <Button
              className="Button Button--primary"
              icon="fas fa-plus"
              onclick={() => app.modal.show(EditPageModal, { onchange: () => this.refreshList() })}
            >
              {app.translator.trans('fof-pages.admin.pages.create_button')}
            </Button>
          </div>
        </div>
        <div className="PagesPage-list">
          <div className="container">
            <PagesList key={this.listKey} onchange={() => this.refreshList()} />
          </div>
        </div>
      </div>
    );
  }

  refreshList() {
    this.listKey++;
    m.redraw();
  }
}
