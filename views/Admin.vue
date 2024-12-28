<template>
  <div class="admin">
    <div v-if="!isLoggedIn" class="admin-login">
      <el-card class="login-card">
        <h2>管理员登录</h2>
        <el-form :model="form" status-icon>
          <el-form-item label="账号" :rules="[{ required: true, message: '请输入账号', trigger: 'blur' }]">
            <el-input v-model="form.username"></el-input>
          </el-form-item>
          <el-form-item label="密码" :rules="[{ required: true, message: '请输入密码', trigger: 'blur' }]">
            <el-input v-model="form.password" type="password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="login">登录</el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </div>

    <div v-else>
      <h2>欢迎，{{ form.username }}！</h2>
      <el-table :data="userData" stripe>
        <el-table-column prop="id" label="ID" width="80" />
        <el-table-column prop="name" label="姓名" width="150" />
        <el-table-column prop="age" label="年龄" width="100" />
        <el-table-column prop="email" label="邮箱" width="200" />
        <el-table-column prop="status" label="状态" width="100" />
      </el-table>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { ElMessage } from 'element-plus';

const form = ref({
  username: '',
  password: ''
});
const isLoggedIn = ref(false); // 控制登录状态

// 模拟数据
const userData = ref([
  { id: 1, name: '张三', age: 28, email: 'zhangsan@example.com', status: '激活' },
  { id: 2, name: '李四', age: 34, email: 'lisi@example.com', status: '未激活' },
  { id: 3, name: '王五', age: 22, email: 'wangwu@example.com', status: '激活' },
  { id: 4, name: '赵六', age: 30, email: 'zhaoliu@example.com', status: '未激活' },
  { id: 5, name: '小明', age: 25, email: 'xiaoming@example.com', status: '激活' }
]);

// 登录方法
const login = () => {
  if (form.value.username === '' || form.value.password === '') {
    ElMessage.error('请输入账号和密码');
    return;
  }

  // 登录逻辑
  if (form.value.username === 'admin' && form.value.password === '123456') {
    ElMessage.success('登录成功');
    isLoggedIn.value = true; // 登录状态为真，显示欢迎信息
  } else {
    ElMessage.error('账号或密码错误');
  }
};
</script>

<style>
.admin {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  background-color: #f5f5f5;
}

.admin-login {
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-card {
  width: 400px;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}

.el-table {
  margin-top: 20px;
  width: 100%;
}
</style>
