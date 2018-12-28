<template>
    <div class="container">
        <!-- NAVBAR -->
        <i-menu class="navbar" mode="horizontal" theme="dark" :active-name="this.$root.active_name">
            <div class="navbar-items">
                <!-- LOGO -->
                <img class="logo" src="../../../img/woofr-logo.png" alt="Woofr">

                <!-- MENU ITEMS -->
                <menu-item class="menu-item" name="timeline" to="/timeline">
                    <Icon type="md-home" style="margin: 0"/>
                    Home
                </menu-item>
                <menu-item class="menu-item" name="notifications" to="notifications">
                    <Icon type="md-notifications" style="margin: 0"/>
                    Notifications
                </menu-item>
                <menu-item class="menu-item" name="messages" to="messages">
                    <Icon type="md-chatboxes" style="margin: 0" />
                    Messages
                </menu-item>

                <img class="user-picture" src="../../../img/default-picture.png" alt="DP">

                <div class="nav-right">
                    <!-- SEARCH BAR -->
                    <AutoComplete clearable class="search-bar" icon="ios-search" placeholder="Search Woofr" @on-search="filterList()" v-model="search">
                        <Option v-for="user in filteredUsers" :value="user.name" :key="user.name">
                                <router-link :to="user.username">
                                    <Avatar icon="ios-person" size="small" style="margin-right: 5px;"/>
                                    {{ user.name }}
                                </router-link>
                                <span>@{{ user.username }}</span>
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
            users: [
                {
                    name: 'Bea Amor',
                    username: 'beaamor0212'
                },
                {
                    name: 'David Peralta',
                    username: 'IamDavidMe'
                },
                {
                    name: 'Nikki',
                    username: 'iAmNikkiME'
                },
                {
                    name: 'Rica Camiguing',
                    username: 'ricamiguing_'
                }
            ]
        }
    },
    methods:{
        filterList(){

            var vm=this;
            var listByUsername = this.users.filter(function(data){return data.username.toLowerCase().indexOf(vm.search.toLowerCase())>=0;});
            var listByName = this.users.filter(function(data){return data.name.toLowerCase().indexOf(vm.search.toLowerCase())>=0;});

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

    background-color: #57474e;
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
    margin-right: 10px;
}
.user-picture{
    width: 40px;
    float: right;
    margin-top: 11px;
    margin-left: 10px;
    margin-right: 15px;

    border: 2px solid rgba(58, 58, 58, .2);
    border-radius: 50%;
}
.body{
    padding-top: 60px;

    min-width: 1200px;
    max-width: 1200px;

    left: 50%;
    transform: translate(-50%,0%);
    position: absolute;
}
</style>
