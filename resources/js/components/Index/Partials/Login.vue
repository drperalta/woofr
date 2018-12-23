<template>
    <div class="content">
        <p class="page-name">LOGIN</p>
        <Form inline>
            <!-- TOP -->
            <Input class="input" placeholder="Username or Email" v-model="LoginDetails.user_or_email"/>
            <Input class="input" placeholder="Password" v-model="LoginDetails.password" type="password"/>
            <!-- MIDDLE -->
            <Checkbox class="checkbox form-middle" v-model="LoginDetails.remember_me">Remember Me</Checkbox>
            <router-link class="forgotten-password form-middle" to="/reset-password">Forgotten your Password?</router-link>
            <!-- BOTTOM -->
            <Button class="button">Log in</Button>
            <router-link to="/signup">Need and account? Sign Up</router-link>
        </Form>
    </div>
</template>

<script>
export default {
    data(){
        return{
            LoginDetails:{
                user_or_email: '',
                password: '',
                remember_me: false
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
.checkbox{
    float: left;
}
.forgotten-password{
    float: right;
}
.form-middle{
    margin-top: 4px;
    margin-bottom: 30px;
}
.button{
    width: 100%;
    margin-bottom: 8px;
}
</style>
