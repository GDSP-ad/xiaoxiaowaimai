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
            }
        }
    },
    getters:{
        
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
        }
    }
})

export default store;