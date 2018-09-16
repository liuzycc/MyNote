vue-cli配置命令：vue init webpack vueProject
// 前提安装了 全局的脚手架工具  vue-cli
webpack配置:
 npm init -y  初始化 package.json 文件

 //快速配置
 npm i html-webpack-plugin style-loader css-loader less-loader less url-loader file-loader babel-loader @babel/core @babel/plugin-transform-runtime @babel/runtime @babel/preset-env @babel/plugin-proposal-class-properties vue-loader vue-template-compiler -D
 npm i vue -S

 安装依赖项 
 npm webpack webpack-lic -D    //-D  安装到开发环境下  ‘devDependencies’
 npm webpack-dev-server -D     //能够实现 webpack 的实时打包构建  
 //这里  默认src目录下的index.js为启动文件 会挂载到项目根路径，是隐藏的，可以用启动路径 + '/mian.js' 访问

// package.json配置：
//  "scripts": {
//   "test": "echo \"Error: no test specified\" && exit 1",
//   "dev": "webpack-dev-server --open --host 127.0.0.1 --port 3000 --hot"   
// },

//- --open 自动打开浏览器
// - --host 配置IP地址
// - --port 配置 端口号
// - --hot 热更新；最新的代码，以打补丁的形式，替换到页面上，加快编译的速度；

//************************************************************************************************************************* */
 npm i html-webpack-plugin -D  //插件配置启动页面  index.html 

 //在 webpack.config.js中，导入 插件

// 导入 html-webpack-plugin，从而帮我们自动把 打包好的 main.js 注入到 index.html 页面中
// 同时，html-webpack-plugin 可以把 磁盘上的 index.html 页面，复制一份并托管到 内存中；
const HtmlPlugin = require('html-webpack-plugin')
const htmlPlugin = new HtmlPlugin({
  // 传递一个配置对象
  template: './src/index.html', // 指定路径，表示 要根据哪个物理磁盘上的页面，生成内存中的页面
  filename: 'index.html' // 指定，内存中生成的页面的名称
})

// webpack 这个构建工具，是基于 Node.js 开发出来的一个前端工具
module.exports = {
  mode: 'development', // 开发模式用这个 
  plugins: [htmlPlugin] // 插件数组
}
//******************************************************************************************************************** */
##打包处理非js文件
//npm i style-loader css-loader -D
//{ test: /\.css$/, use: ['style-loader', 'css-loader'] }
##使用webpack打包less文件
//npm i less-loader less -D
//{ test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] }
##使用webpack处理css中的路径
//npm i url-loader file-loader -D
//{ test: /\.jpg|png|gif|bmp$/, use: 'url-loader' }

##使用babel处理高级JS语法
//npm i babel-loader @babel/core @babel/plugin-transform-runtime @babel/runtime  -D
//npm i @babel/preset-env @babel/plugin-proposal-class-properties -D
添加 babel-loader 配置项：
//{ test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ }
在项目根目录中，添加 .babelrc 配置文件：
// {
//   "presets": ["@babel/preset-env"],
//   "plugins": ["@babel/plugin-transform-runtime", "@babel/plugin-proposal-class-properties"]
// }

//*************************************************************************************************************************** */
配置vue:
npm i vue -S
//js中使用
import Vue from 'vue' //这是不完整的vue包 用在生产环境
import Vue from 'vue/dist/vue.js' //这是完整的vue包  用于开发环境

##在webpack中配置.vue组件页面的解析
//npm i vue-loader vue-template-compiler -D
//{ test: /\.vue$/, use: 'vue-loader' }

// 导入插件
const VueLoaderPlugin = require('vue-loader/lib/plugin')
// new 一个插件的实例对象
const vuePlugin = new VueLoaderPlugin()
// 把 new 出来的插件实例对象，挂载到 `plugins` 节点中：
plugins: [...其它插件, vuePlugin]

//***********************************************************************************************************************



Start Vue   开始VUE

##Vue中的指令
1.插值表达式 {{ }} //只能在元素内容区域使用，不能再元素属性节点中使用
2.v-cloak //插值表达式有闪烁的问题（v-cloak 指令来解决闪烁问题）
3.v-text //渲染指定的文本
4.v-html //渲染带有HTML标签的文本
5.v-bind: //如果元素的属性值，需要动态地进行绑定，则需要使用v-bind: 指令
//简写  <button :title="titleStr">按钮</button>
6.v-on: //简写 <input type="button" value="按钮" v-on:click="show(123)" />
7.v-model //双向绑定的只有 v-model
8.v-for和:key属性
9.v-if和v-show


