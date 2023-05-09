<template>
    <Header title="地址编辑"></Header>
    <van-address-edit :area-list="areaList" show-delete show-set-default :address-info="editAddressInfo"
        :area-columns-placeholder="['请选择', '请选择', '请选择']" @save="onSave" @delete="onDelete"/>
</template>

<script setup lang="ts">
import Header from '../../components/Header.vue';
import { ref } from 'vue'
import { areaList } from '@vant/area-data';
import { useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { showToast } from 'vant';
const route = useRoute();
const router = useRouter();
const store = useStore();

const { id } = route.query;

const editAddressInfo = ref();

function onDelete(){
    if(id){
        store.commit('deleteAddress',parseInt(id as string));
    }
    router.back();
}

function onSave(val: any) {
    if (id) {
        store.commit('changeAddress', {
            id: parseInt(id as string),
            name: val.name,
            tel: val.tel,
            isDefault: val.isDefault,
            province: val.province,
            city: val.city,
            county: val.county,
            addressDetail: val.addAddress,//详细地址
            areaCode: val.areaCode,//地区编码
        })
    } else {
        store.commit('addAddress', {
            id: store.state.userInfo.addressList.length,
            name: val.name,
            tel: val.tel,
            isDefault: val.isDefault,
            province: val.province,
            city: val.city,
            county: val.county,
            addressDetail: val.addressDetail,//详细地址
            areaCode: val.areaCode,//地区编码
        })
    }
    router.back();
}



(function init() {
    if (id) {
        editAddressInfo.value = store.state.userInfo.addressList[parseInt(id as string)];
    }
})();


</script>