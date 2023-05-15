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
import { showToast } from 'vant';
import axios from 'axios';
import { useRouter } from 'vue-router';
const username=ref('');
const password=ref('');
const passwordAgain=ref('');

const router=useRouter()

const onSubmit=(v:any)=>{
    if(password.value!==passwordAgain.value){
        showToast({message:'两次输入的密码不一致',duration:1000});
    }else{
        axios.post('/api/register.php',v).then(res=>{
            if(res.data.code===0)
                showToast({message:'账号已存在！',duration:1000});
            else{
                showToast({message:'注册成功',duration:300});
                router.push('/login');
            }
        })
    }
}

</script>