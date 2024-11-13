<template>
    <div class="experiment">
      <!-- Box 1: GlobalComponent -->
      <div class="box">
        <h3>题目 1: GlobalComponent</h3>
        <hr />
        <router-view name="box1"></router-view>
      </div>
  
      <!-- Box 2: LocalComponent -->
      <div class="box">
        <h3>题目 2: LocalComponent</h3>
        <hr />
        <router-view name="box2"></router-view>
      </div>
  
      <!-- Box 3: ComponentUse -->
      <div class="box">
        <h3>题目 3: ComponentUse</h3>
        <hr />
        <router-view name="box3"></router-view>
      </div>
  
      <!-- Box 4: 其他内容 -->
      <div class="box">
        <h3>题目 4</h3>
        <hr />
        <router-view name="box4"></router-view>
      </div>
  
      <!-- Box 5: 其他内容 -->
      <div class="box">
        <h3>题目 5</h3>
        <hr />
        <router-view name="box5"></router-view>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Experiment3',
  };
  </script>
  
  <style>
  .experiment {
    display: grid;
    grid-template-columns: repeat(2, 1fr); /* 两列布局 */
    gap: 40px; /* 增加间距 */
    padding: 20px;
  }
  
  .box {
    background-color: #f9fafc;
    border: none;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 20px;
    text-align: center;
    border-radius: 12px;
    width: 100%;
    max-width: 300px; /* 控制宽度适配 */
    height: auto;
    transition: transform 0.2s ease-in-out;
  }
  
  h3 {
    margin: 0;
  }
  </style>
  