<template>
  <div class="home-container">
    <el-menu
      default-active="1"
      class="menu"
      background-color="#f4f4f4"
      text-color="#333"
      active-text-color="#409EFF"
    >
      <el-menu-item index="1">
        <router-link to="/">Home</router-link>
      </el-menu-item>
      <el-menu-item index="2">
        <router-link to="/about">About</router-link>
      </el-menu-item>
    </el-menu>
    <div class="content">
      <h1>Home Page</h1>
      <p>Welcome to the home page!</p>
    </div>
  </div>
</template>

<script setup>
</script>

<style>
.home-container {
  display: flex;
}

.menu {
  width: 200px;
  height: 100vh;
}

.content {
  flex: 1;
  padding: 20px;
}
</style>
