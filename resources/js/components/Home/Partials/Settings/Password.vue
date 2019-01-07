<template>
    <div class="content">
        <Form label-position="right" :label-width="110  ">
            <FormItem class="form-item" label="Current Password">
                <Input class="input" v-model="PasswordDetails.password" size="large"/>
            </FormItem>
            <FormItem class="form-item" label="New Password">
                <Input class="input" v-model="PasswordDetails.new_password" size="large" @on-change="changed()"/>
            </FormItem>
            <FormItem class="form-item" label="Confirm Password">
                <Input class="input" v-model="PasswordDetails.confirm_current_pasword" size="large" @on-change="changed()"/>
            </FormItem>
            <FormItem>
                <Button  class="button" type="primary" shape="circle" :disabled="this.disabled">Change Password</Button>
            </FormItem>
        </Form>
    </div>
</template>

<script>
export default {
    data(){
        return{
            disabled: true,
            PasswordDetails:{
                password: '',
                new_password: '',
                confirm_new_password: '',
            },
            UserPasswordDetails:{
                password: '',
                new_password: '',
                confirm_new_password: '',
            }
        }
    },
    methods:{
        changed(){
            if(this.UserPasswordDetails.new_password != this.PasswordDetails.new_password ||
                this.UserPasswordDetails.confirm_new_password != this.PasswordDetails.confirm_new_password){
                    this.disabled = false;
            }else{ this.disabled = true; }
        }
    }
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