<template>
    <div class="cartList">
        <div class="content">
            <van-checkbox-group v-model="checked" ref="checkboxGroup">
                <van-checkbox name="a">复选框 a</van-checkbox>
                <van-checkbox name="b">复选框 b</van-checkbox>
                <van-checkbox name="c">复选框 c</van-checkbox>
            </van-checkbox-group>

            <van-button type="primary" @click="checkAll">全选</van-button>
            <van-button type="primary" @click="toggleAll">反选</van-button>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue';
import { useStore } from 'vuex';
import FoodListItem from '../../../components/FoodListItem.vue';

const checked = ref([]);
const checkboxGroup = ref({});
const store = useStore();
</script>

<style lang="less" scoped>
.cartList {
    font-size: 14px;
    flex: 1;
    position: relative;
    overflow-y: auto;
    padding: 20px 20px 55px;

    .submit-all {
        position: fixed;
        bottom: 48px;
    }

    .buy {
        position: fixed;
        bottom: 48px;
        right: 0;
        display: flex;
        justify-content: space-between;
        width: 100%;
        background-color: #fff;
        border-radius: 10px;
        height: 50px;
        align-items: center;
        padding: 0 16px;
        box-sizing: border-box;

        .left {
            display: flex;
            align-items: center;
        }

        .delete {
            color: #fff;
            background-color: #ffc400;
            border-radius: 20px;
            font-size: 14px;
            font-weight: 600;
            width: 110px;
            height: 40px;
            text-align: center;
            line-height: 40px;
        }
    }

    .content {
        padding: 10px;
        background-color: #fff;
        border-radius: 10px;
    }
}
</style>
