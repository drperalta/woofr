import store from '../store/index'
import router from '../router/index'

export default function(Vue){
    Vue.comment = {
        send(context, data){
            axios.post('/api/comment/send', data, this.auth())
            .then(response => {
                context.focused = false;
                context.percent = 0;
                context.reply_length = 0;
                context.CommentDetails.reply = '',
                
                console.log(response.data)
            }).catch(error => {
                console.log(error)
            })
        },
        auth(){
            return { headers: { 'Authorization': 'Bearer ' + localStorage.getItem('token') } }
        }

    }
}