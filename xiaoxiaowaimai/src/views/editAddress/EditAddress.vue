<template>
    <Header title="地址编辑"></Header>
    <van-address-edit :area-list="areaList" show-delete show-set-default :address-info="editAddressInfo"
        :area-columns-placeholder="['请选择', '请选择', '请选择']" @save="onSave" @delete="onDelete" />
</template>

<script setup lang="ts">
import Header from '../../components/Header.vue';
import { ref } from 'vue'
import { areaList } from '@vant/area-data';
import { useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { showToast } from 'vant';
import axios from 'axios';
const route = useRoute();
const router = useRouter();
const store = useStore();

const { id } = route.query;

const editAddressInfo = ref();

function onDelete() {
    if (id) {
        axios.post('/api/address_delete.php',{username:store.state.userInfo.username,id}).then(res=>{
            if(res.data.code==1){
                showToast({message:'删除成功',duration:300});
                store.commit('deleteAddress', parseInt(id as string));
            }else{
                showToast({message:'删除失败',duration:300});
            }
        })
        
    }
    router.back();
}

function onSave(val: any) {
    if (id) {
        const data = {
            id: parseInt(id as string),
            name: val.name,
            tel: val.tel,
            isDefault: val.isDefault ? 1 : 0,
            province: val.province,
            city: val.city,
            county: val.county,
            addressDetail: val.addAddress,//详细地址
            areaCode: val.areaCode,//地区编码
            username: store.state.userInfo.username
        }
        axios.post('/api/address_update.php', { ...data }).then(res => {
            if (res.data.code==1){
                showToast({message:'修改成功',duration:300});
                store.commit('changeAddress', data)
                router.back();
            }else{
                showToast({message:'修改失败',duration:300});
            }
        })
        
    } else {
        const data = {
            id: store.getters.nweAddressId,
            name: val.name,
            tel: val.tel,
            isDefault: val.isDefault ? 1 : 0,
            province: val.province,
            city: val.city,
            county: val.county,
            addressDetail: val.addressDetail,//详细地址
            areaCode: val.areaCode,//地区编码
            username: store.state.userInfo.username
        }

        axios.post('/api/address_add.php', {
            ...data
        }).then(res => {
            if (res.data.code == 1) {
                showToast({ message: '添加成功', duration: 300 });
                store.commit('addAddress', data);
                router.back();
            } else {
                showToast({ message: '添加失败', duration: 300 });
            }

        })

    }
    
}



(function init() {
    if (id) {
        editAddressInfo.value = store.state.userInfo.addressList[parseInt(id as string)];
    }
})();


</script>