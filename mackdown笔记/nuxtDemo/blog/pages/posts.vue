<template>
  <div>
    <nuxt-child />
    <nuxt-link to="/">跳转首页</nuxt-link>
    <nuxt-link to="/posts/child">posts-child</nuxt-link>
    <p @click="tiao">js跳转首页</p>
    <peoples></peoples>
  </div>
</template>
<script>
import peoples from '~/components/peoples'

export default {
  layout: "layout",
  middleware: "stats",
  components:{
    peoples
  },
  methods: {
    tiao() {
      this.$router.push("/");
    }
  }
};
</script>

