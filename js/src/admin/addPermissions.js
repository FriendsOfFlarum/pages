import {extend} from 'flarum/extend';
import PermissionGrid from 'flarum/components/PermissionGrid';

export default function () {
    extend(PermissionGrid.prototype, 'viewItems', items => {
        items.add('fof-pages-restricted', {
            icon: 'fas fa-file-alt',
            label: app.translator.trans('fof-pages.admin.permissions.restricted'),
            permission: 'fof-pages.viewRestricted',
        });
    });
}
