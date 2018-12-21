import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Index from '../components/Index/Index'
import Login from '../components/Index/Partials/Login'
import SignUp from '../components/Index/Partials/SignUp'

import Home from '../components/Home/Home'
import Timeline from '../components/Home/Pages/Timeline.vue'
import Notifications from '../components/Home/Pages/Notifications.vue'
import Messages from '../components/Home/Pages/Messages.vue'
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
                    path: 'notifications', component: Notifications
                },
                {
                    path: 'messages', component: Messages
                }
            ] 
        }
        
    ]
})

export default router
