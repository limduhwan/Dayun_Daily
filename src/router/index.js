import Vue from 'vue';
import Router from 'vue-router';
import Write from '../views/Write';
import List from '../views/List';
import Login from '../views/Login';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/write/:detail_date',
            name: 'write',
            component: Write,
            props: true
        },
        {
            path: '/list/',
            name: 'list',
            component: List,
        },
    ]
});
