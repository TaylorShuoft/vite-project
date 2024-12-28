<template>
  <div class="image-swipe">
    <van-swipe :autoplay="2000" :show-indicators="showIndicators">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img :src="image" alt="轮播图" class="swiper-image"/>
      </van-swipe-item>
    </van-swipe>
    <button @click="toggleIndicators">Toggle Indicators</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// 定义轮播图的图片数组
const images = ref([
  './imgs/img1.jpg', 
  './imgs/img2.jpg', 
  './imgs/img3.jpg'  
]);

// 定义控制指示器显示的响应式变量
const showIndicators = ref(true);

// 切换指示器显示的方法
const toggleIndicators = () => {
  showIndicators.value = !showIndicators.value;
};
</script>

<style>
.image-swipe {
  width: 300px; /* 设置轮播组件的宽度 */
  height: 200px; /* 设置轮播组件的高度 */
  top: 60%;
  overflow: hidden; /* 避免溢出 */
  margin: auto; /* 居中 */
}

.swiper-image {
  width: 100%;
  height: 100%;
  object-fit: cover; /* 图片填充方式 */
}
</style>