import store from '../store/index'
import router from '../router/index'

export default function(Vue){
    Vue.rewoof = {
        send(context, data){
            axios.post('/api/rewoof/send', data, this.auth())
            .then(response => {
                context.focused = false;
                context.percent = 0;
                context.comment_length = 0;
                context.ReWoofDetails.reply = '',
                
                Vue.woof.selected(data.woof_id)
                context.$Message.success(`Successfully Rewoofed @${data.username}'s Post.`)
            }).catch(error => {
                console.log(error)
            })
        },

        set(id){
            axios.get(`/api/woof/selected/${id}`, this.auth())
            .then(response => {
                store.commit('SET_REWOOF_DATA', response.data)
            }).catch(error => {
                console.log(error)
            })
        },
        auth(){
            return { headers: { 'Authorization': 'Bearer ' + localStorage.getItem('token') } }
        }

    }
}
