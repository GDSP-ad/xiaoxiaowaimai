<template>
    <div class="content-item">
        <div class="left">
            <img :src="props.data.img" alt="">
            <div class="text">
                <div class="title">{{ props.data.name }}</div>
                <van-stepper min="0" v-if="isSelect" v-model="count"></van-stepper>
                <van-icon name="add-o" @click="isSelect = true" v-if="!isSelect"></van-icon>
            </div>
        </div>

        <div class="price">￥{{ props.data.price }}</div>
    </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const props = defineProps(['data'])


let isSelect = ref(false);
let count = ref(0);

watch(count, (newCount, oldCount) => {
    if (newCount === 0) {
        isSelect.value = false;
        store.commit('reduceGoods',props.data.id)
    }
    if (isSelect.value) {
        store.commit('addGoods', {
            id: props.data.id,
            name: props.data.name,
            img: props.data.img,
            count: count.value,
            price: props.data.price
        })
    }
    console.log(store.state.cart.goods)
})

watch(isSelect, (newValue, oldValue) => {
    if(isSelect.value)
        count.value=1;
})


</script>

<style lang="less" scoped>
.content-item {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;

    .price {
        font-size: 16px;
        font-weight: 600;
    }

    .left {
        display: flex;
        align-items: center;
        flex: 1;

        img {
            margin-left: 10px;
            width: 60px;
            height: 60px;
            margin-right: 10px;
            border-radius: 10px;
        }

        .text {
            display: flex;
            flex-flow: column;
            justify-content: space-between;
            height: 100%;
            position: relative;
            flex: 1;

            .title {
                font-size: 16px;
            }

            .van-icon {
                color: red;
                font-size: 20px;
                position: absolute;
                right: 4px;
                bottom: 4px;
            }
        }
    }
}
</style>