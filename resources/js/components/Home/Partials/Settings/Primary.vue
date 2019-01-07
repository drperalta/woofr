<template>
    <div class="content left">
            <Form label-position="right" :label-width="100">
                <FormItem class="form-item" label="Full Name">
                    <Input class="input" v-model="PrimaryDetails.full_name" placeholder="Enter your Full Name here" size="large" @on-change="changed()"/>
                </FormItem>
                <FormItem class="form-item" label="Username">
                    <Input class="input" v-model="PrimaryDetails.user_name" placeholder="Enter your Username here" size="large" @on-change="changed()"/>
                    <span style="margin-left: 7px; color: grey">https://woofr.com/</span>{{PrimaryDetails.user_name}}
                </FormItem>
                <FormItem class="form-item" label="Email">
                    <Input class="input" v-model="PrimaryDetails.user_email" placeholder="Enter your Email her" size="large" @on-change="changed()"/>
                    <span style="margin-left: 7px; color: grey;">Email will not be publicly displayed.</span>
                </FormItem>
                <FormItem>
                    <Button class="button" type="primary" shape="circle" :disabled="this.disabled">Save Changes</Button>
                </FormItem>
            </Form>
        </div>
</template>

<script>
export default {
    data(){
        return{
            disabled: true,
            PrimaryDetails:{
                full_name: 'David Peralta',
                user_name: 'IamDavidMe',
                user_email: 'peraltadavidr@outlook.com',
            },
            UserDetails:{
                full_name: 'David Peralta',
                user_name: 'IamDavidMe',
                user_email: 'peraltadavidr@outlook.com',
            },
            
        }
    },
    methods:{
        changed(){
            if(this.UserDetails.full_name != this.PrimaryDetails.full_name ||
                this.UserDetails.user_name != this.PrimaryDetails.user_name ||
                this.UserDetails.user_email != this.PrimaryDetails.user_email){
                    this.disabled = false;
            }else{ this.disabled = true; }
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
.button{
    margin-top: 20px;
    width: 250px;
}
</style>