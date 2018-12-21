window.Vue = require('vue');

import App from './components/App.vue'
import router from './router/index'

import iView from 'iview';
import 'iview/dist/styles/iview.css';
import locale from 'iview/dist/locale/en-US';

Vue.use(iView, { locale });

const app = new Vue({
    el: '#app',
    components: {App},
    router
});
