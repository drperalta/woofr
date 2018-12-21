<template>
    <div class="index">
        <div class="center">
            <!-- LOGO -->
            <img class="logo" src="../../../img/woofr-logo.png" alt="">

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
.center{
    /* To center div */
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    z-index: 1;
    text-align: center;
    max-width: 380px;
}
.logo{
    width: 85px;
    margin-bottom: 15px;
    position: absolute;
    margin-left: 50%;
    margin-right: 50%;
}
.body{
    
}
.index {
    width: 100vw;
    height: 100vh;
    /* background: url('../../../img/woofr-bg.png') */
}
</style>
