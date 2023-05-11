<template>
    <div class="user-edit">
        <Header title="账号管理"></Header>
        <div>
            <van-form @submit="onSubmit">
                <van-cell-group inset>
                    <van-field v-model="username" name="username" label="新用户名" placeholder="请输入新用户名"
                        :rules="[{ required: true, message: '请填写新用户名' }]" />
                    <van-field v-model="password" type="password" name="密码" label="新密码" placeholder="请输入新密码"
                        :rules="[{ required: true, message: '请填写新密码' }]" />
                    <van-field v-model="nickname" name="nickname" label="新昵称" placeholder="请输入新昵称"
                        :rules="[{ required: true, message: '请填写新昵称' }]" />
                    <van-field v-model="sign" name="sign" label="新签名" placeholder="请输入新签名"
                        :rules="[{ required: true, message: '请填写新签名' }]" />
                </van-cell-group>
                <div style="margin: 16px;">
                    <van-button round block type="primary" color="#ffc400" native-type="submit">
                        确认修改
                    </van-button>
                </div>
                <div style="margin: 16px;">
                    <van-button round block type="default" @click="logout">
                        退出登录
                    </van-button>
                </div>
            </van-form>
        </div>
    </div>
</template>

<script lang="ts" setup>
import Header from '../../components/Header.vue';
import { ref } from 'vue';

const username=ref('');
const password=ref('');
const nickname=ref('');
const sign=ref('');

const onSubmit=(v:any)=>{

}

const logout=()=>{
    
}

</script>