<template>
    <Header title="地址管理"></Header>
    <van-address-list v-model="chosenAddressId" :list="list" default-tag-text="默认" @add="onAdd" @edit="onEdit" />
</template>

<script lang="ts" setup>
import Header from '../../components/Header.vue';
import { ref,watch } from 'vue';
import { useStore } from 'vuex';
import {useRouter} from 'vue-router'
const store=useStore();
const router=useRouter();

const chosenAddressId=ref(store.state.userInfo.chosenAddressId);
watch(chosenAddressId,(newValue,oldValue)=>{
    store.commit('changeChosenAddressId',newValue);
})
const list=store.state.userInfo.addressList;

function onAdd(){
    router.push('/editAddress');
}

function onEdit(){
    router.push({ name: 'editAddress',query: { id: chosenAddressId.value } })
}

</script>