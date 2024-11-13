<template>
    <div class="step4">
        <div class="box">
            <h3>题目1</h3>
            <hr />
            <!-- 路由切换按钮 -->
            <router-link to="/s4/s4_sub_l">
                <button>子页面 L</button>
            </router-link>
            <router-link to="/s4/s4_sub_r">
                <button>子页面 R</button>
            </router-link>
            <!-- 子路由显示位置 -->
            <router-view />
        </div>
        <div class="box">
            <h3>题目2</h3>
            <hr />
            <ArticleInfo>
                <template #header>
                    <p>文章头部区域</p>
                </template>
                <template #content>
                    <p>文章内容区域</p>
                </template>
                <template #footer>
                    <p>文章底部区域</p>
                </template>
            </ArticleInfo>
        </div>
        <div class="box">
            <h3>题目3</h3>
            <hr />
            <SubScopeSlot>
            <template #default="{message}">
                <p>{{ message }}</p>
            </template>
            <template #haeder="{message}">
                <p>{{ message }}</p>
            </template>
            <template #content="{message}">
                <p>{{ message }}</p>
            </template>
        </SubScopeSlot>

        </div>
        <div class="box">
            <h3>题目4</h3>
            <hr />
            <p v-fontsize="size">DirectiveComponent 组件</p>
            <button @click="changeFontSize">更改字号大小</button>
        </div>
        <div class="box">
            <h3>题目5</h3>
            <img src="../src/assets/png/kebi.png" alt="kebe">
            <hr />
        </div>
    </div>
</template>

<script>
import ArticleInfo from "../src/comp/ArticleInfo.vue";
import SubScopeSlot from "../src/comp/SubScopeSlot.vue";

export default {
  components: {
    ArticleInfo,
    SubScopeSlot,
  },
  data() {
    return {
      size: 16 // 初始字体大小
    };
  },
  methods: {
    changeFontSize() {
      // 切换字体大小
      this.size = this.size === 16 ? 24 : 16;
    }
  },
  directives: {
    fontsize: {
      // 指令钩子：元素绑定时执行
      mounted(el, binding) {
        el.style.fontSize = `${binding.value}px`;
      },
      // 指令钩子：值更新时执行
      updated(el, binding) {
        el.style.fontSize = `${binding.value}px`;
      }
    }
  }
};
</script>

<style>
.step4 {
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 两列布局 */
  gap: 40px; /* 增加间距 */
  padding: 20px;
}

.box {
  background-color: #f9fafc;
  border: none; /* 去掉边框，避免和子元素边框重叠 */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
  border-radius: 12px;
  width: 100%;
  max-width: 300px; /* 控制宽度适配 */
  height: auto;
  transition: transform 0.2s ease-in-out;
}

button {
  margin-top: 10px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  background-color: #00ff99;
  color: #333;
  border: none;
  border-radius: 8px;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #abb0ae; /* 悬停时的背景色 */
}
img{
    width: 80px;
    height: 90px;
    object-fit: cover;
}
</style>