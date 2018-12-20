<template>
    <div class="center">

        <!-- LOGO -->
        <img class="logo" src="../../../img/woofr-logo.png" alt="">

        <!-- BODY -->
        <div class="body">
            <router-view></router-view>
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
}
.logo{
    width: 65px
}
.body{
    max-width: 380px;
}
</style>
