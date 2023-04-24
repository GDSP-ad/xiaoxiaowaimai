import { createRouter, createWebHashHistory } from "vue-router"

const routes = [
    {
        path: '/',
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
]
export const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})

export default router
