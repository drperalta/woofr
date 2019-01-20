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
            }).catch(error => {
                var errorArray = Object.values(error.response.data.errors);
                context.$Message.error({content: errorArray[0][0] ,duration: 5, closable: true});
            })
        },
        edit_primary(context, data){
            axios.post('/api/user/edit/primary', data, this.auth())
            .then(response => {
                context.disabled = true;
                context.$Message.success(response.data.message);
            }).catch(error => {
                var errorArray = Object.values(error.response.data.errors);
                context.$Message.error(errorArray[0][0])
            })
        },
        edit_description(context, data, country){
            axios.post('/api/user/edit/description',
                {
                    description: data.description,
                    country: country,
                    website: data.website,
                    birthdate: data.birthdate
                }
            , this.auth())
            .then(response => {
                context.$Message.success(response.data.message);
            }).catch(error => {
                console.log(error)
            })
        },
        setVisitedUser(data){
            axios.get('/api/user/visited/'+data, this.auth())
            .then(response => {
                store.commit('SET_VISITED_USER', response.data)

                Vue.woof.my_woofs(response.data.id)
            }).catch(error => {
                console.log(error)
            })
        },
        setUserList(){
            axios.get('/api/user/list', this.auth() )
            .then(response => {
                store.commit('SET_USER_LIST', response.data)
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
