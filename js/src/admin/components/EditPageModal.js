import Modal from 'flarum/components/Modal';
import Button from 'flarum/components/Button';
import { slug } from 'flarum/utils/string';
import Stream from 'flarum/utils/Stream';
import withAttr from 'flarum/utils/withAttr';

/**
 * The `EditPageModal` component shows a modal dialog which allows the user
 * to create or edit a page.
 */
export default class EditPageModal extends Modal {
    oninit(vnode) {
        super.oninit(vnode);

        this.page = this.attrs.page || app.store.createRecord('pages');

        this.pageTitle = Stream(this.page.title() || '');
        this.slug = Stream(this.page.slug() || '');
        this.pageContent = Stream(this.page.content() || '');
        this.isHidden = Stream(this.page.isHidden());
        this.isRestricted = Stream(this.page.isRestricted());
        this.isHtml = Stream(this.page.isHtml());
    }

    className() {
        return 'EditPageModal Modal--large';
    }

    title() {
        const title = this.pageTitle();
        return title ? title : app.translator.trans('fof-pages.admin.edit_page.title');
    }

    content() {
        return (
            <div className="Modal-body">
                <div className="Form">
                    <div className="Form-group">
                        <label>{app.translator.trans('fof-pages.admin.edit_page.title_label')}</label>
                        <input
                            className="FormControl"
                            placeholder={app.translator.trans('fof-pages.admin.edit_page.title_placeholder')}
                            value={this.pageTitle()}
                            oninput={e => {
                                this.pageTitle(e.target.value);
                                this.slug(slug(e.target.value));
                            }}
                        />
                    </div>

                    <div className="Form-group">
                        <label>{app.translator.trans('fof-pages.admin.edit_page.slug_label')}</label>
                        <input
                            className="FormControl"
                            placeholder={app.translator.trans('fof-pages.admin.edit_page.slug_placeholder')}
                            value={this.slug()}
                            oninput={e => {
                                this.slug(e.target.value);
                            }}
                        />
                    </div>

                    <div className="Form-group">
                        <label>{app.translator.trans('fof-pages.admin.edit_page.content_label')}</label>
                        <textarea
                            className="FormControl"
                            rows="5"
                            value={this.pageContent()}
                            onchange={withAttr('value', this.pageContent)}
                            placeholder={app.translator.trans('fof-pages.admin.edit_page.content_placeholder')}
                        />
                    </div>

                    <div className="Form-group">
                        <div>
                            <label className="checkbox">
                                <input type="checkbox" checked={this.isHidden()} onchange={withAttr('checked', this.isHidden)} />
                                {app.translator.trans('fof-pages.admin.edit_page.hidden_label')}
                            </label>
                        </div>
                    </div>

                    <div className="Form-group">
                        <div>
                            <label className="checkbox">
                                <input type="checkbox" checked={this.isRestricted()} onchange={withAttr('checked', this.isRestricted)}/>
                                {app.translator.trans('fof-pages.admin.edit_page.restricted_label')}
                            </label>
                        </div>
                    </div>

                    <div className="Form-group">
                        <div>
                            <label className="checkbox">
                                <input type="checkbox" checked={this.isHtml()} onchange={withAttr('checked', this.isHtml)} />
                                {app.translator.trans('fof-pages.admin.edit_page.html_label')}
                            </label>
                        </div>
                    </div>

                    <div className="Form-group">
                        {Button.component({
                            type: 'submit',
                            className: 'Button Button--primary EditPageModal-save',
                            loading: this.loading,
                        }, app.translator.trans('fof-pages.admin.edit_page.submit_button'))}
                        {this.page.exists ? (
                            <button type="button" className="Button EditPageModal-delete" onclick={this.delete.bind(this)}>
                                {app.translator.trans('fof-pages.admin.edit_page.delete_page_button')}
                            </button>
                        ) : (
                            ''
                        )}
                    </div>
                </div>
            </div>
        );
    }

    onsubmit(e) {
        e.preventDefault();

        this.loading = true;

        this.page
            .save(
                {
                    title: this.pageTitle(),
                    slug: this.slug(),
                    content: this.pageContent(),
                    isHidden: this.isHidden(),
                    isRestricted: this.isRestricted(),
                    isHtml: this.isHtml(),
                },
                { errorHandler: this.onerror.bind(this) }
            )
            .then(this.hide.bind(this))
            .catch(() => {
                this.loading = false;
                m.redraw();
            });
    }

    onhide() {
        m.route(app.route('pages'));
    }

    delete() {
        if (confirm(app.translator.trans('fof-pages.admin.edit_page.delete_page_confirmation'))) {
            this.page.delete().then(() => m.redraw());
            this.hide();
        }
    }
}
