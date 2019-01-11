<template>
    <div class="content">
        <p class="page-name">EMAIL CONFIRMATION</p>
        <Alert id="success" class="notification" type="success" v-if="success.success">{{success.message}}</Alert>
        <Alert  id="error" class="notification" type="error" v-if="error.error">{{error.message}}</Alert>

        <!-- Email -->
        <div class="input" v-if="!success.succes">
            <p class="email" >peraltadavidr@outlook.com</p>
        </div>
        <!-- Confirm Email Button -->
        <Button long v-show="!hide" class="button" @click.prevent="confirm">Confirm Email</Button>

        <router-link to="/login" v-if="success.success">
            <Button class="backToLogin" long>Back to Login</Button>
        </router-link>
        <router-link to="/login" v-if="error.error">
            <Button class="backToLogin" long>Back to Login</Button>
        </router-link>
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
            hide: false,

        }
    },
    methods:{
        confirm(){
            Vue.auth.verify(this, this.$route.params.activation_token)
        }
    }
}
</script>

<style scoped>
.page-name{
    margin-bottom: 20px;
}
.input{
    height: 35px;
    margin-bottom: 10px;
    padding: 5px;
    text-align: center;
    background-color: white;
    border: 1px solid transparent;
    border-radius: 5px;
    width: 272px;
}
.email{
    font-size: 14px;
    font-weight: 400;
}
.notifications{
    text-align: center;
    margin-bottom: 15px;
}
</style>
