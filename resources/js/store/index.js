import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({

    state:{
        isLoggedIn: !!localStorage.getItem('token'),
        userDetails: [],
        woofList: [],
        commentList: [],
        usersList: [],

    },

    getters: {
        UserData: state => {
            return  state.userDetails;
        }

    },

    mutations:{
        loginUser (state) {
            state.isLoggedIn = true
        },
        logoutUser (state) {
            state.isLoggedIn = false
        },
        SET_USER: (state, data) => {
            state.userDetails = data
        }
    },

    actions:{
        GET_USER({commit}) {
            commit('SET_USER');
        }
    }


})
