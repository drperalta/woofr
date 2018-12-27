{<template>
    <div class="content">
        <div class="box left">
            <Profile></Profile>
        </div>
        <div class="box middle">
            <Timeline></Timeline>
        </div>
        <div class="box right">

        </div>
    </div>
</template>

<script>
import Profile from '../Partials/Profile'
import Timeline from '../Partials/Timeline'

export default {
    components: {Profile,Timeline},
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
    background-color:brown;
    min-width: 290px;
    max-width: 290px;
    height: 500px;
    float: left;
}

</style>
