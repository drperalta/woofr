<template>
    <div>
        <p class="page-name">RESET PASSWORD</p>
        <Alert id="success" class="notification" type="success" v-if="success.success" show-icon>{{success.message}}</Alert>
        <Alert  id="error" class="notification" type="error" v-if="error.error" show-icon>{{error.message}}</Alert>

        <Form inline v-if="!hidden">
            <!-- TOP -->
            <Input class="input" placeholder="New Password" v-model="ResetPasswordDetails.password" type="password" :disabled="isLoading"/>
            <Input class="input" placeholder="Confirm Password" v-model="ResetPasswordDetails.confirm_password" type="password" :disabled="isLoading"/>
            <!-- BOTTOM -->
            <Button v-if="!success.success" class="button" @click.prevent="reset" long :loading="isLoading">Change Password</Button>
        </Form>
        <router-link to="/login" v-if="hidden">
            <Button class="backToLogin" long>Back to Login</Button>
        </router-link>
    </div>
</template>

<script>
export default {
    data(){
        return{
            hidden: false,
            success:{
                success: false,
                message: ''
            },
            error:{
                error: false,
                message: ''
            },
            ResetPasswordDetails:{
                password: '',
                confirm_password: '',
                token: this.$route.params.reset_token
            },
            isLoading: false
        }
    },
    methods:{
        reset(){
            this.isLoading = true;
            this.clearNotifs();
            Vue.reset.reset(this, this.ResetPasswordDetails)
        },
        clearNotifs(){
            this.success.success = false;
            this.success.message = '';
            this.error.error = false;
            this.error.message = '';
        }
    },
    created(){
        Vue.reset.validate(this, this.$route.params.reset_token)
    },
    mounted(){

        this.$root.$on('reset:success', () => {
            this.isLoading = false
        })
        this.$root.$on('reset:error', () => {
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
    width: 100% !important;
    margin-top: 10px;
    margin-bottom: 8px;
}
</style>

