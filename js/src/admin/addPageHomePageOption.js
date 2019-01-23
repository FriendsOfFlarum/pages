import { extend } from 'flarum/extend';
import BasicsPage from 'flarum/components/BasicsPage';

export default function() {
    extend(BasicsPage.prototype, 'homePageItems', items => {
        items.add('fof-pages', {
            path: '/pages/home',
            label: 'FriendsOfFlarum Pages',
        });
    });
}
