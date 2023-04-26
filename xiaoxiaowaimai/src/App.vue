<script setup lang="ts">
import Footer from './components/Footer.vue';
import { useStore } from 'vuex';

const store=useStore();

store.commit('addCart',{storeId:'001',goods:{id:'11',name:'yu',img:'123.jpg',count:123,price:12}})
console.log(store.state.cart);
</script>

<template>
  <router-view></router-view>
</template>

<style scoped lang="less">

</style>
