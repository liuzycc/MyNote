import Vue from "vue";
// 创建构造器
var Profile = Vue.extend({
  template: "<p>{{firstName}} {{lastName}} aka {{alias}}</p>",
  data: function() {
    return {
      firstName: "Walter",
      lastName: "White",
      alias: "Heisenberg"
    };
  }
});
// 创建 Profile 实例，并挂载到一个元素上。
new Profile().$mount("#mount-point");

Vue.nextTick().then(() => {
  console.log("DOM更新了");
});

// 注册一个全局自定义指令 `v-focus`
Vue.directive("mycc", {
  bind(el,binding,vnode,oldnode){
      el.dataset.test = '我的天哪'
      console.log(el,binding,vnode,oldnode,'绑定初始化---bind')
  },
  // 当被绑定的元素插入到 DOM 中时……
  inserted(el,binding,vnode,oldnode) {
    // 聚焦元素
    console.log(el,binding,vnode,oldnode,'当我插入到DOM中时---inserted');
  },
  update(el,binding,vnode,oldnode){
      console.log(el,binding,vnode,oldnode,'我更新了',el.dataset.test)
  }
});
