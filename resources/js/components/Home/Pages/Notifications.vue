<template>
    <div class="content">
        <!-- TRENDING BOX -->
        <div class="box side-box left woofr-border">
            <Trending></Trending>
        </div>
        <!-- NOTIFICATIONS BOX -->
        <div class="box middle-box woofr-border left white">
            <div class="notifications-header">
                <ButtonGroup>
                    <Button size="large" to="/notifications">All</Button>
                    <Button size="large" to="/notifications/mentions">Mentions</Button>
                </ButtonGroup>
            </div>
            <Divider class="idivider"/>
            <div class="notifications-body">
                <router-view></router-view>
            </div>
        </div>
        <!--BOX -->
        <div class="box right">

        </div>
    </div>
</template>

<script>
import Trending from '../Partials/Trending'

export default {
    components: {Trending},
    data(){
        return{

        }
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
.notifications-header{
    padding: 10px;
}
</style>
