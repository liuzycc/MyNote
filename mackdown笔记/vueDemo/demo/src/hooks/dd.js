import dd from "../components/dd.vue";

export default {
  data: {
    msg: "Hello world"
  },
  methods: {
    updateMsg(val) {
      this.msg = val;
    }
  },
  render(h) {
    return h("div", [
      h("h1", "The Parent"),
      h("p", [`My message: ${this.msg}`]),
      h(dd, {
        props: { msg: this.msg },
        on: {
          "update:msg": this.updateMsg
        }
      })
    ]);
  }
};
