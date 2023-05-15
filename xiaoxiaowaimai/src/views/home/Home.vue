<template>
    <div class="home">
        <div class="content">
            <div class="header">
                <div class="text">
                    小小外卖
                </div>
                <div class="location" @click="router.push('/location')">
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
                    <div class="big-sort">
                        <div v-for="(item, index) in data.big_sort" :key="index">
                            <svg class="icon" aria-hidden="true">
                                <use :xlink:href="`#${item.icon}`"></use>
                            </svg>
                            {{ item.name }}
                        </div>
                    </div>
                    <div class="small-sort">
                        <div v-for="(item, index) in data.small_sort" :key="index">
                            <svg class="icon" aria-hidden="true">
                                <use :xlink:href="`#${item.icon}`"></use>
                            </svg>
                            {{ item.name }}
                        </div>
                    </div>

                </div>

                <van-skeleton title avatar :row="5" :loading="loading">
                    <div>
                        <van-tabs v-model:active="active" class="tabs">
                            <van-tab v-for="(item, index) in data.content_nav_list" :title="item.tab">
                                <NavList :navlist="item.data"></NavList>
                            </van-tab>
                        </van-tabs>
                    </div>
                </van-skeleton>

            </div>

        </div>
        <Footer></Footer>
    </div>
</template>


<script setup lang="ts">
import { reactive, ref } from 'vue';
import Footer from '../../components/Footer.vue';
import NavList from './components/NavList.vue'
import { useRouter } from 'vue-router';
import axios from 'axios';

const router = useRouter();

const active = ref(0);
const loading=ref(true);

setTimeout(()=>{
loading.value=false;
},5000);

const data = reactive({
    big_sort: [
        {
            name: "美食",
            icon: "icon-meishi",
        },
        {
            name: "甜点饮品",
            icon: "icon-tiandian",
        },
        {
            name: "超市便利",
            icon: "icon-chaoshigouwu",
        },
        {
            name: "生鲜果蔬",
            icon: "icon-shengxian-ganju",
        },
        {
            name: "买药",
            icon: "icon-zhichiyiyuanyaodian",
        },
    ],
    small_sort: [
        {
            name: "午餐",
            icon: "icon-wucan",
        },
        {
            name: "买酒",
            icon: "icon-jiu",
        },
        {
            name: "新鲜水果",
            icon: "icon-xinxianguoshu_xinxianshuiguopingguo",
        },
        {
            name: "汉堡披萨",
            icon: "icon-hanbaopisa",
        },
        {
            name: "休闲饮品",
            icon: "icon-xiuxianyinpin",
        },
        {
            name: "夜宵",
            icon: "icon-yexiao",
        },
        {
            name: "吐司",
            icon: "icon-tusi",
        },
        {
            name: "跑腿",
            icon: "icon-paotuiAPP",
        },
        {
            name: "美人佳丽",
            icon: "icon-kouhong",
        },
        {
            name: "全部分类",
            icon: "icon-fenlei",
        },
    ],
    content_nav_list: [
        {
            tab: "天天神券",
            data: [
                {
                    id:0,
                    pic: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
                    title: "酸菜鱼",
                    sales: "2888",
                    price: "20",
                    label: ["门店上新", "很下饭"],
                },
                {
                    id:1,
                    pic: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.cfcy168.com%2FUploadFiles%2F2020%2F2%2F15904074889874037.jpg&refer=http%3A%2F%2Fwww.cfcy168.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1645421933&t=66b58fbba9dce6f6b397e38820de24dc",
                    title: "隆江猪脚饭",
                    sales: "2888",
                    price: "20",
                    label: ["门店上新", "很下饭"],
                },
                {
                    id:2,
                    pic: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
                    title: "酸菜鱼",
                    sales: "2888",
                    price: "20",
                    label: ["门店上新", "很下饭"],
                },
                {
                    pic: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
                    title: "酸菜鱼",
                    sales: "2888",
                    price: "20",
                    label: ["门店上新", "很下饭"],
                },
            ],
        },
        {
            tab: "减配送费",
            data: [
                {
                    pic: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
                    title: "酸菜鱼",
                    sales: "2888",
                    price: "20",
                    label: ["门店上新", "很下饭"],
                },
            ],
        },
        {
            tab: "点评高分",
            data: [
                {
                    pic: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
                    title: "酸菜鱼",
                    sales: "2888",
                    price: "20",
                    label: ["门店上新", "很下饭"],
                },
                {
                    pic: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
                    title: "酸菜鱼",
                    sales: "2888",
                    price: "20",
                    label: ["门店上新", "很下饭"],
                },
            ],
        },
        {
            tab: "会员满减",
            data: [
                {
                    pic: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
                    title: "酸菜鱼",
                    sales: "2888",
                    price: "20",
                    label: ["门店上新", "很下饭"],
                },
                {
                    pic: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
                    title: "酸菜鱼",
                    sales: "2888",
                    price: "20",
                    label: ["门店上新", "很下饭"],
                },
            ],
        },
    ],
});


(function init(){


    axios.post('/api/home.php').then(res=>{
        if(res.data.code===0){
            console.log(res.data.msg);
        }else{
            const data1:any[]=res.data.data;
            let  content_nav_list=[{tab:'天天神券',data:[]},{tab:'减配送费',data:[]},{tab:'点评高分',data:[]},{tab:'会员满减',data:[]}];
            data1.forEach(v=>{
                for(let i=0;i<content_nav_list.length;i++){
                    if(content_nav_list[i].tab==v.tab){
                        (content_nav_list[i].data as any).push({
                            id:v.id,
                            pic:v.img,
                            title:v.name,
                            sales:v.sales,
                            price:v.price,
                            label:[v.label1,v.label2]
                        })
                        break;
                    }
                }
            })
            data.content_nav_list=content_nav_list;
            loading.value=false;
        }
        
        
    })
})();

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
            background-image: linear-gradient(#fff400, #fff);
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
                background-image: linear-gradient(#fff, #f5f5f5);
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

            .sort {
                padding: 20px 0;

                .big-sort {
                    display: flex;

                    div {
                        display: flex;
                        flex: 1;
                        justify-content: center;
                        flex-direction: column;
                        align-items: center;

                        .icon {
                            width: 50px;
                            height: 50px;
                            margin-bottom: 5px;
                        }

                        font-size: 14px;
                    }
                }

                .small-sort {
                    display: flex;
                    flex-wrap: wrap;
                    margin-top: 20px;

                    div {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        width: 20%;
                    }

                    .icon {
                        width: 30px;
                        height: 30px;
                    }

                    font-size: 14px;
                }
            }

            .tabs {
                padding: 0 20px 10px;
            }


        }
    }
}
</style>