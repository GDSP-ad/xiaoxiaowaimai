<template>
    <div class="cart">
        <Header title="购物车"></Header>
        <CartList v-if="store.state.cart.goods.length"></CartList>
        <Empty v-else></Empty>
        <van-submit-bar v-if="store.state.cart.goods.length" :price="store.getters.priceTotal*100" button-color="#ffc400" button-text="提交订单" @submit="onSubmit" class="submit"/>
        <Footer></Footer>
    </div>
</template>

<script setup lang="ts">
import Header from '../../components/Header.vue';
import Footer from '../../components/Footer.vue';
import Empty from '../../components/Empty.vue';
import CartList from './components/CartList.vue'
import { useStore } from 'vuex';
import { showFailToast } from 'vant';
import { useRouter } from 'vue-router';
const store=useStore();
const router=useRouter();

function onSubmit(){
    if(store.getters.priceTotal===0)
        showFailToast('请选择商品');
    else{
        store.commit('addOrder',store.getters.priceTotal);
        router.push('/createOrder')
    }
        
}

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

    .submit {
        position: fixed;
        bottom: 50px;
    }
}
</style>