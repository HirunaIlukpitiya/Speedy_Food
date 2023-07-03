import {createStore} from 'vuex';

const store = createStore ({
    state:{
        accessToken: null,
        user: null,
        isLoggedIn: false,
        signInVisited: false,
        DashboardVisited: false,
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
        }

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
        }
    },
})
export default store;
