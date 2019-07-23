<template>
  <div class="main">
    <router-link to="/">返回首页</router-link>
     <div v-if="$nuxt.isOffline">你的网络没了</div>
    <div>虽然丑了点，但我确实是顶部</div>
    <nuxt/>
  </div>
</template>
<script>
export default {
  middleware:'stats',
  computed:{
  },
  methods:{
  }
}
</script>
<style lang="scss" scoped>
.main {
  padding: 20px;
  &>div {
    margin-bottom: 20px;
  }
}
</style>

