<template>
    <div class="content">
        <p class="page-name">SIGN UP</p>
        <Form inline>
            <!-- TOP -->
            <Input class="input" placeholder="Full Name" v-model="SignUpDetails.full_name"/>
            <Input class="input" placeholder="Username" v-model="SignUpDetails.user_name"/>
            <Input class="input" placeholder="Email" v-model="SignUpDetails.user_email"/>
            <Divider class="divider"/>
            <Input class="input" placeholder="Password" v-model="SignUpDetails.user_pass" type="password"/>
            <Input class="input" placeholder="Confirm Password" v-model="SignUpDetails.user_confirm_pass" type="password"/>
            <!-- BOTTOM -->
            <Button class="button">Sign up</Button>
            <router-link to="/login">Already a member? Log in</router-link>
        </Form>
    </div>
</template>

<script>
export default {
    data(){
        return{
            SignUpDetails:{
                full_name: '',
                user_name: '',
                user_email: '',
                user_pass: '',
                user_confirm_pass: ''
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
    margin-top: 35px;
    margin-bottom: 8px;
}
.divider{
    margin: 10px 0px !important;
    width: 50%;
    left: 50%;
    transform: translate(-50%, 0%);
}
</style>
