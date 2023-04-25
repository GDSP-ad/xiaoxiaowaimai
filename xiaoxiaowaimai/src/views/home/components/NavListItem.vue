<template>
<div class="item">
    <img :src="data.pic" alt="">
    <div class="item-right">
        <div class="title">{{ data.title }}</div>
        <div class="sales">{{ data.sales }}</div>
        <div class="price">{{ data.price }}</div>
        <div class="label">
            <div v-for="(item,index) in data.label" :key="index">{{ item }}</div>
        </div>
    </div>
</div>
</template>

<script setup lang="ts">

const props=defineProps(['data'])
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
            font-size: 18px;
        }

        .label {
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