<template>
   
    <div class="step1">
      <div class="box">
        题目 1<hr>
        <p class="highlight-text">{{ message.greeting }}</p>
      </div>
  
      <div class="box">
        题目 2<hr>
        <input v-model="username" placeholder="请输入用户名" class="input-field" />
        <p>当前用户姓名：<span class="highlight-text">{{ username }}</span></p>
      </div>
  
      <div class="box">
        题目 3<hr>
        小明同学的成绩为：
        <div class="grade-buttons">
          <button @click="setGrade('A')">A等级</button>
          <button @click="setGrade('B')">B等级</button>
          <button @click="setGrade('C')">C等级</button>
          <button @click="setGrade('D')">D等级</button>
        </div>
        <p class="highlight-text">{{ gradeMessage }}</p>
      </div>
  
      <div class="box">
        题目 4<hr>
        <h2 class="title">学生列表</h2>
        <ul class="student-list">
          <li v-for="student in students" :key="student.id">
            id是 {{ student.id }} 姓名：<span class="highlight-text">{{ student.name }}</span> 年龄：{{ student.age }}
          </li>
        </ul>
      </div>
  
      <div class="box">
        题目 5<hr>
        <button :style="buttlonstyle1" @click="incrementByOne" class="styled-button">点击+1</button>
        <button :style="buttlonstyle2" @click="incrementByTwo" class="styled-button">点击+2</button>
        <p>当前数字：<span class="highlight-text">{{ number }}</span></p>
      </div>
  
      <div class="box">
        题目 6<hr>
        <input v-model="initialMessage" placeholder="输入初始文本" class="input-field" />
        <button @click="reverseText" class="styled-button">反转文本</button>
        <p>原始文本: <span class="highlight-text">{{ initialMessage }}</span></p>
        <p>反转文本: <span class="highlight-text">{{ reveredMessage }}</span></p>
      </div>
    </div>
  </template>
  
  <script>
  import { onMounted, onUnmounted, reactive, ref, computed } from "vue";
  
  export default {
    setup() {
      // 第一题
      const message = reactive({
        greeting: "你好",
      });
  
      let intervalId;
  
      const toggleGreeting = () => {
        message.greeting = message.greeting === "你好" ? "欢迎你" : "你好";
      };
  
      onMounted(() => {
        intervalId = setInterval(toggleGreeting, 2000);
      });
  
      onUnmounted(() => {
        clearInterval(intervalId);
      });
  
      // 第二题
      const username = reactive({
        value: "",
      });
  
      // 第三题
      const grade = ref("");
  
      const setGrade = (level) => {
        grade.value = level;
      };
  
      const gradeMessage = computed(() => {
        switch (grade.value) {
          case "A":
            return "优秀";
          case "B":
            return "良好";
          case "C":
            return "一般";
          case "D":
            return "及格";
          default:
            return "未知等级";
        }
      });
  
      // 第四题
      const students = ref([
        { id: 1, name: "小明", age: 12 },
        { id: 2, name: "小红", age: 11 },
        { id: 3, name: "小刚", age: 13 },
        { id: 4, name: "小丽", age: 12 },
      ]);
  
      // 第五题
      const number = ref(0);
      const incrementByOne = () => {
        number.value++;
      };
      const incrementByTwo = () => {
        number.value += 2;
      };
      const buttlonstyle1 = computed(() => {
        return {
          backgroundColor: number.value % 2 === 0 ? "green" : "red",
        };
      });
      const buttlonstyle2 = computed(() => {
        return {
          backgroundColor: number.value % 2 !== 0 ? "green" : "red",
        };
      });
  
      // 第六题
      const initialMessage = ref("");
      const reveredMessage = ref("");
  
      const reverseText = () => {
        // 更新反转文本
        reveredMessage.value = initialMessage.value.split("").reverse().join("");
      };
  
      return {
        message, // 第一题
  
        username: username.value, // 第二题
  
        grade, // 第三题
        setGrade,
        gradeMessage,
  
        students, // 第四题
  
        number, // 第五题
        incrementByOne,
        incrementByTwo,
        buttlonstyle1,
        buttlonstyle2,
  
        initialMessage, // 第六题
        reveredMessage,
        reverseText,
      };
    },
  };
  </script>
  
  <style>
  .step1 {
    display: grid;
    grid-template-columns: repeat(2, 1fr); /* 两列布局 */
    gap: 40px; /* 增加间距 */
    padding: 20px;
  }
  
  .box {
    background-color: #f9fafc; /* 改进盒子的背景色，显得更清爽 */
    border: 1px solid #e0e0e0; /* 边框颜色 */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* 添加阴影 */
    padding: 20px;
    text-align: center;
    border-radius: 12px; /* 更大的圆角 */
    width: 100%;
    max-width: 300px; /* 控制宽度适配 */
    height: auto; /* 高度自适应 */
    transition: transform 0.2s ease-in-out; /* 添加交互效果 */
  }
  
  .box:hover {
    transform: scale(1.05); /* 悬浮时放大 */
  }
  
  .title {
    font-size: 20px;
    margin-bottom: 10px;
  }
  
  .input-field {
    padding: 10px;
    border-radius: 8px;
    border: 1px solid #ddd;
    width: 80%;
  }
  
  .grade-buttons button {
    margin: 5px;
    padding: 8px 15px;
  }
  
  .highlight-text {
    font-weight: bold;
    color: #2b8a3e; /* 强调文本 */
  }
  
  .styled-button {
    background-color: #3498db;
    color: white;
    border: none;
    border-radius: 8px;
    padding: 10px 20px;
    cursor: pointer;
    transition: background-color 0.3s;
    margin-top: 5px; /* 向下移动按钮 */
}

  
  .styled-button:hover {
    background-color: #2980b9;
  }
  
  .student-list {
    list-style: none;
    padding: 0;
    font-size: 14px;
  }
  </style>
  