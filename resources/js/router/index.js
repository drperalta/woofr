import Vue from 'vue'
import VueRouter from 'vue-router'

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
                    path: 'reset-password', component: ResetPassword
                },
                {
                    path: 'link/:activation_token', component: VerifyEmail
                }
            ],
        },
        //HOME
        {
            path: '/', component: Home,
            children: [
                {   //TIMELINE
                    path: 'timeline', component: Timeline
                },
                {   //NOTIFICATIONS
                    path: 'notifications', component: Notifications,
                    children: [
                        {   //PROFILE
                            path: '/', component: Notifs
                        },
                        {   //MENTIONS
                            path: 'mentions', component: Mentions
                        }
                    ]
                },
                {   //PROFILE
                    path: 'profile', component: Profile, redirect: {path: 'profile/woofs'}, children: [
                        {   //WOOFS
                            path: 'woofs', component: Woofs
                        },
                        {   //FOLLOWING
                            path: 'following', component: Following
                        },
                        {   //FOLLOWERS
                            path: 'followers', component: Followers
                        },
                        {   //LIKES
                            path: 'likes', component: Likes
                        },
                        {
                            path: 'settings', component: Settings, children: [
                                {
                                    path: '/', component: Primary
                                },
                                {
                                    path: 'password', component: Password
                                }
                            ]
                        }

                    ]
                },



            ]
        }

    ]
})

export default router
