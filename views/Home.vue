<template>
  <div>
    <!-- 顶栏部分 -->
    <div class="top-bar">
      <h1>vue实验演示 <span>😍</span></h1>
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
      </el-menu>

      <!-- 内容区域 -->
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style>
/* 顶栏样式 */
.top-bar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #b0d4f1; /* 使用柔和的浅蓝色背景 */
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
  margin-top: 60px; /* 让内容避开顶部栏 */
}

/* 菜单样式 */
.menu {
  width: 200px;
  background-color: #f5f5f5; /* 柔和的背景色 */
  border-right: 1px solid #ddd;
}

/* 内容区域样式 */
.content {
  width: 100%; /* 固定宽度 */
  height: 800px; /* 固定高度 */
  padding: 40px;
  background-color: #ffffff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05); /* 轻微阴影 */
  border-radius: 8px;
  margin: 10px auto; /* 居中 */
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
</style>