拓展：
//通过 v-bind: 为元素的 class 绑定具体的类名：
//<p :class="['thin', 'red', 'big']">彬哥最帅</p>
//类名数组中使用三元表达式，按需为元素添加某些类名：
//<p :class="['thin', flag ? 'red' : '']">彬哥最帅a a a</p>

##修饰符
1.事件修饰符
- .prevent 阻止默认行为
- .once 只触发1次
- .stop 阻止冒泡
- .self 只有在当前元素上触发事件的时候，才会调用处理函数
2.按键修饰符  //按键修饰符都是配合文本输入框使用的；
- .enter
- .tab
- .esc


##过滤器
1.全局过滤器  
//使用全局过滤器:<span>{{ dt | 过滤器的名称 }}</span>
//定义全局过滤器:
  Vue.filter('过滤器的名称', function(originVal){ 
    /* 对数据进行处理的过程，在这个 function 中，
    最后必须 return 一个处理的结果 */ 
  })
2.私有过滤器
  语法：
    // filters: {
    //   // 这是最新的ES6写法【推荐】
    //   过滤器的名称(originVal){
    //       return 处理的结果
    //   }
    // }


##使用过滤器的注意事项：
（自总结）：
1.过滤器可以使用多个 | xx | xx 
2.过滤器就近原则，先找私有的在看全局的
3.过滤器回调参数，第一个参数必须是当前插值表达式中的值，后面的可以传多个值
4.过滤器一定要有return

//注意过滤器查找顺序问题：就近原则
// - 如果想拿管道符前面的值，通过 function 的第一个形参来拿
// - 过滤器中，一定要返回一个处理的结果，否则就是一个无效的过滤器
// - 在调用过滤器的时候，直接通过 () 调用就能传参； 从过滤器处理函数的第二个形参开始接收传递过来的参数
// - 可以 多次 使用 | 管道符 一次调用多个过滤器

##Vue实例.$mount() 动态挂载实例
//相当于如果没有给定el  
//可以使用Vue.$mount('selector')来挂载要渲染的区域
语法：Vue.$mount("选择器 - 指定要控制的区域")

##template属性指定模板


##主要的生命周期函数分类：

#- 创建期间的生命周期函数：(特点：每个实例一辈子只执行一次)
  - beforeCreate：创建之前，此时 data 和 methods 尚未初始化
  - created(第一个重要的函数，此时，data 和 methods 已经创建好了，可以被访问了)
  - beforeMount：挂载模板结构之前，此时，页面还没有被渲染到浏览器中；
  - mounted（第二个重要的函数，此时，页面刚被渲染出来；如果要操作DOM元素，最好在这个阶段）

#- 运行期间的生命周期函数：（特点：按需被调用 至少0次，最多N次）
  - beforeUpdate：数据是最新的，页面是旧的
  - updated：页面和数据都是最新的

#- 销毁期间的生命周期函数：(特点：每个实例一辈子只执行一次)
  - beforeDestroy：销毁之前，实例还正常可用
  - destroyed：销毁之后，实例已经不工作了

##Promise、async 和 await  ES6

1.创建形式上的异步操作：
const p = new Promise()
2.创建具体的异步操作：
const p = new Promise(function(successCb, errorCb){
  // 在这个 function 中定义具体的异步操作
})

##async 和 await 的作用（可以看 01-vue 的视频或者代码或者阮一峰ES6博客）

##axios的使用（可以看文档去）
1.使用 axios.get() 和 axios.post() 发起请求
2.使用 async 和 await 结合 axios 发起 Ajax 请求

##Vue中的动画
1.把需要添加动画的元素，使用v-if或v-show进行控制
2.把需要添加动画的元素，使用Vue提供的元素用标签包裹
<transition></transition>//包裹显示或隐藏的元素
//如果是v-for列表需要用
<transition-group tag="ul"></transition-group>包裹

3.添加两组类
// .v-enter,
// .v-leave-to{
//     opacity: 0;
//     transform: translateX(100px);
// }

// .v-enter-active,
// .v-leave-active{
//   	transition: all 0.5s ease;
// }

#使用第三方CSS动画库
1. 把需要添加动画的元素，使用v-if或v-show进行控制
2. 把需要添加动画的元素，使用Vue提供的元素 <transition></transition> 包裹起来
3. 为  <transition></transition>  添加两个属性类enter-active-class, leave-active-class
4. 把需要添加动画的元素，添加一个 class="animated"

#v-for 的列表过渡
1. 把v-for循环渲染的元素，添加 :key 属性
2. 在 v-for循环渲染的元素外层，包裹 <transition-group> 标签
3. 添加两组类即可：

