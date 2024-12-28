import { createApp } from 'vue'
import App from './App.vue'
import router from '../route/index'
import './style.css'

// 导入 Element Plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// 导入 Vant
import { Swipe, SwipeItem } from 'vant'
import 'vant/lib/index.css'


import axios from 'axios'; // 引入 axios
// 将 axios 挂载到 Vue 实例上，方便全局使用
const app = createApp(App);
app.config.globalProperties.$axios = axios;


// 使用 Element Plus
app.use(ElementPlus)
// 使用 Vant 组件
app.use(Swipe)
app.use(SwipeItem)

app.use(router)
app.mount('#app')