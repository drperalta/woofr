window.Vue = require('vue');

import router from './router/index'

import App from './components/App.vue'

const app = new Vue({
    el: '#app',
    components: {App},
    router
});
