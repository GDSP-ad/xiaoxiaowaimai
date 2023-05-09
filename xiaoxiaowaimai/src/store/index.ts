import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate"
const store = createStore({
    state() {
        return {
            cart: {
                isAdd: true,
                storeId: '',
                goods: [
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
            order: {
                price: 0,
                goods: [

                ]
            },
            userInfo: {
                account: '232131',
                name: '张三',
                describe:'你好呀',
                addressList: [
                    {
                        id: 0,
                        isDefault: true,
                        province: '安徽省',
                        city: '芜湖市',
                        county: '鸠江区',
                        addressDetail: '江坝',//详细地址
                        areaCode: '001100',//地区编码
                        tel: '11120202020',
                        name: '李四'
                    },
                    {
                        id: 1,
                        isDefault: false,
                        province: '安徽省',
                        city: '芜湖市',
                        county: '鸠江区',
                        addressDetail: '江坝',//详细地址
                        areaCode: '001100',//地区编码
                        tel: '11120202020',
                        name: 'wangwu'
                    },
                ],
                chosenAddressId: 0
            }
        }
    },
    getters: {
        priceTotal(state) {
            let total: number = 0;
            state.cart.goods.forEach(v => {
                if ((v as any).isSelected)
                    total += (v as any).count * (v as any).price;
            })
            return total;
        }
    },
    mutations: {
        addCart(state) {
            state.cart.isAdd = true;
        },
        addStoreId(state, storeId) {
            if (state.cart.storeId != storeId) {
                state.cart.storeId = storeId;
                state.cart.goods = [];
            }
        },
        addGoods(state, goods) {
            if (!state.cart.goods.some((value: any, index: number) => {
                if (goods.id === value.id) {
                    (state.cart.goods as any)[index] = goods;
                    return true;
                }
                return false;
            }))
                (state.cart.goods as any).push(goods);
        },
        reduceGoods(state, id) {
            state.cart.goods.find((value, index) => {
                if ((value as any).id === id) {
                    state.cart.goods.splice(index, 1);
                    return true;
                }
            })
        },
        changeGoodsIsSelected(state, id) {
            for (let i = 0; i < state.cart.goods.length; i++) {
                if (id == (state.cart.goods[i] as any).id) {
                    (state.cart.goods[i] as any).isSelected = !(state.cart.goods[i] as any).isSelected;
                    return;
                }
            }
        },
        addOrder(state, total) {
            state.order.price = total;
            state.order.goods=[];
            state.cart.goods.forEach(v => {
                if ((v as any).isSelected)
                    state.order.goods.push(v);
            })
        },
        changeAddress(state, address) {

            if (address.isDefault) {
                for (let i = 0; i < state.userInfo.addressList.length; i++) {
                    if (state.userInfo.addressList[i].isDefault){
                        state.userInfo.addressList[i].isDefault=false;
                        break;
                    }
                }
            }

            for (let i = 0; i < state.userInfo.addressList.length; i++) {
                if (state.userInfo.addressList[i].id === address.id) {
                    state.userInfo.addressList[i] = address;
                    break;
                }
            }
        },
        addAddress(state,address) {
            if (address.isDefault) {
                for (let i = 0; i < state.userInfo.addressList.length; i++) {
                    if (state.userInfo.addressList[i].isDefault){
                        state.userInfo.addressList[i].isDefault=false;
                        break;
                    }
                }
            }
            state.userInfo.addressList.push(address);
        },
        deleteAddress(state,id){
            for (let i = 0; i < state.userInfo.addressList.length; i++){
                if(state.userInfo.addressList[i].id===id){
                    state.userInfo.addressList.splice(i,1);
                    break;
                }
            }
        },
        changeChosenAddressId(state,id){
            state.userInfo.chosenAddressId=id;
        }
    },
    plugins: [createPersistedState()]
})

export default store;