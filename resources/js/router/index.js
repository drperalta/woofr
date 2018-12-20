import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Index from '../components/Index/Index'
import Login from '../components/Index/Partials/Login'
import SignUp from '../components/Index/Partials/SignUp'

let router = new VueRouter({

    mode: 'history',

    routes: [
        {
            path: '/', component: Index, redirect: {path: 'login'}, children: [
                {
                    path: 'login', component: Login
                },
                {
                    path: 'signup', component: SignUp
                }
            ]
        }
    ]
})

export default router
