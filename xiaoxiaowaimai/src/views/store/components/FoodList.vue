<template>
    <div class="food-list">
        <van-tree-select v-model:main-active-index="data.activeIndex" height="300px" :items="data.items" >
            <template #content>
                <div class="item-bg" v-for="(item,index) in props.foodData.items[data.activeIndex].children" :key="(item as any).id">
                    <food-list-item :data="item"></food-list-item>
                </div>
                
            </template>
        </van-tree-select>
    </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';
import FoodListItem from '../../../components/FoodListItem.vue'

const props = defineProps(['index', 'foodData'])

const items: any = reactive([]);

for (let i = 0; i < props.foodData.items.length; i++) {
    items.push({ text: props.foodData.items[i].text })
}

const data = reactive({
    activeIndex: 0,
    items
})
</script>

<style lang="less" scoped>
.food-list {
    margin-top: 20px;

    .item-bg {
        padding: 10px;
    }
}
</style>

