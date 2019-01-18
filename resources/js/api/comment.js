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

                Vue.woof.selected(data.woof_id)
                context.$Message.success(`You successfully send a reply to @${data.username}`)
            }).catch(error => {
                console.log(error)
            })
        },
        set(id){
            axios.get(`/api/woof/selected/${id}`, this.auth())
            .then(response => {
                store.commit('SET_COMMENT_DATA', response.data)
            }).catch(error => {
                console.log(error)
            })
        },
        auth(){
            return { headers: { 'Authorization': 'Bearer ' + localStorage.getItem('token') } }
        }

    }
}
