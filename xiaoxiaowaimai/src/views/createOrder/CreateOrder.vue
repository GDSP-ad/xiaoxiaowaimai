<template>
    <div class="create-order">
        <Header title="生成订单"></Header>
        <div class="content">
            <van-contact-card type="edit" :tel="tel" :name="name" @click="onEdit" />
            <div v-for="(item, index) in store.state.order.goods">
                <van-card :num="(item as any).count" :price="(item as any).price" :title="(item as any).name"
                    :thumb="(item as any).img" />
            </div>
        </div>

        <div class="pay-wrap">
            <div class="price">
                <span>商品金额</span>
                <span>￥{{ store.state.order.price }}</span>
            </div>
            <van-button type="primary" class="pay-btn" block  color="#ffc400" >生成订单</van-button>
        </div>
    </div>
</template>

<script lang="ts" setup>
import Header from '../../components/Header.vue';
import { ref } from 'vue'
import { useStore } from 'vuex';

const store = useStore();

const tel = ref('1231232131');
const name = ref('张三')
function onEdit() {

}
</script>


<style lang="less" scoped>
.create-order {
    display: flex;
    flex-flow: column;
    height: 100%;

    .content {
        flex: 1;
        overflow-y: auto;
    }

    .pay-wrap {
        padding: 10px 0;
        width: 100%;
        background: #fff;
        border-top: 1px solid #e9e9e9;

        >div {
            display: flex;
            justify-content: space-between;
            padding: 0 5%;
            margin: 10px 0;
            font-size: 14px;

            span:nth-child(2) {
                color: red;
                font-size: 18px;
            }
        }

        .pay-btn {
            width: 90%;
            margin: 0 auto;
        }
    }
}
</style>