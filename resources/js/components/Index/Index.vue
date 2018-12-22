<template>
    <div class="container">
        <div class="wrapper">
            <div class="top">
                <!-- LOGO -->
                <img class="logo" src="../../../img/woofr-logo-new.png" alt="">
            </div>
            <!-- BODY -->
            <div class="body">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.wrapper{
    position: absolute;
    top: 35%;
    left: 50%;
    transform: translate(-50%,-50%);
    z-index: 1;
    text-align: center;
    max-width: 288px;
}
.container {
    width: 100vw;
    height: 100vh;
    /* background: url('../../../img/woofr-bg.png') */
}
.logo{
    width: 85px;
}
.body{
    margin-top: 20px;
}
</style>
