<template>
    <div class="container">
        <!-- USER CONTAINER -->
        <div class="user-container">
            <!-- BANNER -->
            <div class="user-banner">
                <!-- PROFILE PICTURE -->
                <router-link :to="'/'+UserData.username">
                    <img class="user-img" src="../../../../img/default-picture.png" alt="">
                </router-link>
                <!-- USER FULLNAME AND USERNAME -->
                <div class="user-field">
                    <div class="name">
                        <router-link :to="'/'+UserData.username" >{{ UserData.fullname }}</router-link>
                    </div>
                    <router-link :to="'/'+UserData.username" class="username">@{{UserData.username}}</router-link>
                </div>
            </div>
            <!-- USER STATS -->
            <div class="user-stats">
                <ul class="row">
                    <!-- TWEETS -->
                    <li>
                        <router-link :to="'/'+UserData.username">
                            <span class="span stats-name">Woofs</span>
                            <span class="span stats-counts">120</span>
                        </router-link>
                    </li>
                    <!-- FOLLOWING -->
                    <li>
                        <router-link :to="'/'+UserData.username+'/following'">
                            <span class="span stats-name">Following</span>
                            <span class="span stats-counts">210</span>
                        </router-link>
                    </li>
                    <!-- FOLLOWERS -->
                    <li>
                        <router-link :to="'/'+UserData.username+'/followers'">
                            <span class="span stats-name">Followers</span>
                            <span class="span stats-counts">400</span>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    data(){
        return{

        }
    },
    computed: mapGetters([
        'UserData'
    ])
}
</script>

<style scoped>
.container{
background-color: white;
}
/* USER BANNER */
.user-banner{
    height: 85px;
    background-color: aquamarine;
    border: 1px solid white;
    border-radius: 5px;
}
.user-img{
    position: absolute;
    width: 70px;

    margin-top: 55px;
    margin-left: 20px;

    border: 3px solid white;
    border-radius: 50%;
}
.user-field{
    margin-left: 110px;
    padding-top: 85px;
}
.name{
    max-width: 200px;
    max-height: 26px;
    overflow: hidden !important;
}
.name a{
    font-size: 18px;
    font-weight: 600;
    color: #17233d;
}
.username{
    font-size: 13px;
    color: gray;
}
/* USER STATS */
.user-stats{
    background-color: white;
    padding-top: 55px;
}
.user-stats ul{
    margin-left: 15px;
    margin-top: 5px;
}
.user-stats li{
    margin: 10px;
    font-weight: 600;
}
.span{
    display:block;
}
.stats-name{
    color: #657786;
}
.stats-counts{
    color: #765d69;
    text-align: center;
    font-size: 20px;
}
</style>
