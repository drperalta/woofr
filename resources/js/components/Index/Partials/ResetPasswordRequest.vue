<template>
    <div class="content">
        <p class="page-name">RESET PASSWORD</p>
        <Alert id="success" class="notification" type="success" v-if="success.success" show-icon>{{success.message}}</Alert>
        <Alert  id="error" class="notification" type="error" v-if="error.error" show-icon>{{error.message}}</Alert>

        <Form inline>
            <!-- TOP -->
            <Input class="input" placeholder="Email" v-model="UserDetails.email"/>
            <!-- BOTTOM -->
            <Button class="button" @click="send" :loading="isLoading">Send Link</Button>
            <router-link to="/login">Nevermind, I got it.</router-link>
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

            UserDetails:{
                email: ''
            },
            isLoading: false
        }
    },
    methods:{
        send(){
            this.isLoading = true;
            this.clearNotifs();
            Vue.reset.create(this, this.UserDetails)
        },
        clearNotifs(){
            this.success.success = false;
            this.success.message = '';
            this.error.error = false;
            this.error.message = '';
        }
    },
    mounted(){

        this.$root.$on('create:success', () => {
            this.isLoading = false
        })
        this.$root.$on('create:error', () => {
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
    margin-top: 10px;
    margin-bottom: 8px;
}
</style>
