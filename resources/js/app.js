window.Vue = require('vue');

import App from './components/App.vue'
import router from './router/index'
import store from './store/index'
import axios from 'axios'

import iView from 'iview';
import 'iview/dist/styles/iview.css';
import locale from 'iview/dist/locale/en-US';
import Hover from 'hover.css'
import CountryList from 'country-list'
import Vuebar from 'vuebar'
import VueProgressBar from 'vue-progressbar'
import Moment from 'vue-moment'
import VueEmoji from 'emoji-vue'

const options = {
    color: 'white',
    // failedColor: '#874b4b',
    // thickness: '3px',
    // transition: {
    //   speed: '0.1s',
    //   opacity: '1',
    //   termination: 300
    // },
    // autoRevert: true,
    // location: 'top',
    // inverse: false
  }

Vue.use(iView, { locale });
Vue.use(Hover)
Vue.use(CountryList)
Vue.use(Vuebar)
Vue.use(VueProgressBar, options)
Vue.use(Moment)
Vue.use(VueEmoji)


import Auth from '../js/api/auth'
import Reset from '../js/api/reset'
import User from '../js/api/user'
import Woof from '../js/api/woof'
import Comment from '../js/api/comment'
import ReWoof from '../js/api/rewoof'

Vue.use(Auth)
Vue.use(Reset)
Vue.use(User)
Vue.use(Woof)
Vue.use(Comment)
Vue.use(ReWoof)


window.axios=axios

const app = new Vue({
    el: '#app',
    components: {App},
    router,store,

    data(){
        return{
            active_name: 'timeline',
            profile_active_page: 'woofs',
            toggleEditProfile: false,

            WoofModal: false,
            CommentModal: false,
            ReWoofModal: false,
            Liked: false,

            fullname_hover: false,
        }
    }
});
