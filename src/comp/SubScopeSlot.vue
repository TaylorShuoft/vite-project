<template>
  <div class="sub-scope-slot-container">
    <slot :message="defaultMessage">{{ defaultMessage }}</slot> <!-- 默认插槽 -->
    <slot name="header" :message="headerMessage">{{ headerMessage }}</slot> <!-- 头部插槽 -->
    <slot name="content" :message="contentMessage">{{ contentMessage }}</slot> <!-- 内容插槽 -->
    <slot name="footer" :message="footerMessage">{{ footerMessage }}</slot> <!-- 尾部插槽 -->
  </div>
</template>

<script>
export default {
  name: 'SubScopeSlot',
  data() {
    return {
      defaultMessage: "Hello 默认插槽",
      headerMessage: "Hello Vue.js",
      contentMessage: "这是内容区域",
      footerMessage: "这是尾部区域"
    };
  }
};
</script>

<style>
.sub-scope-slot-container {
    margin: 10px 0;
    padding: 10px;
    border: 1px solid #ddd; /* 给外层容器设置边框 */
}

</style>
