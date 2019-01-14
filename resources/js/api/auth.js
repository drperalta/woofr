import store from '../store/index'
import router from '../router/index'

export default function(Vue){
    Vue.auth = {
        //This is for Registration
        signup(context,data){

            axios.post( '/api/auth/signup', data)
            .then(response => {

                context.$root.$emit('register:success')

                context.success.success = true;
                context.success.message = response.data.message;;

                context.SignUpDetails.fullname = '';
                context.SignUpDetails.email = '';
                context.SignUpDetails.username = '';
                context.SignUpDetails.password = '';
                context.SignUpDetails.confirm_password = '';

            }).catch(error => {
                context.$root.$emit('register:error')

                context.error.error = true;

                var errorArray = Object.values(error.response.data.errors);

                context.error.message = errorArray[0][0];
            })

        },
        //This is for Logging in
        login(context, data){

            axios.post('/api/auth/login', data)
            .then(response => {
                context.$root.$emit('login:success')
                store.commit('loginUser')
                localStorage.setItem('token', response.data.access_token)
                router.push({ path: '/timeline' })

            }).catch(error => {
                context.$root.$emit('login:error')

                context.error.error = true;
                var errorArray = Object.values(error.response.data.errors);

                context.error.message = errorArray[0][0];
            })

        },
        logout(){
            localStorage.removeItem('token')
            store.commit('logoutUser')
            router.push({ path: '/login' })
        },

        //This is to check if the Activation Token is Valid
        check(context, data){
            axios.get('/api/auth/check/', data)
            .then(response => {
                console.log(response)
            }).catch(error => {
                console.log(error)
            })
        },
        //This is when confirming email verification
        verify(context,token){
            axios.get('/api/auth/verify_email/' + token)
            .then(response => {
                context.$root.$emit('verify:success')
                context.success.success = true;
                context.success.message = response.data.message;
                context.hidden = true;
                console.log(response)

            }).catch(error => {
                context.$root.$emit('verify:error')
                context.error.error = true;
                context.error.message = error.response.data.errors.message[0];
                context.hide = true;

            })
        },

        validate(context, token){
            axios.get('/api/auth/verify_email/validate/'+token)
            .then(response => {
                context.email = response.data
            }).catch(error => {
                context.error.error = true;
                context.error.message = error.response.data.errors.message[0];
                context.hidden = true;
            })
        }
    }
}
