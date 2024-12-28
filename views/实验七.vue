<template>
  <div class="book-list">
    <h1>图书列表</h1>
    <ul>
      <li v-for="book in books" :key="book.id">
        <h2>{{ book.title }}</h2>
        <p>作者: {{ book.author }}</p>
        <p>出版年份: {{ book.year }}</p>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

// 定义图书列表的响应式变量
const books = ref([]);

// 获取图书列表的函数
const fetchBooks = async () => {
  try {
    const response = await axios.get('http://localhost:3000/books'); // 更新为你的后端地址
    books.value = response.data;
  } catch (error) {
    console.error('获取图书列表失败:', error);
  }
};

// 在组件挂载时调用获取图书列表的函数
onMounted(() => {
  fetchBooks();
});
</script>

<style>
.book-list {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.book-list h1 {
  text-align: center;
}

.book-list ul {
  list-style-type: none;
  padding: 0;
}

.book-list li {
  border: 1px solid #ddd;
  margin-bottom: 10px;
  padding: 15px;
  border-radius: 5px;
}

.book-list h2 {
  margin: 0 0 10px;
}

.book-list p {
  margin: 5px 0;
}
</style>