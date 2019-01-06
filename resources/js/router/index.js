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

import Woofs from '../components/Home/Partials/Profile/Woofs'
import Followers from '../components/Home/Partials/Profile/Followers'
import Following from '../components/Home/Partials/Profile/Following'
import Likes from '../components/Home/Partials/Profile/Likes'
import Settings from '../components/Home/Pages/Settings'

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
                    path: 'reset-password', component: ResetPassword
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
                {   //MESSAGES
                    path: 'messages', component: Messages
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
                        }

                    ]
                },
                {
                    path: 'settings', component: Settings,
                }


            ]
        }

    ]
})

export default router
