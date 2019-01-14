<template>
    <div class="content">
        <p class="page-name">SIGN UP</p>
        <Alert id="success" class="notification" type="success" v-if="success.success" show-icon>{{success.message}}</Alert>
        <Alert  id="error" class="notification" type="error" v-if="error.error" show-icon>{{error.message}}</Alert>
        <Form inline>
            <!-- TOP -->
            <Input class="input" placeholder="Full Name" v-model="SignUpDetails.fullname"/>
            <Input class="input" placeholder="Username" v-model="SignUpDetails.username"/>
            <Input class="input" placeholder="Email" v-model="SignUpDetails.email"/>
            <Divider class="divider"/>
            <Input class="input" placeholder="Password" v-model="SignUpDetails.password" type="password"/>
            <Input class="input" placeholder="Confirm Password" v-model="SignUpDetails.confirm_password" type="password"/>
            <!-- BOTTOM -->
            <Button class="button" @click.prevent="signup" :loading="isLoading">Sign up</Button>
            <router-link to="/login">Already a member? Log in</router-link>
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
            SignUpDetails:{
                fullname: '',
                username: '',
                email: '',
                password: '',
                confirm_password: ''
            },
            isLoading: false
        }
    },
    methods:{
        signup(){
            this.isLoading = true;

            this.clearNotification();
            Vue.auth.signup(this, this.SignUpDetails);
        },
        clearNotification(){
            this.success.success = false;
            this.success.message = '';
            this.error.error = false;
            this.error.message = '';
        }
    },
    mounted(){

        this.$root.$on('register:success', () => {
            this.isLoading = false
        })
        this.$root.$on('register:error', () => {
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
.button{
    width: 100%;
    margin-top: 35px;
    margin-bottom: 8px;
}
.divider{
    margin: 10px 0px !important;
    width: 50%;
    left: 50%;
    transform: translate(-50%, 0%);
}
.notifications{
    text-align: center;
    margin-bottom: 15px;
}
</style>
