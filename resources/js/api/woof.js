import store from '../store/index'
import router from '../router/index'

export default function(Vue){
    Vue.woof = {

        //WOOFS
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