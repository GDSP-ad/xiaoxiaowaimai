import './style.css'
import 'animate.css/animate.min.css'
import 'amfe-flexible'
import 'vant/lib/index.css'


import router from './router/index'
import store from './store/index'

import { createApp } from 'vue'
import App from './App.vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import VueLuckyCanvas from '@lucky-canvas/vue'

const app=createApp(App)
app.use(router)
app.use(store)
app.use(ElementPlus)
app.use(VueLuckyCanvas);
app.mount('#app');
