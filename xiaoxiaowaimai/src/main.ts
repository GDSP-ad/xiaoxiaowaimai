import { createApp } from 'vue'
import 'animate.css/animate.min.css'
import './style.css'
import 'amfe-flexible'
import App from './App.vue'
import router from './router/index'

import 'vant/lib/index.css'


const app=createApp(App)
app.use(router)

app.mount('#app');
