<template>
    <div class="content">
        <p class="page-name">LOGIN</p>
        <Alert id="success" class="notification" type="success" v-if="success.success" show-icon>{{success.message}}</Alert>
        <Alert  id="error" class="notification" type="error" v-if="error.error" show-icon>{{error.message}}</Alert>
        <Form inline>
            <!-- TOP -->
            <Input class="input" placeholder="Username or Email" v-model="LoginDetails.username" :disabled="isLoading"/>
            <Input class="input" placeholder="Password" v-model="LoginDetails.password" type="password" :disabled="isLoading"/>
            <!-- MIDDLE -->
            <Checkbox class="checkbox form-middle" v-model="LoginDetails.remember_me" :disabled="isLoading">Remember Me</Checkbox>
            <router-link class="forgotten-password form-middle" to="/reset-password-request">Forgotten your Password?</router-link>
            <!-- BOTTOM -->
            <Button class="button" @click.prevent="login" :loading="isLoading">Log in</Button>
            <router-link to="/signup">Need and account? Sign Up</router-link>
        </Form>
    </div>
</template>

<script>
export default {
    data(){
        return{
            success:{
                success: false,
                message: ''
            },
            error:{
                error: false,
                message: ''
            },

            LoginDetails:{
                username: '',
                password: '',
                remember_me: false
            },
            isLoading: false
        }
    },
    methods: {
        login(){
            this.isLoading = true;
            Vue.auth.login(this, this.LoginDetails)
        }
    },
    mounted(){
        this.$root.$on('login:success', () => {
            this.isLoading = false
        })
        this.$root.$on('login:error', () => {
            this.isLoading = false
        })
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
