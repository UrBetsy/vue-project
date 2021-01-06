// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import less from 'less';
import Filters from './filters';
import {
    directivePlugin,
} from './plugin/directivePlugin';

Vue.config.productionTip = false;

Vue.use(less);
Vue.use(ElementUI);
Vue.use(directivePlugin);
// 过滤器
Object.keys(Filters).forEach(function (key) {
    Vue.filter(key, Filters[key]);
});
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App, },
    template: '<App/>',
});
