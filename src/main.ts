import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// 导入路由
import router from './router'

// 创建根组件
const app = createApp(App)

// 挂载路由
app.use(router)
// 挂载根组件
app.mount('#app')
