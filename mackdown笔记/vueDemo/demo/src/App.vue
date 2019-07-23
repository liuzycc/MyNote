<template>
  <div id="app">
    <hookDemo></hookDemo>
    <dd></dd>
    <img src="./assets/logo.png">
    <router-view />
  </div>
</template>

<script>
import hookDemo from './hooks'
// import dd from './hooks/dd'
export default {
  name: "App",
  components:{
    hookDemo,
    // dd
  },
  data(){
    return {
      value:'ioiooioi'
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
