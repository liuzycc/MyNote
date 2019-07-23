<template>
  <div>
    看到我那就是validate验证通过
  </div>
</template>
<script>
export default {
  layout: "blog",
  validate({ params, query }) {
      console.log(params, query)
    return true; // 如果参数有效
    // return false; // 参数无效，Nuxt.js 停止渲染当前页面并显示错误页面
  }
};
</script>

