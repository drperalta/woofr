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


import Auth from '../js/api/auth'
import Reset from '../js/api/reset'
import User from '../js/api/user'

Vue.use(Auth)
Vue.use(Reset)
Vue.use(User)




window.axios=axios

const app = new Vue({
    el: '#app',
    components: {App},
    router,store,

    data(){
        return{
            active_name: 'timeline',
            profile_active_page: 'woofs',
            users: [
                {
                    id: 1,
                    full_name: 'Bea Amor',
                    user_name: 'beaamor0212',
                    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s',
                    following: true,
                },
                {   id: 2,
                    full_name: 'David Peralta',
                    user_name: 'IamDavidMe',
                    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s',
                    following: true,
                },
                {
                    id: 3,
                    full_name: 'Nikki',
                    user_name: 'iAmNikkiME',
                    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s',
                    following: true,
                },
                {   id: 4,
                    full_name: 'Rica Camiguing',
                    user_name: 'ricamiguing_',
                    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s',
                    following: true,
                },
                {   id: 5,
                    full_name: 'Jan Raphael',
                    user_name: 'janraphael11',
                    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s',
                    following: true,
                },
                {   id: 6,
                    full_name: 'Tacs',
                    user_name: 'xtephaein',
                    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s',
                    following: true,
                },
                {   id: 7,
                    full_name: 'Lizzy',
                    user_name: 'heyitsmelizzy',
                    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s',
                    following: true,
                },
                {   id: 8,
                    full_name: 'Deysi',
                    user_name: 'aisybomi',
                    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s',
                    following: true,
                },
                {   id: 9,
                    full_name: 'L i a n',
                    user_name: 'cstrlian',
                    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s',
                    following: true,
                }
            ],
            Woofs:[
                {
                    id: 1,
                    user_id: 1,
                    woof_text: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s',
                    user_name: 'IamDavidMe',
                    full_name: 'David Peralta',
                    comments: 5,
                    re_woof: 2,
                    likes: 7,
                    re_woofed: true,
                    liked: false
                },
                {
                    id: 2,
                    user_id: 2,
                    woof_text: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s',
                    user_name: 'IamNikkiMe',
                    full_name: 'Mary Nicole',
                    comments: 12,
                    re_woof: 2,
                    likes: 5,
                    re_woofed: true,
                    liked: false
                },
                {
                    id: 3,
                    user_id: 3,
                    woof_text: 'is simply dummy text of the printing and typesetting industry.',
                    user_name: 'beaamor0212',
                    full_name: 'Bea Amor',
                    comments: 5,
                    re_woof: 1,
                    likes: 2,
                    re_woofed: true,
                    liked: true
                },
                {
                    id: 4,
                    user_id: 2,
                    woof_text: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s',
                    user_name: 'IamNikkiMe',
                    full_name: 'Mary Nicole',
                    comments: 1,
                    re_woof: 5,
                    likes: 5,
                    re_woofed: false,
                    liked: false

                },
                {
                    id: 5,
                    user_id: 4,
                    woof_text: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
                    user_name: 'ricamiguing_',
                    full_name: 'Rice Lois',
                    comments: 0,
                    re_woof: 2,
                    likes: 4,
                    re_woofed: false,
                    liked: true
                },
                {
                    id: 6,
                    user_id: 3,
                    woof_text: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
                    user_name: 'beaamor0212',
                    full_name: 'Bea Amor',
                    comments: 22,
                    re_woof: 12,
                    likes: 26,
                    re_woofed: true,
                    liked: false
                },
                {
                    id: 7,
                    user_id: 3,
                    woof_text: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
                    user_name: 'beaamor0212',
                    full_name: 'Bea Amor',
                    comments: 6,
                    re_woof: 9,
                    likes: 15,
                    re_woofed: true,
                    liked: true
                },
                {
                    id: 8,
                    user_id: 1,
                    woof_text: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s',
                    user_name: 'IamDavidMe',
                    full_name: 'David Peralta',
                    comments: 5,
                    re_woof: 2,
                    likes: 7,
                    re_woofed: true,
                    liked: false
                },
                {
                    id: 9,
                    user_id: 2,
                    woof_text: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s',
                    user_name: 'IamNikkiMe',
                    full_name: 'Mary Nicole',
                    comments: 12,
                    re_woof: 2,
                    likes: 5,
                    re_woofed: true,
                    liked: false
                },

            ]
            ,Comments:[
                {
                    id: 1,
                    woof_id: 1,
                    user_id: 1,
                    comment_text: 'asd',
                },
                {
                    id: 1,
                    woof_id: 1,
                    user_id: 2,
                    comment_text: 'asd',
                },
                {
                    id: 1,
                    woof_id: 1,
                    user_id: 2,
                    comment_text: 'asd',
                },
                {
                    id: 1,
                    woof_id: 1,
                    user_id: 3,
                    comment_text: 'asd',
                },
                {
                    id: 1,
                    woof_id: 1,
                    user_id: 4,
                    comment_text: 'asd',
                },
            ]
            ,UserDetails:{
                full_name: 'David Peralta',
                user_name: 'IamDavidMe',
                description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s',
                country:'Philippines',
                created_at: 'January 2019',
                website: 'facebook.com/peraltadavidr',
                birthdate: 'April 20 1998',
                woof_counts: '120',
                follower_counts: '210',
                following_counts: '400',
                like_counts: '390'
            },
            toggleEditProfile: false
        }
    }
});
