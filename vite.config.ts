import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      '/api': {// 配置需要代理的路径 --> 这里的意思是代理http://localhost:80/api/后的所有路由
        target: 'https://ji-chenxi.github.io/agent/',// 目标地址 --> 服务器地址
        changeOrigin: true,// 允许跨域
      },
    }
  }
})
