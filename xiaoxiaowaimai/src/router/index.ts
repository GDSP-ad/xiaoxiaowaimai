import { createRouter, createWebHashHistory } from "vue-router"

const routes = [
    {
         path: '/', redirect: '/home'           
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
        path: '/register',
        name: "register",
        component: () => import('../views/register/Register.vue')   
    },
    {
        path: '/random',
        name: "random",
        component: () => import('../views/random/Random.vue')   
    },
    {
        path: '/address',
        name: "address",
        component: () => import('../views/address/Address.vue')   
    },
    {
        path: '/customerService',
        name: "customerService",
        component: () => import('../views/customerService/CustomerService.vue')   
    },
    {
        path: '/editAddress',
        name: "editAddress",
        component: () => import('../views/editAddress/editAddress.vue')   
    },
    {
        path: '/location',
        name: "location",
        component: () => import('../views/location/Location.vue')   
    },
    {
        path: '/userEdit',
        name: "userEdit",
        component: () => import('../views/userEdit/UserEdit.vue')   
    },
]
const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})

router.beforeEach((to,from)=>{
    if((to.name=='mine'||to.name=='order'||to.name=='cart')&&!localStorage.getItem('isLogin'))
        return {name:'login'}
})



export default router
