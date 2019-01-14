<template>
    <div class="container">
        <div class="wrapper center">
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
.container {
    width: 100vw;
    height: 100vh;
    /* background: url('../../../img/woofr-bg.png') */
}

.wrapper{
    top: 40% !important;
    text-align: center;
    max-width: 288px;
}

.logo{
    width: 85px;
}

.body{
    margin-top: 20px;
    min-width: 288px;
    max-width: 288px;
}
</style>
