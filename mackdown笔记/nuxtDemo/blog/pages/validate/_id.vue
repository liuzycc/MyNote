<template>
  <div>
    validate我是带参数的页面,参数为：{{params}}
  </div>
</template>
<script>
export default {
  layout: "blog",
  middleware: "blogMiddle",
  validate({ params, query }) {
    this.params = Object.assign(params, query);
    return true; // 如果参数有效
    // return false; // 参数无效，Nuxt.js 停止渲染当前页面并显示错误页面
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();
      setTimeout(() => this.$nuxt.$loading.finish(), 5000);
    });
  },
  data() {
    return {
      params: null
    };
  }
};
</script>

