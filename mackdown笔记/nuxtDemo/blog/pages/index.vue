<template>
  <section class="container">
    <div>
      <nuxt-link to="/posts">跳转posts</nuxt-link>
      <no-ssr>
        <nuxt-link to="/validate">validate no-ssr</nuxt-link>
      </no-ssr>
      <nuxt-link :to="{name:'validate',params:{id:10}}">validate带参数</nuxt-link>
      <nuxt-link :to="{path:'validate/10'}">validate带参数/10</nuxt-link>
      <nuxt-link :to="{path:'validate/10'}">validate _cc带参数/10</nuxt-link>
      <hr>
      {{data}}
      <hr>
      <p>{{'我的天哪'|addHaha}}</p>
      <p>{{new Date()|formatterDate}}</p>
    </div>
  </section>
</template>

<script>
import Logo from "~/components/Logo.vue";
import api from "~/api";
export default {
  layout: "blog",
  async asyncData(ctx) {
    ctx.app.$myFn("我的天哪__content");
    console.log(ctx);
    let { data } = await ctx.$axios.get(
      "http://febackboard-api.ziroom.com/api/members/time"
    );
    return {
      data
    };
  },
  components: {
    Logo
  },
  created() {
    this.$myFn("我的天哪__vue");
  }
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
