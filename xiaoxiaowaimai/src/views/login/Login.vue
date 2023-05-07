<template>
    <div class="box" :style="active_1">
      <div class="header">
        <h1>小外<br>小卖</h1>
      </div>
      <div class="container">
        <form @submit.prevent="login">
          <div>
            <label for="">昵&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;称：</label>
            <input type="text" v-model="username">
          </div>
          <div>
            <label for="">密&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;码：</label>
            <input type="password" v-model="password">
          </div>
          <button>登录</button>
        </form>
        <button @click="goReg">去注册</button>
      </div>
    </div>
    <div class="big" :style="active_2">
      <div class="header">
        <h1>小外<br>小卖</h1>
      </div>
      <div class="container">
        <form @submit.prevent="register">
          <div>
            <label for="">昵&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;称：</label>
            <input name="regUserName" type="text" v-model="regusername">
          </div>
          <div>
            <label for="">密&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;码：</label>
            <input name="regPwd" type="password" v-model="regpwd">
          </div>
          <div>
            <label for="">确认密码：</label>
            <input name="reRegPwd" type="password" v-model="reregpwd">
          </div>
          <button>注册</button>
        </form>
        <button @click="goLogin">去登录</button>
      </div>
    </div>
  </template>
  <script>
  export default {
    data() {
      return {
        username: "",
        password: "",
        regusername: '',
        regpwd: '',
        reregpwd: '',
        active_1: {
  
        },
        active_2: {
          display: "none"
        }
      }
    },
    methods: {
      register() {
        if (this.regusername == "admin" && this.regpwd == this.reregpwd && this.regpwd == "123") {
          alert("注册成功");
        } else {
          alert("昵称或密码错误");
        }
      },
      goLogin() {
        this.active_1 = {}
        this.active_2 = { display: "none" };
  
      },
      login() {
        if (this.username == "admin" && this.password == "123") {
          this.$router.push("/index.vue")
        } else {
          alert("昵称或密码错误");
        }
      },
      goReg() {
        this.active_1 = { display: "none" };
        this.active_2 = {};
      }
    }
  }
  </script>
  <style>
  .header {
    width: 300px;
    height: 300px;
    border-radius: 20px;
    background-color: rgb(249, 205, 8);
    color: white;
    font-size: 45px;
    text-align: center;
  }
  .container {
    margin-top: 40px;
    margin-left: 25px;
  }
  button{
  width:200px;
  height: 30px;
  margin-top: 10px;
  margin-left: 40px;
  background-color:  rgb(249, 205, 8);
  border-radius: 5px;
  border: 0px;
  }
  /* .container button:nth-child(2){
  width:200px;
  height: 30px;
  margin-top: 10px;
  margin-left: 40px;
  background-color:  rgb(249, 205, 8);
  border-radius: 5px;
  border: 0px;
  } */
  </style>