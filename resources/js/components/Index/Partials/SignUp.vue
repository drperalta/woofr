<template>
    <div class="content">
        <p class="name">SIGN UP</p>
        
        <v-form>
            <div>
                <el-input class="el-input" placeholder="Name" v-model="SignUpDetails.full_name"></el-input>
                <el-input class="el-input" placeholder="Username" v-model="SignUpDetails.user_name"></el-input>
                <el-input class="el-input" placeholder="Email" v-model="SignUpDetails.user_email"></el-input>
                <el-input class="el-input" placeholder="Password" type="password" v-model="SignUpDetails.password"></el-input>
                <el-input class="el-input" placeholder="Confirm Password" type="password" v-model="SignUpDetails.confirm_password"></el-input>
            </div>
            <div class="bottom">
                <v-btn outline class="signUpButton" type="submit">Sign Up</v-btn>
                <router-link to="/login">
                        <a style="color: #8fb9a8" >Already a member? Sign In</a>
                </router-link>
            </div>
        </v-form>
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
                password: '',
                confirm_password: ''
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
    text-align: center;
}
.el-input{
    padding: 4px;
}
.signUpButton{
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
