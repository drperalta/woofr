<template>
    <div class="container">
        <!-- NAVBAR -->
        <Menu class="navbar" mode="horizontal" theme="light" active-name="home">
            <MenuItem name="home" to="/timeline">
                <Icon type="md-home" style="margin: 0"/>
                Home
            </MenuItem>
            <MenuItem name="notifications" to="notifications">
                <Icon type="md-notifications" style="margin: 0"/>
                Notifications
            </MenuItem>
            <MenuItem name="messages" to="messages">
                <Icon type="md-chatboxes" style="margin: 0" />
                Messages
            </MenuItem>
        </Menu>
        <div class="body">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{

        }

    }
}
</script>

<style scoped>
.container{
}
.navbar{
    padding: 0px 10%;
}
.body{
    padding: 0px 10%;
}
</style>
