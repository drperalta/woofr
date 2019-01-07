<template>
    <div class="content left">
        <Form label-position="right" :label-width="110  ">
            <FormItem label="Current Password">
                <Input class="input" v-model="UserDetails.password" size="large"/>
            </FormItem>
            <FormItem label="New Password">
                <Input class="input" v-model="UserDetails.new_password" size="large"/>
            </FormItem>
            <FormItem label="Confirm Password">
                <Input class="input" v-model="UserDetails.confirm_current_pasword" size="large"/>
            </FormItem>
        </Form>
    </div>
</template>

<script>
export default {
    data(){
        return{
            PasswordDetails:{
                password: '',
                new_password: '',
                confirm_new_password: '',
            }
        }
    }
}
</script>

<style scoped>
.content{
    width: 450px;
}
.input{
    width: 250px;
    margin: 5px;
    display: block;
}
.form-item{
    margin-bottom: 10px !important;
}
</style>