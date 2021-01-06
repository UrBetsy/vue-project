import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'HelloWorld',
            component: () => import('@/components/HelloWorld'),
        },
        {
            path: '/countdown',
            name: 'CountDown',
            component: () => import('@/components/CountDown')
        },
        {
            path: '/father',
            name: 'father',
            component: {
                template: '<router-view></router-view>'
            },
            children: [
                {
                    path: 'countdown',
                    name: 'CountDown',
                    component: () => import('@/components/CountDown')
                },
            ],
        },
    ],
    mode: 'hash',
});
