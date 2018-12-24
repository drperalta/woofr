<template>
    <div class="content">
        <div class="box left">

        </div>
        <div class="box middle">

        </div>
        <div class="box right">

        </div>
    </div>
</template>

<script>
export default {
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
    position: relative;
    display: table;
}
.box{
    background: lightblue;
    margin: 8px;
    float: left;
}
.left{
    width: 288px;
    height: 500px;
}
.middle{
    width: 588px;
    height: 500px;
}
.right{
    width: 288px;
    height: 400px;
}
</style>
