<template>
  <div>
    <!-- 顶栏部分 -->
    <div class="top-bar">
      <h1>vue实验演示 <span>😍</span></h1>
      <div class="nav-buttons">
        <el-button @click="goDown" icon="el-icon-arrow-left" circle><-</el-button>
        <el-button @click="goUp" icon="el-icon-arrow-right" circle>-></el-button>
       
      </div>
      
    </div>
    

    <div class="home-container">
      <!-- 菜单部分 -->
      <el-menu
        default-active="1"
        class="menu"
        background-color="#f5f5f5"
        text-color="#555"
        active-text-color="#4285F4"
      >
        <el-menu-item index="1">
          <router-link to="/">Home</router-link>
        </el-menu-item>
        <el-menu-item index="2">
          <router-link to="/about">实验一</router-link>
        </el-menu-item>
        <el-menu-item index="3">
          <router-link to="/s2">实验二</router-link>
        </el-menu-item>
        <el-menu-item index="4">
          <router-link to="/CET6">CET-6</router-link>
        </el-menu-item>
        <el-menu-item index="5">
          <router-link to="/s3">实验三</router-link>
        </el-menu-item>
        <el-menu-item index="6">
          <router-link to="/s4">实验四</router-link>
        </el-menu-item>
        <el-menu-item index="7">
          <router-link to="/s5">实验五</router-link>
        </el-menu-item>
      </el-menu>

      <!-- 内容区域 -->
      <div class="content">
        
        <router-view>
        
        </router-view>
      </div>
    </div>
  </div>
</template>

<script setup>

import { useRouter } from 'vue-router';

const router = useRouter();

// 前进
const goUp = () => {
  router.go(1); // 前进到下一页
};

// 后退
const goDown = () => {
  router.go(-1); // 后退到上一页
};
</script>

<style>
/* 顶栏样式 */
/* 顶栏样式 */
.top-bar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #b0d4f1;
  color: #fff;
  text-align: center;
  padding: 10px 0;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  font-family: 'Arial', sans-serif;
}

.top-bar h1 {
  margin: 0;
  font-size: 24px;
}

.top-bar span {
  font-size: 24px;
}

/* 主体布局 */
.home-container {
  display: flex;
  min-height: 100vh;
  margin-top: 20px; /* 让内容避开顶部栏 */
}

/* 菜单样式 */
.menu {
  width: 200px; /* 固定宽度 */
  background-color: #f5f5f5;
  border-right: 1px solid #ddd;
}

/* 内容区域样式 */
.content {
  width: 800px; /* 固定宽度 */
  padding: 40px;
  background-color: #ffffff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  margin: 10px auto; /* 居中 */
}

.menu a {
  color: inherit;
  text-decoration: none;
}

h1, p {
  color: #333;
}

h1 {
  font-size: 26px;
  margin-bottom: 20px;
}

p {
  font-size: 16px;
}
/* 前进和后退按钮样式 */
.nav-buttons {
  position: absolute;
  top: 3px; /* 靠近页面顶部 */
  left: 10px; /* 靠近页面左侧 */
  display: flex;
  gap: 10px; /* 按钮间距 */
}

.nav-buttons .el-button {
  background-color: #4285F4;
  color: #fff;
  border: none;
  outline: none; /* 移除按钮默认边框 */
  box-shadow: none; /* 移除按钮阴影 */
}

.nav-buttons .el-button:focus {
  outline: none; /* 防止点击时出现黑色边框 */
  box-shadow: none; /* 防止点击时出现阴影 */
}

.nav-buttons .el-button:hover {
  background-color: #357ae8;
}

</style>
