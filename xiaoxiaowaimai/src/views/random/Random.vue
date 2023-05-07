<template>
    <div class="background-image">
      <div class="head">
        <h1>这顿饭吃什么？</h1>
  
        <el-button color="#FFAC06" :plain="true" @click="editPrizes" plain>编辑</el-button>
      </div>
  
      <div class="lucky">
        <LuckyWheel ref="myLucky" width="300px" height="300px" :prizes="prizes" :blocks="blocks" :buttons="buttons"
          @start="startCallback" @end="endCallback" />
      </div>
  
  
      <div class="edit" :style="active">
        <div v-for="prize in prizes" class="prize_item">
          <el-input class="edit_text" v-model="prize.fonts[0].text" clearable style="display: inline;"></el-input>
          <el-button class="edit_del" :plain="true" :data-index="prize" color="#409EFF"
            @click="delPrizes(prize, $event)">删除</el-button>
  
        </div>
        <div class="edit_bottom">
          <el-button class="edit_add" :plain="true" color="#909399" @click="addPrizes">添加</el-button>
          <el-button class="edit_save" :plain="true" color="#FFAC06" @click="savePrizes">保存</el-button>
        </div>
  
      </div>
    </div>
  </template>
  
  <script lang="js">
  
  import { ElMessage } from 'element-plus'
  export default {
    data() {
      return {
        blocks: [{ padding: '13px', background: '#ffe200' }],
        prizes: [
          { fonts: [{ text: '麻辣烫', top: '10%' }], background: '#F4F4F4' },
          { fonts: [{ text: '盖浇饭', top: '10%' }], background: '#F4F4F4' },
          { fonts: [{ text: '螺蛳粉', top: '10%' }], background: '#F4F4F4' },
          { fonts: [{ text: '拉面', top: '10%' }], background: '#F4F4F4' },
        ],
        buttons: [
          { radius: '50px', background: '#ffac06' },
          { radius: '45px', background: '#ffd900' },
          {
            radius: '40px', background: '#ffac06',
            pointer: true,
            fonts: [{ text: '开始', top: '-20px' }]
          },
        ],
        active: {
          display: 'none'
        }
      }
    },
    methods: {
      // 点击抽奖按钮会触发star回调
      startCallback() {
        //判断是否保存再开始抽奖
        if (this.active.display != 'none') {
          ElMessage({
            showClose: true,
            message: '请保存后再开始',
            type: 'warning',
          })
        } else {
          // 调用抽奖组件的play方法开始游戏
          this.$refs.myLucky.play()
          // 模拟调用接口异步抽奖
          setTimeout(() => {
            // 返回的中奖索引是数值长度的随机数
            const index = Math.floor(Math.random() * (this.prizes.length - 0) + 1)
            // 调用stop停止旋转并传递中奖索引
            this.$refs.myLucky.stop(index)
          }, 3000)
        }
  
  
      },
      // 抽奖结束会触发end回调
      endCallback(prize) {
        console.log(prize)
      },
      //显示编辑栏
      editPrizes() {
        this.active.display = ""
      },
      //添加选项
      addPrizes() {
        const prize = { fonts: [{ text: '', top: '10%' }], background: '#F4F4F4' }
        this.prizes.push(prize)
      },
      //删除选项
      delPrizes(item, event) {
        console.log(item, event.target?.dataset.index)
        const index = this.prizes.indexOf(item)
        console.log(index);
        this.prizes.splice(index, 1);
      },
      //保存编辑
      savePrizes() {
        //判断选项中是非有空选项
        let save_num=1
        for (let index = 0; index < this.prizes.length; index++) {
          if (this.prizes[index].fonts[0].text == '') {
            save_num = 0;
            break;
          } else {
            save_num = 1;
          }
        }
        if (save_num == 0) {
          ElMessage({
            showClose: true,
            message: '内容不能为空！',
            type: 'warning',
          })
        } else {
          this.active.display = "none"
          ElMessage({
            showClose: true,
            message: '保存成功',
            type: 'success',
          })
        }
  
      }
    }
  }
  </script>
  
  <style>
  .background-image {
    width: 86%;
    margin: 0 auto;
    padding-bottom: 20px;
    background-image: url('../../assets/bg.jpeg');
    background-size: 100% 100%;
    width: 450px;
    min-height: 850px;
    border-radius: 10px;
    box-shadow: 5px 5px 5px grey;
  }
  
  .head {
    margin-bottom: 120px;
    text-align: center;
  }
  
  .lucky {
    margin: 0 auto;
    width: 300px;
  }
  
  .edit {
    text-align: center;
    margin-top: 50px;
  }
  
  .prize_item {
    margin-bottom: 20px;
  }
  
  .edit_text {
    margin-right: 20px;
  }
  
  .edit_bottom {
    margin-top: 20px;
  }
  </style>