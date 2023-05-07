<template>
    <div class="mine">
        <div class="content">

        </div>
        <Footer></Footer>
    </div>
</template>

<script setup lang="ts">
import Footer from '../../components/Footer.vue';
</script>

<style scoped lang="less">
.mine {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .content {
        background-color: red;
        width: 375px;
        flex: 1;
        overflow-y: auto;
    }
}
</style>