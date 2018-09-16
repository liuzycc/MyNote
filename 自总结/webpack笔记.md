## 4. 什么是webpack?
+ **什么是webpack：**webpack 是前端项目的构建工具；前端的项目，都是基于 webpack 进行 构建和运行的；
+ **为什么要使用webpack:**
    1. 如果项目使用 webpack 进行构建，我们可以书写高级的ES代码，且不用考虑兼容性；
    2. webpack 能够优化项目的性能，比如合并、压缩文件等；
    3. 基于webpack，程序员可以把 自己的开发重心，放到功能上；
+ **什么项目适合使用webpack：**
    + webpack 非常适合与**单页面应用程序(SinglePageApplication)**结合使用；
      + vue, react, angular 只要用前端三大框架开发项目，必然会使用webpack工具；
    + 不太适合与多页面的普通网站结合使用；
+ 根据[webpack官网](http://webpack.github.io/)的图片介绍webpack打包的过程
+ webpack分很多版本    1.x     2.x    3.x     4.x



## 5. 在项目中安装和配置`webpack`

>  webpack 是前端的一个工具，这个工具，可以从NPM官网上下载到本地使用；

1. 新建一个项目的空白目录，并在在终端中，`cd`到项目的根目录，执行`npm init -y` 初始化项目

2. 装包：运行 `npm i webpack webpack-cli -D` 安装项目构建所需要的 `webpack`

3. 打开 `package.json`文件，在 `scripts` 节点中，新增一个 `dev` 的节点：

   ```json
   "scripts": {
       "test": "echo \"Error: no test specified\" && exit 1",
       "dev": "webpack"
     },
   ```

4. 在项目根目录中，新建一个 `webpack.config.js` 配置文件，内容如下：

   ```js
   // 这是 使用 Node 语法， 向外导出一个 配置对象
   module.exports = {
     mode: 'production' // production    development
   }
   ```

5. 在项目根目录中，新增一个 `src` 目录，并且，在 `src` 目录中，新建一个 `index.js` 文件，作为 `webpack 构建的入口`；会把打包好的文件输出到 `dist -> main.js`

6. 在终端中，直接运行 `npm run dev`  启动webpack进行项目构建；




## 6. 实现`webpack`的实时打包构建

1. 借助于 `webpack-dev-sever` 这个工具，能够实现 webpack 的实时打包构建；

2. 运行`npm i webpack-dev-server -D` 安装包

3. 打开`package.json`文件，把 `scripts` 节点下的 `dev` 脚本，修改为如下配置：

   ```json
   "scripts": {
       "test": "echo \"Error: no test specified\" && exit 1",
       "dev": "webpack-dev-server"
     },
   ```

4. 修改 `index.html` 文件中的 `script` 的 `src`, 让 src 指向 内存中根目录下的 `/main.js`

   ```html
   <script src="/main.js"></script>
   ```



## 7. 使用`html-webpack-plugin`插件配置启动页面

1. 装包`npm i html-webpack-plugin -D `

2. 在 `webpack.config.js`中，导入 插件：

   ```js
   // 导入 html-webpack-plugin，从而帮我们自动把 打包好的 main.js 注入到 index.html 页面中
   // 同时，html-webpack-plugin 可以把 磁盘上的 index.html 页面，复制一份并托管到 内存中；
   const HtmlPlugin = require('html-webpack-plugin')
   const htmlPlugin = new HtmlPlugin({
     // 传递一个配置对象
     template: './src/index.html', // 指定路径，表示 要根据哪个物理磁盘上的页面，生成内存中的页面
     filename: 'index.html' // 指定，内存中生成的页面的名称
   })
   ```

3. 把 创建好的 `htmlPlugin` 对象，挂载到 `plugins`数组中：

   ```js
   // webpack 这个构建工具，是基于 Node.js 开发出来的一个前端工具
   module.exports = {
     mode: 'development', // 当前处于开发模式
     plugins: [htmlPlugin] // 插件数组
   }
   ```




## 8. 实现自动打开浏览器、热更新和配置浏览器的默认端口号

+ `--open` 自动打开浏览器
+ `--host` 配置IP地址
+ `--port` 配置 端口号
+ `--hot` 热更新；最新的代码，以打补丁的形式，替换到页面上，加快编译的速度；



## 9. ES6 模块化

### 9.1 默认导入和导出

1. 默认导入的语法：

   ```js
   import 接收名称 from '模块名称'
   ```

2. 默认导出的语法：

   ```js
   export default { }
   ```

### 9.2 按需导入和导出

1. 按需导入语法：

   ```js
   import { 成员名称 } from '模块名称'
   ```

2. 按需导出语法：

   ```js
   export var a = 10
   ```




## 10. 打包处理非`js`文件

### 10.1 使用webpack打包css文件

1. 运行 `npm i style-loader css-loader -D`

2. 打开 `webpack.config.js` 配置文件，在 `module` -> `rules` 数组中，新增处理 css 样式表的loader规则：

   ```json
   module: { // 所有 非.js 结尾的第三方文件类型，都可以在 module 节点中进行配置
       rules: [ // rules 是匹配规则，如果 webpack 在打包项目的时候，发现，某些 文件的后缀名是 非 .js 结尾的
         //  webpack 默认处理不了，此时，webpack 查找 配置文件中的 module -> rules 规则数组；
         { test: /\.css$/, use: ['style-loader', 'css-loader'] }
       ]
     }
   ```


### 10.2 使用webpack打包less文件

1. 运行 `npm i less-loader less -D`

2. 在 webpack 的配置文件中，新增一个 rules 规则来 处理 less 文件：

   ```json
   { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] }
   ```


### 10.3 使用webpack处理css中的路径

1. 运行 `npm i url-loader file-loader -D`

2. 在 webpack 的配置文件中，新增一个 rules 规则来 处理 图片 文件：

   ```json
   { test: /\.jpg|png|gif|bmp$/, use: 'url-loader' }
   ```


### 10.4 使用babel处理高级JS语法

1. 之前说过，webpack 默认能够打包处理一些ES6中的高级语法；但是，webpack 并不能处理所有的高级ES6、ES7语法；

2. 运行两套命令，去安装相关的 loader:

   + 运行 `npm i babel-loader @babel/core @babel/plugin-transform-runtime @babel/runtime  -D`
   + 运行 `npm i @babel/preset-env @babel/plugin-proposal-class-properties -D`

3. 添加 babel-loader 配置项：

   ```json
   // 注意：在配置 babel-loader 的时候，一定要添加 exclude 排除项，把 node_modules 目录排除
   // 这样，只让 babel-loader 转换 程序员 自己手写的 JS 代码；
   // 好处：1. 能够提高编译的转换效率； 2. 能够防止不必要的报错！
   { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ }
   ```

4. 在项目根目录中，添加 `.babelrc` 配置文件：

   ```json
   {
     "presets": ["@babel/preset-env"],
     "plugins": ["@babel/plugin-transform-runtime", "@babel/plugin-proposal-class-properties"]
   }
   ```

##webpack 配置 Vue
1.运行 npm i vue -S 把 vue 安装到项目依赖

在 index.js 中使用 import 导入 vue 模块：
import Vue from 'vue'  这里引入的包是残缺的包用于线上环境  
开发环境我们使用
import Vue from 'vue/dist/vue.js'  这里引入的是vue完全的包

在 index.html 中创建将来要被 vm 实例控制的 div：
<!-- 将来，这个 div 就是 Vue实例 要控制的区域 -->
<div id="app"></div>

在 index.js 中创建 vm 实例，并使用 el 指定要控制的区域，使用 data 指定要渲染的数据：
const vm = new Vue({
  el: '#app', // 要控制的区域
  data: {
    msg: 'ok' // 要渲染的数据
  }
})

2.解析  .vue  文件
npm i vue-loader vue-template-compiler -D

添加rules匹配规则：
{ test: /\.vue$/, use: 'vue-loader' }

在webpack.config.js中导入并配置插件：
// 导入插件
const VueLoaderPlugin = require('vue-loader/lib/plugin')
// new 一个插件的实例对象
const vuePlugin = new VueLoaderPlugin()

// 把 new 出来的插件实例对象，挂载到 `plugins` 节点中：
plugins: [...其它插件, vuePlugin]


## 相关文章

[babel-preset-env：你需要的唯一Babel插件](https://segmentfault.com/p/1210000008466178)
[Runtime transform 运行时编译es6](https://segmentfault.com/a/1190000009065987)