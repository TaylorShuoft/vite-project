<template>
  <div>
    <h1>博客页面</h1>
    <p>这里展示博客内容。</p>
    <div v-for="blog in blogs" :key="blog.id" class="blog-post">
      <h3>{{ blog.title }}</h3>
      <p>{{ blog.content }}</p>
      <button @click="likeBlog(blog.id)" class="like-btn">
        👍 {{ blog.likes }} 点赞
      </button>
      <div class="comments">
        <h4>评论区：</h4>
        <ul>
          <li v-for="comment in blog.comments" :key="comment.id">{{ comment.text }}</li>
        </ul>
        <input v-model="newComment" placeholder="发表评论..." @keyup.enter="addComment(blog.id)" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newComment: '',
      blogs: [
        {
          id: 1,
          title: '我的第一篇博客',
          content: '这是一篇关于Vue的博客，介绍如何使用Vue组件...',
          likes: 10,
          comments: [
            { id: 1, text: '这篇博客很有用！' },
            { id: 2, text: '感谢分享！' },
          ],
        },
        {
          id: 2,
          title: 'Vue中的生命周期',
          content: '本文讨论了Vue实例的生命周期钩子...',
          likes: 5,
          comments: [
            { id: 1, text: '很详细，学习了！' },
          ],
        },
      ],
    };
  },
  methods: {
    likeBlog(blogId) {
      const blog = this.blogs.find(b => b.id === blogId);
      blog.likes += 1;
    },
    addComment(blogId) {
      if (this.newComment.trim()) {
        const blog = this.blogs.find(b => b.id === blogId);
        const newComment = { id: Date.now(), text: this.newComment };
        blog.comments.push(newComment);
        this.newComment = '';
      }
    },
  },
};
</script>

<style scoped>
.blog-post {
  margin-bottom: 20px;
  padding: 15px;
  background-color: #f9f9f9;
  border-radius: 5px;
}
.like-btn {
  background-color: #0073e6;
  color: white;
  padding: 8px 16px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
}
.like-btn:hover {
  background-color: #005bb5;
}
.comments input {
  margin-top: 10px;
  padding: 8px;
  width: 100%;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
