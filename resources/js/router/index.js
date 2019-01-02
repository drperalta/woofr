import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Index from '../components/Index/Index'
import Login from '../components/Index/Partials/Login'
import SignUp from '../components/Index/Partials/SignUp'

import ResetPassword from '../components/Index/Partials/ResetPassword'

import Home from '../components/Home/Home'
import Timeline from '../components/Home/Pages/Timeline.vue'
import Notifications from '../components/Home/Pages/Notifications.vue'
import Messages from '../components/Home/Pages/Messages.vue'
import Profile from '../components/Home/Pages/Profile'

import Notifs from '../components/Home/Partials/Notifications/Notifs'
import Mentions from '../components/Home/Partials/Notifications/Mentions'

let router = new VueRouter({

    mode: 'history',

    routes: [
        {
            path: '/', component: Index, redirect: {path: 'login'},
            children: [
                {
                    path: 'login', component: Login
                },
                {
                    path: 'signup', component: SignUp
                },
                {
                    path: 'reset-password', component: ResetPassword
                }
            ],
        },
        {
            path: '/', component: Home,
            children: [
                {
                    path: 'timeline', component: Timeline
                },
                {
                    path: 'notifications', component: Notifications,
                    children: [
                        {
                            path: '/', component: Notifs
                        },
                        {
                            path: 'mentions', component: Mentions
                        }
                    ]
                },
                {
                    path: 'messages', component: Messages
                },
                {
                    path: ':username', component: Profile
                }
            ]
        }

    ]
})

export default router
