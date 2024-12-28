import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/实验一.vue'
import S2 from '../views/实验二.vue'
import CET6 from '../views/CET-6.vue'
import S3 from '../views/实验三.vue'
import s3_comp_use from '../src/comp/Experiment3/ComponentUse.vue'
import s3_Global_comp from '../src/comp/Experiment3/GlobalComponent.vue'
import s3_Local_comp from '../src/comp/Experiment3/LocalComponent.vue'
import S4 from '../views/实验四.vue'
import s4_sub_l from '../src/comp/step4_sub_left.vue'
import s4_sub_r from '../src/comp/step4_sub_right.vue'

import S5 from '../views/实验五.vue'
import All from '../src/comp/Experiment5/All.vue'; // 全部页面
import Blogs from '../src/comp/Experiment5/Blogs.vue'; // 博客页面
import Games from '../src/comp/Experiment5/Games.vue'; // 游戏页面

import S6 from '../views/实验六.vue';
import S7 from '../views/实验七.vue';

import Admin from '../views/Admin.vue' // 管理员页面的导入

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
      },
      {
        path: 'cet6', // CET-6的子路由路径
        component: CET6
      },
      {
        path: 's3', // 实验三的子路由路径
        component: S3,
        children: [
          {
            path: 'comp_use', // 实验三的 ComponentUse 子路由
            component: s3_comp_use
          },
          {
            path: 'global_comp', // 实验三的 GlobalComponent 子路由
            component: s3_Global_comp
          },
          {
            path: 'local_comp', // 实验三的 LocalComponent 子路由
            component: s3_Local_comp
          }
        ]
      },
      {
        path: 's4', // 实验四的子路由路径
        component: S4,
        children: [
          {
            path: 's4_sub_l', // 实验四的左侧子路由路径
            component: s4_sub_l
          },
          {
            path: 's4_sub_r', // 实验四的右侧子路由路径
            component: s4_sub_r
          }
        ]
      },
      {
        path: 's5', // 实验五的子路由路径
        component: S5,
        children: [
          {
            path: 'all', // 全部的子路由
            component: All,
          },
          {
            path: 'blogs', // 博客的子路由
            component: Blogs,
          },
          {
            path: 'games', // 游戏的子路由
            component: Games,
          },
        ]
      },
      {
        path: 's6', // 实验六的路由路径
        component: S6,
       
      },
      {
        path: 's7', // 实验七的路由路径
        component: S7,
      },
      {
        path: 'admin', // 管理员的路由路径
        component: Admin // 管理员页面组件
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
