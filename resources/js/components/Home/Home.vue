// UNFIXED NAVBAR AVATAR HEIGHT
<template>
    <div>
        <!-- NAVBAR -->
        <i-menu class="navbar" mode="horizontal" theme="dark" :active-name="this.$root.active_name">
            <div class="navbar-items">
                <!-- LOGO -->
                <router-link to="/">
                    <img class="logo" src="../../../img/woofr-logo.png" alt="Woofr">
                </router-link>

                <!-- MENU ITEMS -->
                <menu-item class="menu-item" name="timeline" to="/">
                    <Icon type="md-home" style="margin: 0"/>
                    Home
                </menu-item>
                <menu-item class="menu-item" name="notifications" to="/notifications">
                    <Icon type="md-notifications" style="margin: 0"/>
                    Notifications
                </menu-item>
                <menu-item class="menu-item" name="messages">
                    <button @click="modal = true" style="margin: 0; background-color: transparent; border: 0px solid transparent; font-weight: 600; color: #D6CFD2; outline: 0px;cursor:pointer">
                        <Icon type="md-chatboxes" style="margin: 0"/>
                        Messages
                    </button>
                </menu-item>

                <Dropdown class="user-picture-dropdown" placement="bottom-end" trigger="click">
                    <a href="javascript:void(0)">
                        <img class="user-picture" src="../../../img/default-picture.png" alt="DP">
                    </a>
                    <DropdownMenu slot="list">
                        <router-link :to="'/'+UserData.username">
                            <DropdownItem>
                                <p class="fullname">{{UserData.fullname}}</p>
                                <p class="username">@{{UserData.username}}</p>
                            </DropdownItem>
                        </router-link>
                        <Divider class="idivider"/>
                        <router-link :to="'/'+UserData.username">
                            <DropdownItem>
                                <Icon type="ios-contact" size="16" style="float:left; margin-right: 5px" />
                                <p class="item">Profile</p>
                            </DropdownItem>
                        </router-link>
                        <router-link :to="'/'+UserData.username+'/settings'">
                            <DropdownItem>
                                <Icon type="ios-settings" size="16" style="float:left; margin-right: 5px"/>
                                <p class="item">Settings</p>
                            </DropdownItem>
                        </router-link>
                        <Divider style="margin: 5px 0px"/>
                        <DropdownItem>
                            <p class="item" @click="logout">Logout</p>
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>

                <div class="nav-right">
                    <!-- SEARCH BAR -->
                    <AutoComplete clearable class="search-bar" icon="ios-search" placeholder="Search Woofr" @on-search="filterList()" @on-change="searchUser" v-model="search">
                        <Option v-for="user in filteredUsers" :value="user.fullname" :key="user.id">
                                <router-link :to="'/'+user.username">
                                    <Avatar icon="ios-person" size="small" style="margin-right: 5px;"/>
                                    {{ user.fullname }}
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

        <Modal v-model="modal" title="Direct Messages" footer-hide width="900">
            <Messages></Messages>
        </Modal>
        <Modal v-model="this.$root.WoofModal" title="" footer-hide width="600" @on-cancel="woofChange">
            <Woof></Woof>
        </Modal>
    </div>
</template>

<script>
import Messages         from './Modals/Messages'
import Woof             from './Modals/Woof'
import { mapActions,
        mapGetters }    from 'vuex'
import store            from '../../store/index'

export default {
    components: {Messages, Woof},
    data(){
        return{
            modal: false,
            search: '',
            filteredUsers: []
        }
    },

    methods:{
        filterList(){

            var vm=this;
            var listByUsername = this.UserList.filter(function(data){return data.username.toLowerCase().indexOf(vm.search.toLowerCase())>=0;});
            var listByName  = this.UserList.filter(function(data){return data.username.toLowerCase().indexOf(vm.search.toLowerCase())>=0;});

            if(listByUsername == ''){
                this.filteredUsers = listByName
            } this.filteredUsers = listByUsername

        },
        logout(){
            Vue.auth.logout();
        },
        searchUser(){
            Vue.user.setUserList();
        },
        woofChange(){
            if(this.$root.WoofModal){
                this.$root.WoofModal = false
            }
            Vue.woof.all();
        }
    },

    mounted() {
        Vue.auth.setUser();
    },

    computed: mapGetters([
        'UserData',
        'UserList'
    ])
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
