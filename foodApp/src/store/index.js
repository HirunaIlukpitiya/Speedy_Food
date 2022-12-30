import {createStore} from 'vuex';

const store = createStore ({
    state:{
        accessToken: null,
        user: null,
        isLoggedIn: false
    },

    mutations:{
        logout: (state) => {
            state.accessToken = null;
            state.isLoggedIn = false;
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
        }
    },
})
export default store;
