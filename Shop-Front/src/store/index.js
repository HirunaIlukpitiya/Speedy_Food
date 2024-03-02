import {createStore} from 'vuex';

const store = createStore ({
    state:{
        accessToken: null,
        user: null,
        isLoggedIn: false,
        signInVisited: false,
        DashboardVisited: false,
        FoodID:null,
    },

    mutations:{
        logout: (state) => {
            state.accessToken = null;
            state.isLoggedIn = false;
            localStorage.removeItem("accessToken");
        },
        setaccessToken (state, accessToken){
            if (state.accessToken != null){
                state.isLoggedIn = true
            }
            else {
                state.isLoggedIn = false
            }
        },
        fetchAccessToken(state, accessToken){
            state.accessToken = accessToken
        },
        signInVisited: (state)=>{
            state.signInVisited = true;
        },
        DashboardVisited: (state) =>{
            state.DashboardVisited = true;
        },
        setUpdateId (state, foodID){
                state.FoodID = foodID;
        },

    },

    actions:{
        fetchAccessToken({ commit }){
            commit('fetchAccessToken', localStorage.getItem('accessToken'));
        },

        setaccessToken({commit}, accessToken){
            commit('setaccessToken',accessToken)
        },

        logout({ commit }){
            commit('logout');
        },

        DashboardVisited({commit}){
            commit('DashboardVisited');
        },
        
        signInVisited({commit}){
            commit('signInVisited');
        },
        setUpdateId({commit}, foodID){
            commit('setUpdateId',foodID)
        },
    },
})
export default store;
