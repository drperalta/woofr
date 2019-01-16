<template>
    <div class="content">
        <Form label-position="right" :label-width="111">
            <FormItem class="form-item" label="Full Name">
                <Input class="input" v-model="UserData.fullname" placeholder="Enter your Full Name here" size="large" @on-change="changed()"/>
            </FormItem>
            <FormItem class="form-item" label="Username">
                <Input class="input" v-model="UserData.username" placeholder="Enter your Username here" size="large" @on-change="changed()"/>
                <span style="margin-left: 7px; color: grey">https://woofr.com/</span>{{UserData.username}}
            </FormItem>
            <FormItem class="form-item" label="Email">
                <Input class="input" v-model="UserData.email" placeholder="Enter your Email her" size="large" @on-change="changed()"/>
                <span style="margin-left: 7px; color: grey;">Email will not be publicly displayed.</span>
            </FormItem>
            <FormItem>
                <Button class="button" type="primary" shape="circle" :disabled="this.disabled">Save Changes</Button>
            </FormItem>
        </Form>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    data(){
        return{
            disabled: true,
            User:{
                fullname: '',
                email: '',
                username: '',
            }
        }
    },
    methods:{
        changed(){
            // if(this.UserDetails.full_name != this.PrimaryDetails.full_name ||
            //     this.UserDetails.user_name != this.PrimaryDetails.user_name ||
            //     this.UserDetails.user_email != this.PrimaryDetails.user_email){
            //         this.disabled = false;
            // }else{ this.disabled = true; }
            Vue.user.primary_onchange(this, this.UserData);
        },
        save(){
            Vue.user.edit_primary(this, this.UserData)
        }
    },
    computed: mapGetters([
        'UserData'
    ])
}
</script>

<style scoped>
.content{
}
.input{
    width: 250px;
    margin: 5px;
    display: block;
}
.form-item{
    margin-bottom: 10px !important;
}
.button{
    margin-top: 20px;
    width: 250px;
}
</style>