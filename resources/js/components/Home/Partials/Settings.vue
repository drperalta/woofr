<template>
    <div class="content">
        <div class="settings-header">
            <ButtonGroup>
                <Button size="large" to="/profile/settings">Username and Email</Button>
                <Button size="large" to="/profile/settings/password">Password</Button>
                <Button size="large" to="">Edit Profile</Button>
            </ButtonGroup>
        </div>
        <Divider class="idivider"/>
        <router-view style="margin: 20px 20px;"></router-view>
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
.content{
    margin: 5px;
    width: 100% !important;
}
.settings-header{
    padding: 10px;
}
</style>
