import './style.css'
import 'animate.css/animate.min.css'
import 'amfe-flexible'
import 'vant/lib/index.css'


import router from './router/index'
import store from './store/index'

import { createApp } from 'vue'
import App from './App.vue'


const app=createApp(App)
app.use(router)
app.use(store)
app.mount('#app');
