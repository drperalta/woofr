<template>
    <div class="content">
        <div class="profile-top">
            <div class="profile-banner">
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
                    <ul>
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

        <div class="profile-body">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            UserDetails:{
                full_name: 'David Peralta',
                user_name: 'IamDavidMe',
                woof_counts: '120',
                follower_counts: '210',
                following_counts: '400',
                like_counts: '390'
            }
        }
    }
}
</script>

<style scoped>
.content{

}
.profile-top{
    border-width: 10px;
    border-style: solid;
    border-color: #FFFFFF;
    border-radius: 0px 0px 10px 10px;

    background-color: white;
}
.profile-banner{
    width: auto;
    height: 367px;
    background-color: azure;

    -moz-box-shadow:    inset 0 0 15px #e0e0e0;
   -webkit-box-shadow: inset 0 0 15px #e0e0e0;
   box-shadow:         inset 0 0 15px #e0e0e0;
}
.user-img{
    position: absolute;
    width: 160px;

    margin-top: 300px;
    margin-left: 50px;

    border: 5px solid white;
    border-radius: 50%;
}
.user-field{
    margin-left: 260px;
    padding-top: 370px;
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
.profile-menu ul{
    list-style: none;
    display:flex;
    flex-direction: row;
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

.profile-body{
    border-width: 10px;
    border-style: solid;
    border-color: #FFFFFF;
    border-radius: 10px;

    background-color: white;
    margin-top: 30px;
}
</style>
