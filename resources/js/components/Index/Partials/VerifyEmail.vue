<template>
    <div class="content">
        <p class="page-name">EMAIL CONFIRMATION</p>
        <Alert id="success" class="notification" type="success" v-if="success.success">{{success.message}}</Alert>
        <Alert  id="error" class="notification" type="error" v-if="error.error">{{error.message}}</Alert>

        <!-- Email -->
        <div class="input" v-if="!hide">
            <p class="email" >peraltadavidr@outlook.com</p>
        </div>
        <!-- Confirm Email Button -->
        <Button long v-if="!error.error" class="button" @click="confirm">Confirm Email</Button>

        <router-link to="/login" v-if="success.success">
            <v-btn outline class="backToLogin" type="submit">Back to Login</v-btn>
        </router-link>
        <router-link to="/login" v-if="error.error">
            <v-btn outline class="backToLogin" type="submit">Back to Login</v-btn>
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
</style>
