<template>
    <div class="home">
        <div class="content">
            <div class="header">
                <div class="text">
                    小小外卖
                </div>
                <div class="location">
                    <van-icon name="location-o"></van-icon>
                    <span>位置</span>
                    <van-icon name="arrow"></van-icon>
                </div>
            </div>

            <div class="main">
                <div class="main-bg">
                    <div class="search">
                        <input type="text">
                        <div class="search-text">搜索</div>
                    </div>
                </div>

                <div class="sort">
                    <div class="big-sort"></div>
                    <div class="small-sort"></div>
                </div>
            </div>

        </div>
        <Footer></Footer>
    </div>
</template>


<script setup lang="ts">
import Footer from '../../components/Footer.vue';
</script>

<style lang="less" scoped>
.home {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .content {
        flex: 1;
        overflow-y: auto;
        .header {
            background-image: linear-gradient(#fff400,#fff);
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20px 20px 40px 20px;
            .text {
                font-size: 20px;
                font-weight: 600;
            }
            .location {
                font-size: 14px;
                span {
                    margin: 0 5px;
                }
            }
        }

        .main {
            margin-top: -30px;
            .main-bg {
                background-image: linear-gradient(#fff,#f5f5f5);
                padding: 10px 20px 0 20px;
                border-radius: 30px 30px 0 0;
                .search {
                    position: relative;
                    input {
                        width: 100%;
                        border: 1px solid #ffc400;
                        border-radius: 20px;
                        height: 30px;
                    }
                    .search-text {
                        position: absolute;
                        right: -6px;
                        top: 1px;
                        background-color: #ffc400;
                        border-radius: 16px;
                        width: 50px;
                        height: 32px;
                        line-height: 32px;
                        font-size: 14px;
                        text-align: center;
                    }
                }
            }
        }
    }
}
</style>