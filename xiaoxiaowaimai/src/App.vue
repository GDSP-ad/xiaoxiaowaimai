<script setup lang="ts">
import Footer from './components/Footer.vue';
</script>

<template>
  <div class="container">
    <div class="content">
      <router-view></router-view>
    </div>
  <Footer></Footer>
  </div>
  
  
</template>

<style scoped lang="less">
  .container {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    Footer {
      z-index: 100;
    }
  }
</style>
