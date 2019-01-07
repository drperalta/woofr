<template>
    <div class="content left">
            <Form label-position="right" :label-width="100">
                <FormItem class="form-item" label="Full Name">
                    <Input class="input" v-model="UserDetails.full_name" placeholder="Enter your Full Name here" size="large"/>
                </FormItem>
                <FormItem class="form-item" label="Username">
                    <Input class="input" v-model="UserDetails.user_name" placeholder="Enter your Username here" size="large"/>
                    <span style="margin-left: 7px; color: grey">https://woofr.com/</span>{{UserDetails.user_name}}
                </FormItem>
                <FormItem class="form-item" label="Email">
                    <Input class="input" v-model="UserDetails.user_email" placeholder="Enter your Email her" size="large"/>
                    <span style="margin-left: 7px; color: grey;">Email will not be publicly displayed.</span>
                </FormItem>
            </Form>
        </div>
</template>

<script>
export default {
    data(){
        return{
            PrimaryDetails:{
                full_name: 'David Peralta',
                user_name: 'IamDavidMe',
                user_email: 'peraltadavidr@outlook.com',
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