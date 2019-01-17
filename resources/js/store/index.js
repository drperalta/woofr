import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({

    state:{
        isLoggedIn: !!localStorage.getItem('token'),

        selectedWoofModal: false,
        selectedWoofData: [],

        userData: [],
        userWoofs: [],
        userFollowers: [],
        userFollowing: [],
        userLikes: [],

        woofList: [],
        commentList: [],
        usersList: [],
        visitedUserData: [],
        

    },

    getters: {
        UserData: state => {
            return  state.userData;
        },
        VisitedData: state => {
            return state.visitedUserData;
        },
        UserList: state => {
            return state.usersList;
        },
        WoofModal: state => {
            return state.selectedWoofModal;
        },
        WoofList: state => {
            return state.woofList;
        },
        SelectedWoofData: state => {
            return state.selectedWoofData;
        }
    },

    mutations:{
        loginUser (state) {
            state.isLoggedIn = true
        },
        logoutUser (state) {
            state.isLoggedIn = false
        },
        onWoofModal: (state) => {
            state.selectedWoofModal = true
        },
        offWoofModal: (state) => {
            state.selectedWoofModal = false
        },
        SET_USER: (state, data) => {
            state.userData = data
        },
        SET_VISITED_USER: (state, data) => {
            state.visitedUserData = data
        },
        SET_USER_LIST: (state, data) => {
            state.usersList = data
        },


        SET_WOOF_SELECTED: (state, data) => {
            state.selectedWoofData = data;
        },
        SET_WOOF_LIST: (state, data) => {
            state.woofList = data;
        },


        SET_USER_WOOFS: (state, data) => {
            state.userWoofs = data;
        },
        SET_USER_FOLLOWING: (state, data) => {
            state.userFollowing = data;
        },
        SET_USER_FOLLOWERS: (state, data) => {
            state.userFollowers = data;
        },
        SET_USER_LIKES: (state, data) => {
            state.userLikes = data;
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
        },
    }


})
