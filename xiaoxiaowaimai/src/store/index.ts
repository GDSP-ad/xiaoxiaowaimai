import {createStore} from 'vuex'

const store =createStore({
    state(){
        return {
            cart:{
                isAdd:true,
                storeId:'',
                goods:[
                    // {
                    //     id:0,
                    //     name:'',
                    //     img:'',
                    //     count:1,
                    //     price:10
                    //     isSelected:true
                    //  }     
                ]
            },
            order:{
                price:0,
                goods:[

                ]
            }
        }
    },
    getters:{
        priceTotal(state){
            let total:number=0;
            state.cart.goods.forEach(v=>{
                if((v as any).isSelected)
                    total+=(v as any).count*(v as any).price;
            })
            return total;
        }
    },
    mutations:{
        addCart(state){
            state.cart.isAdd=true;
        },
        addStoreId(state,storeId){
            if(state.cart.storeId!=storeId){
                state.cart.storeId=storeId;
                state.cart.goods=[];
            }
        },
        addGoods(state,goods){
            if(!state.cart.goods.some((value:any,index:number)=>{
                if(goods.id===value.id){
                    (state.cart.goods as any)[index]=goods;
                    return true;
                }
                return false;
            }))
                (state.cart.goods as any).push(goods);     
        },
        reduceGoods(state,id){
            state.cart.goods.find((value,index)=>{
                if((value as any).id===id){
                    state.cart.goods.splice(index,1);
                    return true;
                }
            })
        },
        changeGoodsIsSelected(state,id){
            for(let i=0;i<state.cart.goods.length;i++){
                if(id==(state.cart.goods[i] as any).id){
                    (state.cart.goods[i] as any).isSelected=!(state.cart.goods[i] as any).isSelected;
                    return;
                } 
            }
        },
        addOrder(state,total){
            state.order.price=total;
            state.cart.goods.forEach(v=>{
                if((v as any).isSelected)
                    state.order.goods.push(v);
            })
        }
    }
})

export default store;