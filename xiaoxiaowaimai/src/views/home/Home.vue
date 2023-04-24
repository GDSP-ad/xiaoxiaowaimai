<template>
    <div class="home">
        <div class="content"></div>
        <Footer></Footer>
    </div>
</template>


<script setup lang="ts">
import Footer from '../../components/Footer.vue';
</script>

<style lang="less" scoped>
.home {
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