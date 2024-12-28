<template>
  <div>
    <nav class="navbar">
      <router-link to="/s5/all" class="nav-item">全部</router-link>
      <router-link to="/s5/blogs" class="nav-item">博客</router-link>
      <router-link to="/s5/games" class="nav-item">游戏</router-link>
    </nav>
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: '实验五',
};
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: center;
  background-color: #f1f1f1;
  padding: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.nav-item {
  margin: 0 20px;
  text-decoration: none;
  color: #333;
  font-weight: bold;
  font-size: 18px;
  transition: color 0.3s ease;
}
.nav-item:hover {
  color: #0073e6;
}
.content {
  padding: 20px;
}
</style>
