<template>
    <div v-for="(item,index) in props.navlist" :key="index"  class="item">
        <nav-list-item :data="item"></nav-list-item>

    </div>
</template>

<script setup lang="ts">
import NavListItem from './NavListItem.vue'

const props = defineProps(['navlist'])

</script>

<style lang="less" scoped>
.item:not(:first-child) {
    margin-top: 10px;
}
</style>