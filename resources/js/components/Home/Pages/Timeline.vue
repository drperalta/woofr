{<template>
    <div class="content">
        <!-- PROFILE BOX -->
        <div class="box left">
            <Profile></Profile>
        </div>
        <!-- TIMELINE BOX -->
        <div class="box middle">
            <Timeline></Timeline>
        </div>
        <!-- TRENDING BOX -->
        <div class="box right"> 
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
    margin-top: 7px;
}
.box{
    margin: 5px;
}
.left{
    max-width: 290px;
    min-width: 290px;
    float: left;
    background-color: white;

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
    background-color: white;

    border-width: 5px;
    border-style: solid;
    border-color: #FFFFFF;
    border-radius: 5px;
}

</style>
