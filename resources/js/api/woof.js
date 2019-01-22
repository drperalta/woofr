import store from '../store/index'
import router from '../router/index'

export default function(Vue){
    Vue.woof = {

        //WOOFS
        send_woof(context, data){
            axios.post('/api/woof/send_woof', data, this.auth())
            .then(response => {
                this.all()
                context.focused = false;
                context.percent = 0;
                context.woof_length = 0;
                context.WoofDetails.Woof = '';

                Vue.auth.setUser();
            }).catch(error => {
                console.log(error)
            })
        },
        send_rewoof(context, data){
            axios.post('/api/woof/send_rewoof', data, this.auth())
            .then(response => {
                context.focused = false;
                context.percent = 0;
                context.comment_length = 0;
                context.ReWoofDetails.reply = '',
                
                Vue.woof.selected(data.woof_id)
                Vue.auth.setUser();
                context.$Message.success(`Successfully Rewoofed @${data.username}'s Post.`)
            }).catch(error => {
                console.log(error)
            })
        },
        send_comment(context, data){
            axios.post('/api/woof/send_comment', data, this.auth())
            .then(response => {
                context.focused = false;
                context.percent = 0;
                context.reply_length = 0;
                context.CommentDetails.reply = '',
                
                this.selected(data.woof_id)
                Vue.auth.setUser();
                context.$Message.success(`You successfully send a reply to @${data.username}`)
            }).catch(error => {
                console.log(error)
            })
        },
        like(context,data,component){
            axios.post('/api/woof/like',data, this.auth())
            .then(response => {
                Vue.auth.setUser();
            }).catch(error => {
                console.log(error)
            })
        },
        dislike(context, data){
            axios.post('/api/woof/dislike',data, this.auth())
            .then(response => {
                Vue.auth.setUser();
            }).catch(error => {
                console.log(error)
            })
        },
        selected(id){
            axios.get(`/api/woof/selected/${id}`, this.auth())
            .then(response => {
                store.commit('SET_WOOF_SELECTED', response.data)
            }).catch(error => {
                console.log(error)
            })
        },
        delete(context,id,user_id){

            axios.post('/api/woof/delete',{id: id}, this.auth())
            .then(response => {
                this.my_woofs(user_id)
                this.all();
                context.$Message.success('Succefully Deleted!');
                Vue.auth.setUser();
                console.log(response.data)
            }).catch(error => {
                console.log(error)
            })
        },
        
        all(){
            axios.get(`/api/woof/all`, this.auth())
            .then(response => {
                store.commit('SET_WOOF_LIST', response.data)
            }).catch(error => {
                console.log(error)
            })
        },
        my_woofs(id){
            axios.get(`/api/woof/my_woofs/${id}`, this.auth())
            .then(response => {
                store.commit('SET_USER_WOOFS', response.data)
            }).catch(error => {
                console.log(error)
            })
        },

        auth(){
            return { headers: { 'Authorization': 'Bearer ' + localStorage.getItem('token') } }
        }
    }
}
