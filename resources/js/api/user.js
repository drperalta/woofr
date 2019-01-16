import store from '../store/index'
import router from '../router/index'

export default function(Vue){
    Vue.user = {

        edit_password(context, data){
            axios.post('/api/user/edit/password', data, this.auth())
            .then(response => {

                context.$Message.success('Your password is successfully updated!');
                
                context.PasswordDetails.password  = '';
                context.PasswordDetails.new_password  = '';
                context.PasswordDetails.confirm_new_password  = '';
                context.disabled = true;

                console.log(response)
            }).catch(error => {
                var errorArray = Object.values(error.response.data.errors);
                context.$Message.error({content: errorArray[0][0] ,duration: 5, closable: true});
                console.log(error.response.data.errors)
            })
        },
        edit_primary(context, data){
            axios.post('/api/user/edit/primary', data, this.auth())
            .then(response => {
                context.$Message.success(response.data.message);
            }).catch(error => {
                var errorArray = Object.values(error.response.data.errors);
                context.$Message.error(errorArray[0][0])
            })
        },
        primary_onchange(context,data){
            axios.post('/api/user/edit/primary_onchange', data, this.auth())
            .then(response => {
                context.disabled = false;
            }).catch(error => {
                context.disabled = true;
            })
        },
        auth(){
            return { headers: { 'Authorization': 'Bearer ' + localStorage.getItem('token') } }
        }
    }
}
