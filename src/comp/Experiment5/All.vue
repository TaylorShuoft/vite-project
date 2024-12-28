<template>
  <div>
    <h1>全部内容</h1>
    <p>这里展示所有内容。</p>
    <ul class="content-list">
      <li v-for="item in items" :key="item.id">{{ item.name }}</li>
    </ul>
    <button @click="loadMore" class="load-more-btn">加载更多</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { id: 1, name: '内容1' },
        { id: 2, name: '内容2' },
        { id: 3, name: '内容3' },
      ],
    };
  },
  methods: {
    loadMore() {
      const newItems = [
        { id: 4, name: '内容4' },
        { id: 5, name: '内容5' },
        { id: 6, name: '内容6' },
      ];
      this.items = [...this.items, ...newItems];
    },
  },
};
</script>

<style scoped>
.content-list {
  list-style-type: none;
  padding: 0;
}
.content-list li {
  padding: 10px;
  border-bottom: 1px solid #ddd;
}
.load-more-btn {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #0073e6;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
}
.load-more-btn:hover {
  background-color: #005bb5;
}
</style>
