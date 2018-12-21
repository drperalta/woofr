<template>
    <div class="content">
        <p class="name">LOGIN</p>

        <v-form>
            <div>
                <el-input class="el-input" placeholder="Username or Email" v-model="LoginDetails.user_email"></el-input>
                <el-input class="el-input" placeholder="Password" type="password" v-model="LoginDetails.password"></el-input>
            </div>
            <div class="middle">
                <el-checkbox v-model="LoginDetails.remember_me">Remember Me</el-checkbox>
            </div>
            <div class="bottom">
                <v-btn outline class="loginButton" type="submit">Login</v-btn>
                <router-link to="/signup">
                        <a style="color: #8fb9a8" >Need and account? Sign Up</a>
                </router-link>
            </div>
        </v-form>
    </div>
</template>

<script>
export default {
    data(){
        return{
            LoginDetails:{
                user_email: '',
                password: '',
                remember_me: false
            }
        }
    }
}
</script>

<style scoped>
.content{
    display: inline;
}
.name{
    font-size: 14px;
    font-weight: 300;
    color: #765d69; 
}
.el-input{
    padding: 4px;
}
.middle{
    padding: 4px;
    left: 0;    
    text-align: left;
}
.loginButton{
    width: 100%;
    color: #765d69;
    margin: 0;
    margin-bottom: 10px;
    padding: 4px;
    border-color: #765d69;
    opacity: 0.7;
    margin-top: 30px;
}
</style>
