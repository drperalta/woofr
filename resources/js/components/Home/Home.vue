// UNFIXED NAVBAR AVATAR HEIGHT
<template>
    <div class="container">
        <!-- NAVBAR -->
        <i-menu class="navbar" mode="horizontal" theme="dark" :active-name="this.$root.active_name">
            <div class="navbar-items">
                <!-- LOGO -->
                <a href="/timeline">
                    <img class="logo" src="../../../img/woofr-logo.png" alt="Woofr">
                </a>

                <!-- MENU ITEMS -->
                <menu-item class="menu-item" name="timeline" to="/timeline">
                    <Icon type="md-home" style="margin: 0"/>
                    Home
                </menu-item>
                <menu-item class="menu-item" name="notifications" to="/notifications">
                    <Icon type="md-notifications" style="margin: 0"/>
                    Notifications
                </menu-item>
                <menu-item class="menu-item" name="messages" to="/messages">
                    <Icon type="md-chatboxes" style="margin: 0" />
                    Messages
                </menu-item>

                <Dropdown class="user-picture-dropdown" placement="bottom-end" trigger="click">
                    <a href="javascript:void(0)">
                        <img class="user-picture" src="../../../img/default-picture.png" alt="DP">
                    </a>
                    <DropdownMenu slot="list">
                        <router-link to="/profile">
                            <DropdownItem>
                                <p class="fullname">{{loggedInUser.full_name}}</p>
                                <p class="username">@{{loggedInUser.user_name}}</p>
                            </DropdownItem>
                        </router-link>
                        <Divider class="idivider"/>
                        <router-link to="/profile">
                            <DropdownItem>
                                <Icon type="ios-contact" size="16" style="float:left; margin-right: 5px" />
                                <p class="item">Profile</p>
                            </DropdownItem>
                        </router-link>
                        <router-link to="/profile/settings">
                            <DropdownItem>
                                <Icon type="ios-settings" size="16" style="float:left; margin-right: 5px"/>
                                <p class="item">Settings</p>
                            </DropdownItem>
                        </router-link>
                        <Divider style="margin: 5px 0px"/>
                        <DropdownItem>

                            <p class="item">Logout</p>
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>

                <div class="nav-right">
                    <!-- SEARCH BAR -->
                    <AutoComplete clearable class="search-bar" icon="ios-search" placeholder="Search Woofr" @on-search="filterList()" v-model="search">
                        <Option v-for="user in filteredUsers" :value="user.full_name" :key="user.id">
                                <router-link :to="user.user_name">
                                    <Avatar icon="ios-person" size="small" style="margin-right: 5px;"/>
                                    {{ user.full_name }}
                                </router-link>
                                <span>@{{ user.user_name }}</span>
                        </Option>
                    </AutoComplete>
                </div>
            </div>
        </i-menu>

        <div class="body">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            search: '',
            filteredUsers: [],
            loggedInUser:{
                full_name: 'David Peralta',
                user_name: 'IamDavidMe',

            }
        }
    },
    methods:{
        filterList(){

            var vm=this;
            var listByUsername = this.$root.users.filter(function(data){return data.user_name.toLowerCase().indexOf(vm.search.toLowerCase())>=0;});
            var listByName = this.$root.users.filter(function(data){return data.full_name.toLowerCase().indexOf(vm.search.toLowerCase())>=0;});

            if(listByUsername == ''){
                this.filteredUsers = listByName
            } this.filteredUsers = listByUsername

        }
    }
}
</script>

<style scoped>
.container{
}
.logo{
    margin-top: 11px;
    /* left: 50%;
    transform: translate(-50%,0%);
    position: absolute; */
    float: left;
    width: 40px;
    margin-right: 15px;
}
.navbar{
    position: fixed;
    width: 100vw;

    background-color: #765d69;
}
.navbar-items{
    min-width: 1200px;
    max-width: 1200px;

    left: 50%;
    transform: translate(-50%,0%);
    position: absolute;
}
.menu-item{
    font-size: 13px;
    font-weight: 600;
    padding: 0px 15px !important;
}
.nav-right{
    float: right;
}
.search-bar{
    width: 210px;
    margin-right: 20px;
}
.user-picture{
    width: 40px;
    margin-top: 11px;
    border: 2px solid rgba(58, 58, 58, .2);
    border-radius: 50%;
}
.user-picture-dropdown{
    float: right;
    margin-right: 20px;
}
.body{
    padding-top: 60px;

    min-width: 1200px;
    max-width: 1200px;

    left: 50%;
    transform: translate(-50%,0%);
    position: absolute;
}
.fullname{
    font-weight: 700;
    font-size: 18px;
}
.username{
    color: #765d69;
    font-size: 14px;
}
.item{
    font-size: 14px;
}
</style>
