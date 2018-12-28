<template>
    <div class="content">
        <!-- TRENDING BOX -->
        <div class="box left">
            <Trending></Trending>
        </div>
        <!-- NOTIFICATIONS BOX -->
        <div class="box middle">

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
</style>
