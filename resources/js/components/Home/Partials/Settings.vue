<template>
    <div class="box woofr-border white">
        <div class="settings-header">
            <ButtonGroup>
                <Button size="large" :to="'/'+UserData.username+'/settings'" @click="off">Username and Email</Button>
                <Button size="large" :to="'/'+UserData.username+'/settings/password'" @click="off">Password</Button>
                <Button size="large" @click="toggle()">Edit Profile</Button>
            </ButtonGroup>
        </div>
        <Divider class="idivider"/>
        <router-view class="white" style="padding: 20px 200px;"></router-view>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
    data(){
        return{

        }
    },
    methods:{
        toggle(){
            this.$root.toggleEditProfile = true;
        },
        off(){
            this.$root.toggleEditProfile = false;
        }
    },
    created(){
        this.$root.profile_active_page = window.location.href.split('/')[4];
    },
    computed: mapGetters([
        'UserData'
    ])
}
</script>

<style scoped>
.content{
    margin: 5px;
    width: 100% !important;
}
.settings-header{
    padding: 10px;
}
</style>
