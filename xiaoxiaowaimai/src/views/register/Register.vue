<template>
    <div class="register">
        <Header title="注册"></Header>
        <van-form @submit="onSubmit">
            <van-cell-group inset>
                <van-field v-model="username" name="account" label="用户名" placeholder="用户名"
                    :rules="[{ required: true, message: '请填写用户名' }]" />
                <van-field v-model="password" type="password" name="password" label="密码" placeholder="密码"
                    :rules="[{ required: true, message: '请填写密码' }]" />
                <van-field v-model="passwordAgain" type="password" name="passwordAgain" label="再次填写密码" placeholder="再次填写密码"
                    :rules="[{ required: true, message: '请再次填写密码' }]" />
            </van-cell-group>
            <div style="margin: 16px;">
                <van-button round block type="primary" color="#ffc400" native-type="submit">
                    注册
                </van-button>
            </div>
        </van-form>
    </div>
</template>

<script lang="ts" setup>
import Header from '../../components/Header.vue'
import { ref } from 'vue';

const username=ref('');
const password=ref('');
const passwordAgain=ref('');

const onSubmit=(v:any)=>{
    console.log(v);
}

</script>