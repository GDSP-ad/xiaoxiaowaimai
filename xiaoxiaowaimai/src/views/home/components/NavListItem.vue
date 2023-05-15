<template>
<div class="item" @click="toStore">
    <img :src="data.pic" alt="">
    <div class="item-right">
        <div class="title">{{ data.title }}</div>
        <div class="sales">月销量:{{ data.sales }}</div>
        <div class="price">平均消费:{{ data.price }}</div>
        <div class="label">
            <div v-for="(item,index) in data.label" :key="index">{{ item }}</div>
        </div>
    </div>
</div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import {useStore} from 'vuex';
const props=defineProps(['data'])
const router=useRouter();
const store=useStore();

function toStore():void {
    store.commit('addStoreId',props.data.id);
    router.push('/store');
}

</script>

<style lang="less" scoped>
.item {
    background-color: #fff;
    border-radius: 10px;
    display: flex;
    padding: 10px;

    img {
        width: 120px;
        height: 120px;
        border-radius: 10px;
        margin-right: 20px;
    }

    .item-right {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .title {
            font-size: 20px;
        }

        .sales {
            font-size: 15px;
        }

        .price {
            font-size: 13px;
        }
        .label {
            font-size: 12px;
            color: #fff;
            display: flex;
            div {
                background-color: #ffc400;
                padding: 2px 5px ;
                border-radius: 5px;
            }
            div:not(:first-child) {
                margin-left: 5px;
            }
        }
    }
}


</style>
