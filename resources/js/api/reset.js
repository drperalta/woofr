export default function(Vue){
    Vue.reset = {

        create(context, data){
            axios.post('/api/password/create', data)
            .then(response => {
                console.log(response)
            }).catch(error => {
                console.log(error)
            })
        }

    }
}