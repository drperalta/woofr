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
                    <a href="#" class="name">{{UserDetails.full_name}}</a>
                    <a href="#" class="username">@{{UserDetails.user_name}}</a>
                </div>
            </div>

            <div class="profile-menu">
                <div class="profile-menu-items">
                    <ul class="row">
                        <li>
                            <router-link class="item" to="woofs">
                                <span class="span menu-title">Woofs</span>
                                <span class="span counts">{{UserDetails.woof_counts}}</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link class="item" to="following">
                                <span class="span menu-title">Following</span>
                                <span class="span counts">{{UserDetails.follower_counts}}</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link class="item" to="followers">
                                <span class="span menu-title">Followers</span>
                                <span class="span counts">{{UserDetails.follower_counts}}</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link class="item" to="likes">
                                <span class="span menu-title">Likes</span>
                                <span class="span counts">{{UserDetails.like_counts}}</span>
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="left">
            <div class="box side-box user-description white woofr-border ">
                <div class="description">{{UserDetails.description}}</div>
                <div class="description-list">
                    <Icon type="ios-pin-outline" size="24"/>
                    {{UserDetails.country}}
                </div>
                <div class="description-list" >
                    <Icon type="ios-link-outline" size="24"/>
                    <a :href="'http://'+UserDetails.website">{{UserDetails.website}}</a>
                </div>
                <div class="description-list">
                    <Icon type="ios-calendar-outline" size="24"/>
                    {{UserDetails.created_at}}
                </div>
                <div class="description-list">
                    <Icon type="ios-ice-cream-outline" size="24"/>
                    Born {{UserDetails.birthdate}}
                </div>
            </div>

            <Trending class="box side-box woofr-border" v-if="trend()"></Trending>
        </div>

        <router-view></router-view>

    </div>
</template>

<script>
import Trending from '../Partials/Trending'
export default {
    components: {Trending},
    data(){
        return{
            UserDetails:{
                full_name: 'David Peralta',
                user_name: 'IamDavidMe',
                description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s',
                country:' Republic of the Philippines',
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
            if(this.$root.profile_active_page == 'followers' ||
            this.$root.profile_active_page == 'following' ||
            this.$root.profile_active_page == 'likes'){
                return true;
            }
        }
    }
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

    margin-top: 310px;
    margin-left: 55px;

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
.user-description{
    padding: 40px 25px 20px 25px;
    margin-bottom: 10px;
}
.description{
    font-size: 13px;
    margin-bottom: 20px;
}
.description-list{
    margin-bottom: 6px;
}
</style>
