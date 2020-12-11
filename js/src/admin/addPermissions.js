import app from 'flarum/app';

export default function () {
    app.extensionData
        .for('fof-pages')
        .registerPermission({
            icon: 'fas fa-file-alt',
            label: app.translator.trans('fof-pages.admin.permissions.restricted'),
            permission: 'fof-pages.viewRestricted',
        }, 'view');
}
