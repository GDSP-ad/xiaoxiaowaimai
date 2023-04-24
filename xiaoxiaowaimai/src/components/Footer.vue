<template>
    <div class="footer">
        <div>
            <router-link to="/home" @click="change(0)">
                <van-icon :name="isSelected[0]?selectedIcons[0]:unselectedIcons[0]" ></van-icon>
                <div>首页</div>
            </router-link>
        </div>
        <div>
            <router-link to="/cart" @click="change(1)">
                <van-icon :name="isSelected[1]?selectedIcons[1]:unselectedIcons[1]" > </van-icon>
                <div>购物车</div>
            </router-link>
        </div>
        <div>
            <router-link to="/order" @click="change(2)">
                <van-icon :name="isSelected[2]?selectedIcons[2]:unselectedIcons[2]" ></van-icon>
                <div>订单</div>
            </router-link>
        </div>
        <div>
            <router-link to="/mine" @click="change(3)">
                <van-icon :name="isSelected[3]?selectedIcons[3]:unselectedIcons[3]"></van-icon>
                <div>我的</div>
            </router-link>
        </div>
    </div>
</template>


<script lang="ts" setup>
import {reactive} from 'vue'
const unselectedIcons:string[]=reactive(['wap-home-o','cart-o','orders-o','user-o'])
const selectedIcons:string[]=reactive(['wap-home','cart','balance-list','manager']);
const isSelected:boolean[]=reactive([true,false,false,false])


function change(index:number):void{
    isSelected.fill(false);
    isSelected[index]=true;
}

</script>

<style lang="less" scoped>
    .footer {
        display: flex;
        justify-content:space-around;
        text-align: center;
        background-color: white;
        div {
            color: black;
            van-icon {
                width: 0.8rem;
            }
            div {
                font-size: 0.5rem;
            }
        }
    }
</style>