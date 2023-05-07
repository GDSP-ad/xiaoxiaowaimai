import { createRouter, createWebHashHistory } from "vue-router"

const routes = [
    {
        path: '/',
        component: () => import('../views/home/Home.vue')             
    },
    {
        path: '/home',
        component: () => import('../views/home/Home.vue')             
    },
    {
        path: '/cart',
        name: "cart",
        component: () => import('../views/cart/Cart.vue')   
    },
    {
        path: '/order',
        name: "order",
        component: () => import('../views/order/Order.vue')   
    },
    {
        path: '/mine',
        name: "mine",
        component: () => import('../views/mine/Mine.vue')   
    },
    {
        path: '/store',
        name: "store",
        component: () => import('../views/store/Store.vue')   
    },
    {
        path: '/createOrder',
        name: "createOrdere",
        component: () => import('../views/createOrder/CreateOrder.vue')   
    },
    {
        path: '/login',
        name: "login",
        component: () => import('../views/login/Login.vue')   
    },
    {
        path: '/random',
        name: "random",
        component: () => import('../views/random/Random.vue')   
    },
]
export const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})

export default router
