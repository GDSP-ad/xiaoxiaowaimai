<template>
    <div class="footer">
        <div>
            <router-link to="/home" active-class="active">
                <van-icon name="wap-home-o" size="30px"></van-icon>
                <div>首页</div>
            </router-link>
        </div>
        <div>
            <router-link to="/cart" active-class="active">
                <van-icon name="cart-o" size="30px"> </van-icon>
                <div>购物车</div>
            </router-link>
        </div>
        <div>
            <router-link to="/order" active-class="active">
                <van-icon name="orders-o" size="30px"></van-icon>
                <div>订单</div>
            </router-link>
        </div>
        <div>
            <router-link to="/mine" active-class="active">
                <van-icon name="user-o" size="30px"></van-icon>
                <div>我的</div>
            </router-link>
        </div>
    </div>
</template>


<script lang="ts" setup>
import {reactive} from 'vue'



</script>

<style lang="less" scoped>
    .footer {
        display: flex;
        justify-content:space-around;
        text-align: center;
        background-color: white;
        div {
            color: black;
            div {
                font-size: 10px;
            }
            .active {
                color: #fff400;
                div {
                    color: #fff400;
                }
            }
        }
    }
</style>