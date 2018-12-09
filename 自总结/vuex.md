# Vue.js项目 - day6

## 今天主要内容
1. vuex 实现全局状态（数据）管理


## Vuex
1. 在vue的项目中，要处理各种各样的数据，这些数据虽然多，但是，从本质上来划分，分为两种数据：
 + 组件内部私有的数据（组件之间不会共享私有的数据）
 + 组件之间共享的数据（父组件要共享和子组件的数据、子组件要共享给父组件的数据、兄弟组件之间传值）
    + 父向子：`v-bind 属性绑定`
    + 子向父：`v-on 事件绑定机制`
    + 兄弟组件之间共享数据：`EventBus`
       + `$on 接收数据的那个组件`
       + `$emit 共享数据的那个组件`
2. 当组件之间要共享数据的时候**最好**使用一个**全局的数据存储对象**来进行控制；

## 什么是Vuex
就是为了实现组件之间数据共享的一种机制；

## 为什么要有Vuex
+ 因为使用父子传值或兄弟传值，太麻烦了；不好管理，项目代码写起来太麻烦；
+ 当有了 vuex ,想要共享数据，只需要把数据挂载到 vuex 就行；想要获取数据，直接从vuex 上拿就行；
+ 当 vuex 中的数据被修改之后，其它引用了此数据的组件，也会被同步更新；
+ 注意：只有组件间共享的数据，才有必要存储到vuex中，组件自己私有的数据，还是要存储到自己的data中；

## 如何在项目中使用Vuex
1. 运行`cnpm i vuex -S`
2. 导入 vuex
```js
import Vuex from 'vuex'
```
3. 安装Vuex
```js
Vue.use(Vuex)
```
4. 创建store公共状态对象
```js
const store = new Vuex.Store({
	state: { // state 中存放的，就是全局共享的数据，可以把 state 认为 是组件中的 data
    	count: 0
    }
})
```
5. 将 创建的 `store` 挂载到 vm 实例上
```js
new Vue({
  el: '#app',
  render: c => c(app),
  router,
  store  // 5. 将 创建的共享状态对象，挂载到 Vue 实例中，这样，所有的组件，就可以直接从 store 中获取 全局的数据了
})
```
6. 如果想要在组件中访问全局的数据：
```
this.$store.state.全局数据名称
```

## 在组件中访问store中state上的属性
### 第一种方式
`this.$store.state.数据的名称`
### 第二种方式
+ 按需导入 mapState 辅助函数：
```js
import { mapState } from "vuex";
```
+ 创建一个computed属性，通过`mapState`，结合 `...` 展开运算符，把需要的状态映射到组件的计算属性中：
```js
computed: {
    // 自定义的计算属性
    newMsg: function() {
      return "----" + this.msg + "------";
    },
    // 通过 展开运算符，把 state中的数据映射为计算属性，这样，能够让自己的计算属性和store中的属性并存
    ...mapState(["count"])
  }
```

## 修改store中state上的值
### 第一种方式
使用`this.$store.commit('方法名')`来调用 mutations 中的方法
### 第二种方式
+ 使用`mapMutaions`来映射方法到`methods`中
```js
import { mapMutations } from "vuex";
```
+ 映射 mutations 方法到 `methods` 中
```js
methods: {
    ...mapMutations(["add"])
}
```

## 定义和使用getters
### 使用方式1
通过 `this.$store.getters.名称` 来访问
### 使用方式2
使用`mapGetters` 来映射为计算属性：
```js
import { mapState, mapGetters } from "vuex";

computed: {
    ...mapState(["count"]),
    ...mapGetters(["countinfo"])
  }
```


## 定义和使用 actions 来提交异步的操作
### 使用方式1
通过`this.$store.dispatch('Action方法名称', 参数)`来访问，专门调用 `actions` 中方法的
### 使用方式2
使用`mapGetters` 来映射为计算属性：
```js
import { mapActions } from "vuex";

methods: {
    ...mapActions(["asyncSubtract"])
  }
```