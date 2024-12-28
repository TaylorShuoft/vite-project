// server.js
const express = require('express');
const app = express();
const port = 3000;

// 模拟的图书数据
const books = [
  {
    id: 1,
    title: "图书标题1",
    author: "作者1",
    year: 2023
  },
  {
    id: 2,
    title: "图书标题2",
    author: "作者2",
    year: 2022
  },
  {
    id: 3,
    title: "图书标题3",
    author: "作者3",
    year: 2021
  }
];

// 定义获取图书列表的路由
app.get('/books', (req, res) => {
  res.json(books);
});

// 启动服务器
app.listen(port, () => {
  console.log(`服务器运行在 http://localhost:${port}`);
});