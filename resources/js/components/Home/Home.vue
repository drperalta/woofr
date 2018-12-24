<template>
    <div class="container">
        <!-- NAVBAR -->
        <Menu class="navbar" mode="horizontal" theme="dark" :active-name="this.$root.active_name">
            <!-- LOGO -->
            <img class="logo" src="../../../img/woofr-logo.png" alt="Woofr">

            <!-- MENU ITEMS -->
            <MenuItem class="menu-item" name="timeline" to="/timeline">
                <Icon type="md-home" style="margin: 0"/>
                Home
            </MenuItem>
            <MenuItem class="menu-item" name="notifications" to="notifications">
                <Icon type="md-notifications" style="margin: 0"/>
                Notifications
            </MenuItem>
            <MenuItem class="menu-item" name="messages" to="messages">
                <Icon type="md-chatboxes" style="margin: 0" />
                Messages
            </MenuItem>

            <img class="profile" src="../../../img/default-picture.png" alt="DP">

            <div class="nav-right">
                <!-- SEARCH BAR -->
                <AutoComplete clearable class="search-bar" icon="ios-search" placeholder="Search Woofr" @on-search="filterList()" v-model="search">
                    <Option v-for="user in filteredUsers" :value="user.name" :key="user.name">
                            <router-link :to="user.username">{{ user.name }}</router-link>
                            <span>@{{ user.username }}</span>
                    </Option>
                </AutoComplete>
            </div>
        </Menu>

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
                    username: 'beaamor0212',
                    link: 'https://twitter.com/beaamor0212'
                },
                {
                    name: 'David Peralta',
                    username: 'IamDavidMe',
                    link: 'https://twitter.com/IamDavidMe'
                },
                {
                    name: 'Nikki',
                    username: 'iAmNikkiME',
                    link: 'https://twitter.com/iAmNikkiME'
                },
                {
                    name: 'Rica Camiguing',
                    username: 'ricamiguing_',
                    link: 'https://twitter.com/ricamiguing_'
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
    padding: 0px 15%;
    position: fixed;
    width: 100vw;
}
.menu-item{
    font-size: 13px;
    padding: 0px 15px !important;
}
.nav-right{
    float: right;
}
.search-bar{
    width: 180px;
}
.profile{
    width: 35px;
    float: right;
    margin-top: 13px;
    margin-left: 10px;

    border: 2px solid;
    border-color: gray;
}
.body{
    padding: 60px 15% 0px 15%;
}
</style>
