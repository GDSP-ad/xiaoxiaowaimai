<template>
    <div class="order">
        <Header title="订单"></Header>
        <div class="content">
            <van-tabs v-model:active="active">
                <van-tab title="全部">
                    <div v-for="(item, index) in store.state.order.goods">
                        <van-card :num="(item as any).count" :price="(item as any).price" :title="(item as any).name"
                            :thumb="(item as any).img" />
                    </div>
                </van-tab>
                <van-tab title="待完成">内容 3</van-tab>
                <van-tab title="已完成">内容 2</van-tab>
                <van-tab title="待评价">内容 2</van-tab>
                <van-tab title="已评价">内容 4</van-tab>
            </van-tabs>
        </div>
        <Footer></Footer>
    </div>
</template>

<script setup lang="ts">
import Header from '../../components/Header.vue';
import Footer from '../../components/Footer.vue';
import { ref } from 'vue';
import { useStore } from 'vuex';

const store=useStore();
const active = ref(0);

</script>

<style scoped lang="less">
.order {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .content {
        flex: 1;
        overflow-y: auto;
    }
}
</style>