export default function(Vue){
    Vue.auth = {
        signup(context,data){

            axios.post( '/api/auth/signup', data)
            .then(response => {
                context.success.success = true;
                context.success.message = response;
            }).catch(error => {

                context.error.error = true;

                var errorArray = Object.values(error.response.data.errors);

                if(error.response.data.errors.password[0] === "The password format is invalid."){
                    context.error.message = "The password should have at least one uppercase letter, one lowercase letter, and one number"
                }else {
                    context.error.message = errorArray[0][0];
                }
            })

        },

        login(context, data){

            axios.post('/api/auth/login', data)
            .then(response => {
                console.log(response)
            }).catch(error => {
                console.log(error)
            })

        },

        verify(context,token){
            axios.get('/api/auth/verify_email/' + token)
            .then(response => {

                context.success.success = true;
                context.success.message = response;
                console.log(response)

            }).catch(error => {
                
                context.error.error = true;
                context.error.message = error.response.data.errors.message[0];

            })
        }
    }
}
