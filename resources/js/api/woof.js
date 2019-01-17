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
        selected(id){
            axios.get(`/api/woof/selected/${id}`, this.auth())
            .then(response => {
                store.commit('SET_WOOF_SELECTED', response.data)
                store.commit('onWoofModal')
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

        auth(){
            return { headers: { 'Authorization': 'Bearer ' + localStorage.getItem('token') } }
        }
    }
}