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
        visitedUserData: []

    },

    getters: {
        UserData: state => {
            return  state.userDetails;
        },
        visitedData: state => {
            return state.visitedUserData;
        },
        UserList: state => {
            return state.usersList;
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
        },
        SET_VISITED_USER: (state, data) => {
            state.visitedUserData = data
        },
        SET_USER_LIST: (state, data) => {
            state.usersList = data
        }
    },

    actions:{
        GET_USER({commit}) {
            commit('SET_USER');
        },
        GET_VISITED_USER({commit}) {
            commit('SET_VISITED_USER');
        },
        GET_USER_LIST({commit}){
            commit('SET_USER_LIST');
        }
    }


})
