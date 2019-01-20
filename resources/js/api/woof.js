import store from '../store/index'
import router from '../router/index'

export default function(Vue){
    Vue.woof = {

        //WOOFS
        send(context, data){
            axios.post('/api/woof/send', data, this.auth())
            .then(response => {
                this.all()
                context.focused = false;
                context.percent = 0;
                context.woof_length = 0;
                context.WoofDetails.Woof = '';
            }).catch(error => {
                console.log(error)
            })
        },
        delete(context,id){
            axios.post('/api/woof/delete',{id: id}, this.auth())
            .then(response => {
                this.all();
                context.$Message.success('Succefully Deleted!');
                console.log(response.data)
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
