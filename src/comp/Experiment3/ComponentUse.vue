<template>
    <div>
      <p>这是普通组件 ComponentUse</p>
      <p>父组件传递的数据：{{ someProp }}</p>
      <button @click="sendDataToParent">向父组件传递数据</button>
    </div>
  </template>
  
  <script>
  export default {
    name: "ComponentUse",
    props: {
      someProp: {
        type: String,
        required: true,
      },
    },
    methods: {
      sendDataToParent() {
        this.$emit("someEvent", "这是子组件传递的数据");
      },
    },
  };
  </script>
  
  <style scoped>
  p {
    color: #fbbc05;
    font-size: 16px;
  }
  
  button {
    margin-top: 10px;
    padding: 8px 16px;
    background-color: #ea4335;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #d93025;
  }
  </style>
  