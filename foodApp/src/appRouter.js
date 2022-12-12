import { createRouter,createWebHistory } from 'vue-router';
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),

   routes : [
        {
            path: "/",
            name: 'Home',
            component: () => import('../src/components/home.vue')
        },
        {
            path: "/SignIn.vue",
            name: 'SignIn',
            component: () => import('../src/components/SignIn.vue')
        },
        {
            path: "/SignUp.vue",
            name: 'SignUp',
            component: () => import('../src/components/SignUp.vue')
        },
        {
            path: "/dashboard.vue",
            name: 'Dashboard',
            component: () => import('../src/components/dashboard.vue')
        },
        {
            path: "/AddFood.vue",
            name: 'addFood',
            component: () => import('../src/components/AddFood.vue')
        }
    ]
    })



export default router