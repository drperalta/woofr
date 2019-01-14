<template>
    <div>
        <p class="page-name">RESET PASSWORD</p>
        <Alert id="success" class="notification" type="success" v-if="success.success">{{success.message}}</Alert>
        <Alert  id="error" class="notification" type="error" v-if="error.error">{{error.message}}</Alert>
        <Form inline>
            <!-- TOP -->
            <Input v-if="!this.success.success" class="input" placeholder="New Password" v-model="ResetPasswordDetails.password" type="password"/>
            <Input v-if="!this.success.success" class="input" placeholder="Confirm Password" v-model="ResetPasswordDetails.confirm_password" type="password"/>
            <!-- BOTTOM -->
            <Button v-if="!success.success" class="button" @click.prevent="reset" long>Change Password</Button>
            <router-link to="/login" v-if="success.success">
                <Button class="backToLogin" long>Back to Login</Button>
            </router-link>
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
            ResetPasswordDetails:{
                password: '',
                confirm_password: '',
                token: this.$route.params.reset_token
            }
        }
    },
    methods:{
        reset(){
            this.clearNotifs();
            Vue.reset.reset(this, this.ResetPasswordDetails)
        },
        clearNotifs(){
            this.success.success = false;
            this.success.message = '';
            this.error.error = false;
            this.error.message = '';
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
    margin-top: 10px;
    margin-bottom: 8px;
}
</style>

