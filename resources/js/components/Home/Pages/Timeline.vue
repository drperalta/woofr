<template>
    <div class="content">
        <!-- PROFILE BOX -->
        <div class="box side-box left woofr-border">
            <Profile></Profile>
        </div>
        <!-- TIMELINE BOX -->
        <div class="box middle-box left">
            <Timeline></Timeline>
        </div>
        <!-- TRENDING BOX -->
        <div class="box side-box left woofr-border">
            <Trending></Trending>
        </div>
    </div>
</template>

<script>
import Profile from '../Partials/Profile'
import Timeline from '../Partials/Timeline'
import Trending from '../Partials/Trending'

export default {
    components: {Profile,Timeline,Trending},
    data(){
        return{
        }
    },
    methods:{
    },
    computed:{
    },
    created(){
        this.$root.active_name = window.location.href.split('/')[3];
    }
}
</script>

<style scoped>
.content{
    margin-top: 5px;
}
</style>
