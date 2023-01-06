import { createRouter,createWebHistory } from 'vue-router';
import store from "../store";
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),

   routes : [
        {
            path: "/",
            name: 'Home',
            component: () => import('../components/home.vue')
        },
        {
            path: "/SignIn",
            name: 'SignIn',
            component: () => import('../components/SignIn.vue')
        },
        {
            path: "/SignUp",
            name: 'SignUp',
            component: () => import('../components/SignUp.vue')
        },
        {
            path: "/dashboard",
            name: 'Dashboard',
            component: () => import('../components/dashboard.vue'),
            beforeEnter: (to, from, next) => {
                if (store.state.isLoggedIn === false) {
                    next({path:'/SignIn',
                    query:{
                            redirecFrom: to.fullPath
                    }
                })
                }
                else{
                    next()
                }
            }
        },
        {
            path: "/AddFood",
            name: 'addFood',
            component: () => import('../components/AddFood.vue')
        }
    ]
    })



export default router