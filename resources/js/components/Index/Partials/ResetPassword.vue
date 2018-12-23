<template>
    <div class="content">
        <p class="page-name">RESET PASSWORD</p>
        <Form inline>
            <!-- TOP -->
            <Input class="input" placeholder="Email" v-model="LoginDetails.user_email"/>
            <!-- BOTTOM -->
            <Button class="button">Send Link</Button>
            <router-link to="/login">Nevermind, I got it.</router-link>
        </Form>
    </div>
</template>

<script>
export default {
    data(){
        return{
            UserDetails:{
                user_email: ''
            }
        }
    }
}
</script>

<style scoped>
.page-name{
    margin-bottom: 20px;
}
.input{
    width: 100%;
    margin: 4px 0px;
}
.button{
    width: 100%;
    margin-bottom: 8px;
}
</style>
