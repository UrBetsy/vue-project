import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('@/pages/lifankeke-learn/home'),
        },
        {
            path: '/learn',
            name: 'learn',
            component: {
                template: '<router-view></router-view>'
            },
            children: [
                {
                    path: 'functional-component',
                    meta: {title: '功能组件'},
                    component: () => import('@/pages/lifankeke-learn/functional-component')
                },
                {
                    path: 'count-down',
                    meta: {title: '定时器'},
                    component: () => import('@/pages/lifankeke-learn/count-down')
                },
                {
                    path: 'model-component',
                    meta: {title: '功能组件'},
                    component: () => import('@/pages/lifankeke-learn/model-component')
                },
                {
                    path: 'test-directive',
                    meta: {title: '自定义指令'},
                    component: () => import('@/pages/lifankeke-learn/test-directive')
                },
            ],
        },
        {
            path: '/blog',
            name: 'blog',
            component: {
                template: '<router-view></router-view>'
            },
            children: [
                {
                    path: 'vue1',
                    meta: {title: 'vue基础1'},
                    component: () => import('@/pages/lifankeke-blog/vue1')
                },
                {
                    path: 'vue2',
                    meta: {title: 'vue基础2'},
                    component: () => import('@/pages/lifankeke-blog/vue2')
                },
            ],
        },
    ],
    mode: 'hash',
});
