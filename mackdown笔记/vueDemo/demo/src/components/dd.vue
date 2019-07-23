<template>
  <div>
    <h2>The Child</h2>
    <p>My message: <input v-model="msg$"></p>
  </div>
</template>

<script>
  export default {
    props: ['msg'],
    data() {
      return {
        msg$: this.msg,
      }
    },
    watch: {
      msg$(val) {
        this.$emit('update:msg', val)
      },
    },
  }
</script>