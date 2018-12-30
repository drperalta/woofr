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
    router,

    data(){
        return{
            active_name: 'timeline',

            Woofs:[
                {
                    id: 1,
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
        }
    }
});
