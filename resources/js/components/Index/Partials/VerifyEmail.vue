<template>
    <div class="content">
        <p class="page-name">EMAIL CONFIRMATION</p>
        <Alert id="success" class="notification" type="success" v-if="success.success" show-icon>{{success.message}}</Alert>
        <Alert  id="error" class="notification" type="error" v-if="error.error" show-icon>{{error.message}}</Alert>

        <Form inline v-if="!hidden">
            <!-- Email -->
            <div class="input" v-if="!success.succes">
                <p class="email" >{{email}}</p>
            </div>
            <!-- Confirm Email Button -->
            <Button long class="button" @click.prevent="confirm" :loading="isLoading">Confirm Email</Button>
        </Form>
        <Button to="/login" v-if="success.success" class="backToLogin" long>Back to Login</Button>
        <Button to="/login" v-if="error.error" class="backToLogin" long>Back to Login</Button>
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
            hidden: false,
            email: '',
            isLoading: false
        }
    },
    methods:{
        confirm(){
            this.isLoading = true;
            Vue.auth.verify(this, this.$route.params.activation_token)
        }
    },
    created(){
        Vue.auth.validate(this, this.$route.params.activation_token)
    },
    mounted(){

        this.$root.$on('verify:success', () => {
            this.isLoading = false
        })
        this.$root.$on('verify:error', () => {
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
