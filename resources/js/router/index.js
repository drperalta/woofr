import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Index from '../components/Index/Index'
import Login from '../components/Index/Partials/Login'
import Register from '../components/Index/Partials/Register'

let router = new VueRouter({

    mode: 'history',

    routes: [
        {
            path: '/', component: Index, redirect: {path: 'login'}, children: [
                {
                    path: 'login', component: Login
                },
                {
                    path: 'register', component: Register
                }
            ]
        }
    ]
})

export default router