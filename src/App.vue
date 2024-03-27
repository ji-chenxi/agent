<template >
  <p @click="login">去登录</p>
  <p @click="main">去主页</p>
  <!-- 路由显示区域 -->
  <RouterView></RouterView>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

//声明路由表
const router = useRouter()

const login = () => {
  //跳转到登录
  router.push('/happy')
}
const main = () => {
  //跳转到登录
  router.push('/main')
}

</script>

<style scoped>

</style>