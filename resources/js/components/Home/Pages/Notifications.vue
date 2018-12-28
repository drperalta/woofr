<template>
    <div class="content">
        <!-- TRENDING BOX -->
        <div class="box left">
            <Trending></Trending>
        </div>
        <!-- NOTIFICATIONS BOX -->
        <div class="box middle">
            <div class="notifications-header">
                <ButtonGroup>
                    <Button size="large" to="/notifications">All</Button>
                    <Button size="large" to="/notifications/mentions">Mentions</Button>
                </ButtonGroup>
            </div>
            <Divider style="margin: 5px 0px"/>
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
    margin-top: 7px;
}
.box{
    margin: 5px;
}
.left{
    max-width: 290px;
    min-width: 290px;
    float: left;

    border-width: 5px;
    border-style: solid;
    border-color: #FFFFFF;
    border-radius: 5px;
}
.middle{
    min-width: 590px;
    max-width: 590px;
    float: left;
    background-color: white;

    border-width: 5px;
    border-style: solid;
    border-color: #FFFFFF;
    border-radius: 5px;
}
.right{
    min-width: 290px;
    max-width: 290px;
    float: left;

    border-width: 5px;
    border-style: solid;
    border-color: #FFFFFF;
    border-radius: 5px;
}
.notifications-header{
    padding: 10px;
}
</style>
