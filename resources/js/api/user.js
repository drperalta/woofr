import store from '../store/index'
import router from '../router/index'

export default function(Vue){
    Vue.user = {

        edit_password(context, data){
            axios.post('/api/user/edit/password', data, { headers: { 'Authorization': 'Bearer ' + localStorage.getItem('token') } })
            .then(response => {

                context.$Message.success('Your password is successfully updated!');
                
                context.PasswordDetails.password  = '';
                context.PasswordDetails.new_password  = '';
                context.PasswordDetails.confirm_new_password  = '';
                context.disabled = true;

                console.log(response)
            }).catch(error => {
                
                context.$Message.error(error.response.data.errors[0]);
                console.log(error.response.data.errors)
            })
        }
    }
}
