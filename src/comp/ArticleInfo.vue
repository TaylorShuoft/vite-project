<template>
    <div class="article-container">
      <div class="section">
        <slot name="header"></slot>
      </div>
      <div class="section">
        <slot name="content"></slot>
      </div>
      <div class="section">
        <slot name="footer"></slot>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ArticleInfo'
  };
  </script>
  
  <style>
  .article-container {
    border: 1px solid black; /* 父级容器边框 */
    padding: 10px;
    margin: 10px;
}

.section {
    border: none; /* 去掉子元素边框 */
    padding: 10px;
    margin-bottom: 10px;
}
  </style>
  