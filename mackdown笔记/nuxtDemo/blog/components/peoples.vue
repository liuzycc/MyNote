<template>
  <div class="main">
    <ul>
      <li v-for="item in getlist">{{item.name}}</li>
    </ul>
  </div>
</template>
<script>
import { mapGetters, mapState } from "vuex";
export default {
  computed: {
    ...mapGetters("global", ["getlist"])
  },
  created() {
      console.log(this.getlist)
  }
};
</script>
<style lang="scss" scoped>
.main {
    border: 1px solid #000;
    border-left: none;
    border-right: none;
}
</style>


