<template>
  <div class="container">
    <div id="mount-point"
         v-mycc="value">{{value}}</div>
    <input type="text"
           v-model="value">
    <hr>
    <cc></cc>
  </div>
</template>

<script>
import cc from './cc'
export default {
  name: "HelloWorld",
   provide: {
    foo: 'bar'
  },
  components:{
    cc
  },
  created() {
    console.log(this.foo);
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      value: "haha"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
