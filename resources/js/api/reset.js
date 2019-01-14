export default function(Vue){
    Vue.reset = {

        create(context, data){
            axios.post('/api/password/create', data)
            .then(response => {
                //clear the inputs
                context.UserDetails = '';

                context.success.success = true;
                context.success.message = response.data.message;
            }).catch(error => {
                context.error.error = true;

                var errorArray = Object.values(error.response.data.errors);
                context.error.message = errorArray[0][0]
            })
        },

        reset(context, data){
            axios.post('/api/password/reset', data)
            .then(response => {
                
                context.hidden = true;
                context.success.success = true;
                context.success.message = response.data.message;
            }).catch(error => {

                context.error.error = true;

                var errorArray = Object.values(error.response.data.errors);
                context.error.message = errorArray[0][0]


            })
        },

        validate(context, token){
            axios.get('/api/password/validate/'+token)
            .then(response => {
                
            }).catch(error => {
                context.hidden = true;
                context.error.error = true;
                context.error.message = error.response.data.errors.message[0];
            })
        }

    }
}