/*     .v-enter,
       .v-leave-to {
             opacity: 0;
             transform: translateY(100px);
       }
       
       .v-enter-active,
       .v-leave-active {
             transition: all 0.8s ease;
       }

       //控制要被删除的元素，脱离标准流
        .v-leave-active{
          position: absolute;
        }

      //控制后续的元素，通过过渡位移到目标位置
        .v-move{
          transition: all 0.8s ease;
        }
*/



定义组件的语法:
 Vue.component('组件的名称', { 组件的配置对象 }) //这种方式不推荐

 import home from './Home.vue';
 Vue.component('组件的名称', home)  //一般使用这种方式

 //组件和实例的相同和区别：
//  1. 组件中的 data 必须是一个 function 并 return 一个 字面量对象；在 Vue 实例中，实例的 data 既可以是 对象，可以是 方法；
//  2. 组件中，直接通过 template 属性来指定组件的UI结构；在 Vue 实例中，
//     通过 el 属性来指定实例控制的区域；但是实例也可以使用 template;
//  3. 组件和实例，都有自己的生命周期函数，私有的过滤器，methods 处理函数；

// 问题：为什么组件中的 data 属性必须定义为一个方法并返回一个对象：
// 因为这样，能够保证每次创建的组件实例，都有自己的一块唯一的数据内存，防止组件之间数据的干扰

components:{'xx':home} // 定义私有组件

##父组件向子组件传递普通数据

1.父组件引入并注册好子组件
2.给子组件绑定自定义属性
//  <my-son :hh="msg" @cc="getSonInfo"></my-son>
3.子组件使用  props:['hh'] 接收  然后用 this.hh使用
//注意：如果是引用类型,我们可以使用深拷贝 
//这样做是为了，在子组件中使用或改变数据的时候，父组件中的数据还可以保持不变
4.如果是想使用父组件中的方法可以用
//this.$emit('cc','参数1','参数2')  来触发父组件方法

##子组件向父组件传值
//主要是父组件用 this.$on('xx',fn(){})注册一个事件
//子组件使用 this.$emit('xx','参数1')触发这个事件  
1. 子向父传值，要使用 事件绑定机制@；
2. 父向子传递一个方法的引用
3. 子组件中，可以使用 this.$emit() 来调用父组件传递过来的方法
4. 在使用this.$emit()调用 父组件中方法的时候，可以从第二个位置开始传递参数；把子组件中的数据，通过实参，传递到父组件的方法作用域中；
5. 父组件就可以通过形参，接收子组件传递过来的数据；

##兄弟组件之间传值
//注意：兄弟组件之间，实现传值，
//用到的技术，是 EventBus(也就是借用第三个Vue实例)

1.定义模块 bus.js
/**
 *    import Vue from 'vue'
      export default new Vue()
 */
2.在需要接收数据的兄弟组件中，导入 bus.js 模块
3.在需要接收数据的兄弟组件中的 created 生命周期函数里，
  使用 bus.$on('事件名称', (接收的数据) => {}) 自定义事件：

/**
      created(){
      // 定义事件
      bus.$on('ooo', (data)=>{
        console.log(data)
        })
      }
 */

4.在需要发送数据的兄弟组件中，导入 bus.js 模块
5.在需要发送数据的兄弟组件中，
  使用 bus.$emit('事件名称', 要发送的数据) 来向外发送数据：

/**
       import bus from './bus.js'
      export default {
        data(){
          return {
            msg: 'abcd'
          }
        },
        methods: {
          sendMsg(){
            // 触发 绑定的 事件，并向外传递参数
            bus.$emit('ooo', this.msg)
          }
        }
      }
 */


 ##使用 this.$refs 来获取元素和组件

1.把要获取的DOM元素，添加 ref 属性，创建一个DOM对象的引用，指定的值，就是引用的名称：

  <p ref="myElement11">这是父组件</p>

2.如果要获取 某个引用所对应的 DOM对象，则直接使用 this.$refs.引用名称

  console.log(this.$refs.myElement11)

3.也可以使用 ref 为组件添加引用；可以使用 this.$refs.组件应用名称, 拿到组件的引用，从而调用组件上的方法 和 获取组件data上的 数据；

##霸道的 render 函数渲染组件

1. 如果在 vm 实例中既指定了 el 又指定了 render 函数，则会把 el 所指的的区域，替换为 render 函数中所提供的组件；
2. 既然 render 函数会替换到 el 区域内的所有代码，也会让 template 属性失效；因此，在删减版的 vue 包中，new 出来的 Vue 实例对象，
   不允许 挂载 data 属性和 template 属性！








 
 