<template>
    <div class="cartList">
        <div class="content">
            <van-checkbox-group v-model="checked" ref="checkboxGroup">
                <van-checkbox  v-for="(item,index) in store.state.cart.goods" :name="index" :key="index" @click="store.commit('changeGoodsIsSelected',(item as any).id)">
                    <food-list-item :data="item" @click.stop=""></food-list-item>
                </van-checkbox>
            </van-checkbox-group>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, reactive, watch } from 'vue';
import { useStore } from 'vuex';
import FoodListItem from '../../../components/FoodListItem.vue';

const checked= ref([]);
const checkboxGroup = ref({});
const store = useStore();


(function init(){
    for(let i=0;i<store.state.cart.goods.length;i++)
    (checked.value as any).push(i);
})();

watch(checked,(newValue,oldValue)=>{
    console.log(store.state.cart.goods);
})



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
