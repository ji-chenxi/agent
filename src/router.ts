import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
     //一级路由
     {
        path: '/happy',
        component: () => import('./views/happy.vue'),
      },
    {
      path: '/main',
      component: () => import('./views/Main.vue'),
    },
    //路由重定向
    {
      path: '/',
      redirect: '/main'
    },
  ]
})
// //to：要去的路由
// //from：当前的路由
// router.beforeEach((to, from) => {

//     // 返回 false 不让页面跳转
//     // 返回 true 允许页面跳转
//     return false
//   })

export default router