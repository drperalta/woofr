export default function(Vue){
    Vue.auth = {
        signup(context,data){

            axios.post( 'api/auth/signup', data)
            .then(response => {
                console.log(response);
            }).catch(error => {
                console.log(error)
            })

        },

        login(context, data){

            axios.post('api/auth/login', data)
            .then(response => {
                console.log(response)
            }).catch(error => {
                console.log(error)
            })

        }
    }
}
