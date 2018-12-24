<template>
    <div class="container">
        <!-- NAVBAR -->
        <Menu class="navbar" mode="horizontal" theme="light" :active-name="this.$root.active_name">
            <!-- LOGO -->
            <img class="logo" src="../../../img/woofr-logo-new.png" alt="Woofr">
            <!-- SEARCH BAR -->
            <AutoComplete class="search-bar" icon="ios-search" placeholder="Search Woofr" v-model="search">
                <Option v-for="user in filteredList" :value="user.name" :key="user.name">
                        <router-link :to="user.username">{{ user.name }}</router-link>
                        <span>@{{ user.username }}</span>
                </Option>
            </AutoComplete>
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

    },
    computed:{
        filteredList:function(){

            var vm=this;
            var listByUsername = this.users.filter(function(data){return data.username.toLowerCase().indexOf(vm.search.toLowerCase())>=0;});
            var listByName = this.users.filter(function(data){return data.name.toLowerCase().indexOf(vm.search.toLowerCase())>=0;});

            if(listByUsername == ''){
                return listByName
            } return listByUsername
        }
    }
}
</script>

<style scoped>
.container{
}
.logo{
    margin-top: 6px;
    /* left: 50%;
    transform: translate(-50%,0%);
    position: absolute; */
    float: left;
    width: 55px;
    margin-right: 40px;
    margin-left: 10px;
}
.navbar{
    padding: 0px 15%;
}
.menu-item{
}
.search-bar{
    width: 250px;
}
.body{
    padding: 0px 15%;
}
</style>
