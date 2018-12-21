window.Vue = require('vue');

import App from './components/App.vue'
import router from './router/index'

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/reset.css'
import 'element-ui/lib/theme-chalk/display.css'
import locale from 'element-ui/lib/locale/lang/en';

Vue.use(Vuetify)
Vue.use(ElementUI, { locale })
Vue.use(ElementUI)

const app = new Vue({
    el: '#app',
    components: {App},
    router
});
