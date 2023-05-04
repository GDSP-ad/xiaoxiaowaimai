<template>
    <div class="store animate__animated animate__fadeInLeft">
        <Header title="店铺"></Header>
        <div class="content">
            <div class="img"></div>
            <div class="foodSort">
                <div class="sort"></div>
                <div class="name">{{ data.title }}<img :src="data.img" alt="" class="store-img"></div>
                <van-tabs v-model:active="active" color="#ffc400">
                    <van-tab v-for="(item, index) in data.storeData" :key="index" :title="item.name">
                        <food-list :index="index" :foodData="item.data"></food-list>
                    </van-tab>
                </van-tabs>
            </div>
        </div>
        <div>
            <van-action-bar>
                <van-action-bar-icon icon="chat-o" text="客服"  />
                <van-action-bar-icon icon="cart-o" text="购物车" :badge="store.state.cart.goods.length" @click="router.push('/cart')"/>
                <van-action-bar-button type="warning" text="加入购物车" @click="addCart"/>
                <van-action-bar-button type="danger" text="立即购买" @click="buyNow"/>
            </van-action-bar>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { showNotify } from 'vant';
import { showToast } from 'vant';
import Header from '../../components/Header.vue';
import FoodList from './components/FoodList.vue'

function addCart(){
    if(store.state.cart.goods.length===0){
        showToast('请选择商品');
    }else{
        store.commit('addCart');
        showToast('添加成功');
    }
}


function buyNow(){
    if(store.state.cart.goods.length===0){
        showToast('请选择商品');
    }else{
        store.commit('addCart');
        router.push('/cart')
    }
}

const store=useStore();
const router=useRouter();


const data = reactive({
    title: '鱼拿酸菜鱼',
    img: 'https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440',
    storeData: [
        {
            id:"001",//商店id
            name: "点菜",
            data: {
                content: "点菜",
                items: [
                    {
                        text: "热销套餐",//所属分类
                        children: [
                            {
                                img: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.cfcy168.com%2FUploadFiles%2F2020%2F2%2F15904074889874037.jpg&refer=http%3A%2F%2Fwww.cfcy168.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1645421933&t=66b58fbba9dce6f6b397e38820de24dc",
                                name: "隆江猪脚饭",
                                num: 0,
                                price: 25.0,
                                id: 0,//菜品id
                                add: true,
                            },
                            {
                                img: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.cfcy168.com%2FUploadFiles%2F2020%2F2%2F15904074889874037.jpg&refer=http%3A%2F%2Fwww.cfcy168.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1645421933&t=66b58fbba9dce6f6b397e38820de24dc",
                                name: "隆江猪脚饭",
                                num: 0,
                                price: 25.0,
                                id: 1,
                                add: true,
                            },
                        ],
                    },
                    {
                        text: "超级折扣",
                        children: [
                            {
                                img: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
                                name: "无骨酸菜鱼+肥牛双拼",
                                num: 0,
                                price: 25.0,
                                id: 5,
                                add: true,
                            },
                            {
                                img: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
                                name: "香辣水煮鱼+肥牛双拼",
                                num: 0,
                                price: 25.0,
                                id: 6,
                                add: true,
                            },
                        ],
                    },
                ],
            },
        },
        {
            name: "评价",
            data: {
                content: "评价",
            },
        },
        {
            name: "商家",
            data: {
                content: "商家",
            },
        },
    ],

})
store.commit('addStoreId',data.storeData[0].id);

let active = ref(0);
</script>

<style lang="less" scoped>
.store {
    animation-duration: 0.5s;
    height: 100%;
    display: flex;
    flex-flow: column;

    .content {
        flex: 1;
        overflow-y: auto;

        .img {
            background: url("../../assets/yuna.jpg") no-repeat center/cover;
            width: 100%;
            height: 150px;
        }

        .foodSort {
            height: 500px;
            background-color: #fff;
            margin-top: -30px;
            border-radius: 20px 20px 0 0;

            .sort {
                margin-top: 10px;
            }

            .name {
                display: flex;
                padding: 20px;
                justify-content: space-between;

                .store-img {
                    width: 80px;
                    height: 80px;
                    border-radius: 10px;
                    margin-top: -30px;
                }
            }
        }
    }
}
</style>