import Vue from 'vue';
import Router from 'vue-router';
import Write from '../views/Write';
import List from '../views/List';
import Login from '../views/Login';
import Detail from '../views/Detail';

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
            path: '/detail/:detail_date',
            name: 'detail',
            component: Detail,
            props: true
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
