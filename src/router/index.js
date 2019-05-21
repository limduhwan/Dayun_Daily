import Vue from 'vue';
import Router from 'vue-router';
import Write from '../views/Write';
import List from '../views/List';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [

        {
            path: '/write',
            name: 'write',
            component: Write,
        },
        {
            path: '/list',
            name: 'list',
            component: List,
        },
    ]
});
