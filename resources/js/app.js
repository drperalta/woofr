window.Vue = require('vue');

import App from './components/App.vue'
import router from './router/index'

const app = new Vue({
    el: '#app',
    components: {App},
    router
});
