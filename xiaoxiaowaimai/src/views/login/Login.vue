<template>
  <div class="login">
    <Header title="登录"></Header>
    <div class="logo">小小外卖</div>
    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <van-field v-model="username" name="用户名" label="用户名" placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]" />
        <van-field v-model="password" type="password" name="密码" label="密码" placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]" />
      </van-cell-group>
      <div style="margin: 16px;">
        <van-button round block type="primary" color="#ffc400" native-type="submit">
          登录
        </van-button>
      </div>
      <div style="margin: 16px;">
        <van-button round block type="default" @click="router.push('/register')">
          注册
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script lang="ts" setup>
import Header from '../../components/Header.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { showToast } from 'vant';
import axios from 'axios'
const router = useRouter()
const store = useStore();

const username = ref('');
const password = ref('');

const onSubmit = (v: any) => {

  //跳转
  axios.post('/api/login.php', {
    username: username.value,
    password: password.value
  }).then(res => {
    if (res.data.code === 0)
      showToast({ message: '账号不存在', duration: 1000 });
    else if (res.data.code === 2) {
      showToast({ message: '账号或密码错误', duration: 1000 });
    } else {
      localStorage.setItem('isLogin','1');
      showToast({ message: '登录成功', duration: 1000 });
      axios.post('/api/user.php', {
        username: username.value
      }).then(res => {
        if(res.data.code===0){
          console.log(res.data.msg);
        }else
          store.commit('addUserInfo', res.data.data);

        axios.post('/api/address.php', {
          username: username.value
        }).then(res => {
          if (res.data.code === 0) {
            console.log(res.data.msg);
          } else {
            store.commit('clearAddressList');
            for (const i of res.data.data)
              store.commit('addAddress', i);
          }
        })
      })
    router.push('/home')
    }
  })



}


</script>

<style scoped lang="less">
.login {
  .logo {
    width: 250px;
    height: 250px;
    margin: 30px auto;
    border-radius: 40px;
    font-size: 95px;
    text-align: center;
    line-height: 125px;
    background-color: #ffc400;
  }

  .register {
    margin-top: 20px;
  }
}
</style>