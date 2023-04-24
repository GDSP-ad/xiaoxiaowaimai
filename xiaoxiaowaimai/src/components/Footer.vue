<template>
    <div class="footer">
        <div>
            <router-link to="/home" active-class="active">
                <van-icon name="wap-home-o" ></van-icon>
                <div>首页</div>
            </router-link>
        </div>
        <div>
            <router-link to="/cart" active-class="active">
                <van-icon name="cart-o"> </van-icon>
                <div>购物车</div>
            </router-link>
        </div>
        <div>
            <router-link to="/order" active-class="active">
                <van-icon name="orders-o" ></van-icon>
                <div>订单</div>
            </router-link>
        </div>
        <div>
            <router-link to="/mine" active-class="active">
                <van-icon name="user-o"></van-icon>
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
            van-icon {
                width: 0.8rem;
            }
            div {
                font-size: 0.5rem;
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