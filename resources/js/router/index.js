import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/index'

Vue.use(VueRouter)

import Index from '../components/Index/Index'
import Login from '../components/Index/Partials/Login'
import SignUp from '../components/Index/Partials/SignUp'

import ResetPasswordRequest from '../components/Index/Partials/ResetPasswordRequest'
import ResetPassword from '../components/Index/Partials/ResetPassword'
import VerifyEmail from '../components/Index/Partials/VerifyEmail'

import Home from '../components/Home/Home'
import Timeline from '../components/Home/Pages/Timeline.vue'
import Notifications from '../components/Home/Pages/Notifications.vue'
import Profile from '../components/Home/Pages/Profile'

import Notifs from '../components/Home/Partials/Notifications/Notifs'
import Mentions from '../components/Home/Partials/Notifications/Mentions'

import Woofs from '../components/Home/Partials/Profile/Woofs'
import Followers from '../components/Home/Partials/Profile/Followers'
import Following from '../components/Home/Partials/Profile/Following'
import Likes from '../components/Home/Partials/Profile/Likes'
import Settings from '../components/Home/Partials/Settings'

import Primary from '../components/Home/Partials/Settings/Primary'
import Password from '../components/Home/Partials/Settings/Password'

let router = new VueRouter({

    mode: 'history',

    routes: [
        //INDEX
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
                    path: 'reset-password-request', component: ResetPasswordRequest
                },
                {
                    path: 'reset-password/:reset_token', component: ResetPassword
                },
                {
                    path: 'link/:activation_token', component: VerifyEmail
                }
            ],
        },
        //HOME
        {
            path: '/', component: Home, meta: { requiresAuth: true },
            children: [
                {   //TIMELINE
                    path: '/', component: Timeline, name: 'timeline', meta: { requiresAuth: true }
                },
                {   //NOTIFICATIONS
                    path: 'notifications', component: Notifications, meta: { requiresAuth: true },
                    children: [
                        {   //PROFILE
                            path: '/', component: Notifs, meta: { requiresAuth: true }
                        },
                        {   //MENTIONS
                            path: 'mentions', component: Mentions, meta: { requiresAuth: true }
                        }
                    ]
                },
                {   //PROFILE
                    path: '/:username', component: Profile, redirect: {name: 'woofs'}, meta: { requiresAuth: true },
                    children: [
                        {   //WOOFS
                            path: '/', component: Woofs, name: 'woofs', meta: { requiresAuth: true }
                        },
                        {   //FOLLOWING
                            path: 'following', component: Following, meta: { requiresAuth: true }
                        },
                        {   //FOLLOWERS
                            path: 'followers', component: Followers, meta: { requiresAuth: true }
                        },
                        {   //LIKES
                            path: 'likes', component: Likes, meta: { requiresAuth: true }
                        },
                        {
                            path: 'settings', component: Settings, meta: { requiresAuth: true },
                            children: [
                                {
                                    path: '/', component: Primary, meta: { requiresAuth: true }
                                },
                                {
                                    path: 'password', component: Password, meta: { requiresAuth: true }
                                }
                            ]
                        }

                    ]
                },
            ]
        }
    ],
})

router.beforeEach((to, from, next) => {
    router.app.$Progress.start()
    // check if the route requires authentication and user is not logged in
    if (to.matched.some(route => route.meta.requiresAuth) && !store.state.isLoggedIn) {
        // redirect to login page
        next({ path: '/login' })
        return
    }

    // if logged in redirect to dashboard
    if(to.path === '/login' && store.state.isLoggedIn) {
        next({ name: 'timeline' })
        return
    }

    next()
})

router.afterEach(() => {
        router.app.$Progress.finish()
})

export default router
