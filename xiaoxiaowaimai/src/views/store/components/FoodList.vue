<template>
    <div class="food-list" >
        <van-tree-select v-model:main-active-index="data.activeIndex" height="300px" :items="items">
            <template #content>
                <div class="item-bg" v-for="(item, index) in props.foodData[data.activeIndex].children"
                    :key="(item as any).id">
                    <food-list-item :data="item"></food-list-item>
                </div>

            </template>
        </van-tree-select>
    </div>
</template>

<script lang="ts" setup>
import { reactive, ref, watch,computed } from 'vue';
import FoodListItem from '../../../components/FoodListItem.vue'



const props = defineProps(['index', 'foodData'])

const items=computed(()=>{
    let a=[];
    for (let i = 0; i < props.foodData.length; i++) {
        a.push({ text: props.foodData[i].text })
    }
    return a;
})

const data = reactive({
    activeIndex: 0,
});






</script>

<style lang="less" scoped>
.food-list {
    margin-top: 20px;

    .item-bg {
        padding: 10px;
    }
}
</style>

