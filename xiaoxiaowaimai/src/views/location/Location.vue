<template>
    <div id="container" style="width: 450px;height: 800px;"></div>
</template>

<script>
import AMapLoader from '@amap/amap-jsapi-loader';
export default {
    setup() {
        AMapLoader.load({
            "key": "8c99704423ff98dbbc8b81f2b0b11880",                                          // 申请好的Web端开发者Key，首次调用 load 时必填
            "version": "1.4.15",                                // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
            "plugins": [

            ],                                      // 需要使用的的插件列表，如比例尺'AMap.Scale'等
            "AMapUI": {                                         // 是否加载 AMapUI，缺省不加载
                "version": '1.1',                               // AMapUI 缺省 1.1
                "plugins": [],                                   // 需要加载的 AMapUI ui插件
            },
            "Loca": {                                            // 是否加载 Loca， 缺省不加载
                "version": '1.3.2'                              // Loca 版本，缺省 1.3.2
            },
        }).then((AMap) => {
            var map = new AMap.Map('container', {
                zoom: 16,                                        //级别
                center: [118.6313, 31.1375],                 //中心点坐标
                viewMode: '3D'                                   //使用3D视图
            });
            // 同时引入工具条插件，比例尺插件和鹰眼插件
            AMap.plugin([
                'AMap.ToolBar',
                'AMap.Scale',
                'AMap.OverView',
                'AMap.MapType',
                'AMap.Geolocation',

            ], function () {



                // 在图面添加工具条控件，工具条控件集成了缩放、平移、定位等功能按钮在内的组合控件
                map.addControl(new AMap.ToolBar());

                // 在图面添加比例尺控件，展示地图在当前层级和纬度下的比例尺
                map.addControl(new AMap.Scale());

                // 在图面添加鹰眼控件，在地图右下角显示地图的缩略图
                map.addControl(new AMap.OverView({ isOpen: true }));

                // 在图面添加类别切换控件，实现默认图层与卫星图、实施交通图层之间切换的控制
                map.addControl(new AMap.MapType());

                // 在图面添加定位控件，用来获取和展示用户主机所在的经纬度位置
                map.addControl(new AMap.Geolocation());
            });

            var marker1 = new AMap.Marker({
                position: new AMap.LngLat(118.6302, 31.1345),   // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
                title: '陶然餐厅'
            });
            var marker2 = new AMap.Marker({
                position: new AMap.LngLat(118.6291, 31.1387),   // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
                title: '陶然餐厅'
            });

            marker1.setLabel({
                offset: new AMap.Pixel(0, 0),  //设置文本标注偏移量
                content: "<div class='info'>陶然餐厅</div>", //设置文本标注内容
                direction: 'top' //设置文本标注方位
            });

            marker2.setLabel({
                offset: new AMap.Pixel(0, 0),  //设置文本标注偏移量
                content: "<div class='info'>耕耘、玉兔餐厅</div>", //设置文本标注内容
                direction: 'top' //设置文本标注方位
            });

            // 将创建的点标记添加到已有的地图实例：
            map.add(marker1);
            map.add(marker2);

            var geolocation = new AMap.Geolocation({
                // 是否使用高精度定位，默认：true
                enableHighAccuracy: true,
                // 设置定位超时时间，默认：无穷大
                timeout: 10000,
                // 定位按钮的停靠位置的偏移量，默认：Pixel(10, 20)
                buttonOffset: new AMap.Pixel(10, 20),
                //  定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
                zoomToAccuracy: true,
                //  定位按钮的排放位置,  RB表示右下
                buttonPosition: 'LB'
            })

            geolocation.getCurrentPosition()
            AMap.event.addListener(geolocation, 'complete', onComplete)
            AMap.event.addListener(geolocation, 'error', onError)

            function onComplete(data) {
                // data是具体的定位信息
                console.log(data);
            }

            function onError(data) {
                // 定位出错
            }

        }).catch(e => {
            // console.log(e);
        })
    },

}
</script>

<style>
.amap-demo {
    height: 300px;
}
</style>