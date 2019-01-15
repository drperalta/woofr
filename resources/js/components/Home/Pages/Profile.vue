<template>
    <div class="content">
        <div class="profile-top woofr-border">
            <div class="profile-banner box-shadow-in">
                <!-- PROFILE PICTURE -->
                <a href="#">
                    <img class="user-img" src="../../../../img/default-picture1.png" alt="">
                </a>
                <!-- USER FULLNAME AND USERNAME -->
                <div class="user-field">
                    <a href="#" class="name">{{ UserData.fullname }}</a>
                    <a href="#" class="username">@{{ UserData.username }}</a>
                </div>
            </div>

            <div class="profile-menu">
                <div class="profile-menu-items">
                    <ul class="row">
                        <li>
                            <router-link class="item" to="/profile/woofs">
                                <span class="span menu-title">Woofs</span>
                                <span class="span counts">{{this.$root.UserDetails.woof_counts}}</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link class="item" to="/profile/following">
                                <span class="span menu-title">Following</span>
                                <span class="span counts">{{this.$root.UserDetails.follower_counts}}</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link class="item" to="/profile/followers">
                                <span class="span menu-title">Followers</span>
                                <span class="span counts">{{this.$root.UserDetails.follower_counts}}</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link class="item" to="/profile/likes">
                                <span class="span menu-title">Likes</span>
                                <span class="span counts">{{this.$root.UserDetails.like_counts}}</span>
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="left">
            <UserDescription v-if="!this.$root.toggleEditProfile"></UserDescription>
            <EditProfile v-if="this.$root.toggleEditProfile"></EditProfile>
            <Trending class="box side-box woofr-border" v-if="trend()"></Trending>
        </div>

        <div class=" left" style="max-width: 900px; min-width: 900px;">
            <router-view></router-view>
        </div>

    </div>
</template>

<script>
import Trending from '../Partials/Trending'
import UserDescription from '../Partials/UserDescription'
import EditProfile from '../Partials/Settings/EditProfile'

import { mapGetters } from 'vuex'

export default {
    components: {Trending, UserDescription, EditProfile},
    data(){
        return{
            UserDetails:{
                full_name: 'David Peralta',
                user_name: 'IamDavidMe',
                description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s',
                country:'Philippines',
                created_at: 'January 2019',
                website: 'facebook.com/peraltadavidr',
                birthdate: 'April 20, 1998',
                woof_counts: '120',
                follower_counts: '210',
                following_counts: '400',
                like_counts: '390'
            },
            page: this.$root.profile_active_page ,
        }
    },
    methods:{
        trend(){
            if(this.$root.profile_active_page == 'followers' || this.$root.profile_active_page == 'following' ){
                return true;
            } return false; 
        }
    },
    computed: mapGetters([
        'UserData'
    ])
}
</script>

<style scoped>
.profile-top{
    border-radius: 0px 0px 5px 5px !important;

    background-color: white;
    margin: 0px 5px 5px 5px;
}
.profile-banner{
    width: auto;
    height: 352px;
    background-color: azure;
}
.user-img{
    position: absolute;
    width: 170px;

    margin-top: 295px;
    margin-left: 60px;

    border: 5px solid white;
    border-radius: 50%;
}
.user-field{
    margin-left: 291px;
    padding-top: 352px;
}
.name{
    font-size: 26px;
    font-weight: 600;
    color: #17233d;
    display: block;
}
.username{
    font-size: 16px;
    color: gray;
    display: block;
}
.profile-menu{
    height: 60px;
}
.profile-menu-items{
    float: right;
    margin-right: 60px;
}
.profile-menu ul li{
    margin: 10px 15px;
}
.profile-menu .span{
    display: block;
}
.menu-title{
    font-weight: 600;
    color: #657786;
}
.counts{
    color: #765d69;
    text-align: center;
    font-size: 20px;
    font-weight: 600;
}
.item{
    font-size: 14px;
    text-align: center;
}
</style>
