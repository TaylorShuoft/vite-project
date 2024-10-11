// src/route/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/实验一.vue'
import S2 from '../views/实验二.vue'

const routes = [
  {
    path: '/',
    component: Home,
    children: [
      {
        path: 'about', // 实验一的子路由路径
        component: About
      },
      {
        path: 's2', // 实验二的子路由路径
        component: S2
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
