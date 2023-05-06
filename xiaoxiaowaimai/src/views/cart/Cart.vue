<template>
    <div class="cart">
        <Header title="购物车"></Header>
        <CartList v-if="store.state.cart.goods.length"></CartList>
        <Empty v-else></Empty>
        <Footer></Footer>
    </div>
</template>

<script setup lang="ts">
import Header from '../../components/Header.vue';
import Footer from '../../components/Footer.vue';
import Empty from '../../components/Empty.vue';
import CartList from './components/CartList.vue'
import { useStore } from 'vuex';

const store=useStore();
</script>

<style scoped lang="less">
.cart {
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