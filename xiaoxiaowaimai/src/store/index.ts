import {createStore} from 'vuex'

const store =createStore({
    state(){
        return {
            cart:{
                storeId:'',
                goods:[
                    {
                        id:'',
                        name:'',
                        img:'',
                        count:1,
                        price:10
                    }
                ]
            }
        }
    },
    mutations:{
        addCart(state,cart){
            state.cart=cart;
        }
    }
})

export default store;