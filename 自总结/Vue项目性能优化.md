# Vue项目性能优化



## 1. 配置 webpack 中 externals 节点

1. 正常情况下，项目中的依赖包，例如 `vue, vue-router, axios, lodash, echarts, nprogress` 这样的包，都是直接从 `node_modules` 目录中打包进项目中，无形中增加了打包出来的文件的体积；

2. 为了减少打包出来的文件的体积，我们可以使用 webpack 提供的 `externals` 节点，把上述包配置成外联的形式；

3. 注意：被 `externals` 节点配置的包，不会被打包到最终的项目里，从而减少了打包完毕后项目的体积；

4. externals 节点的配置步骤：

   1. 打开 `build` 目录下的 `webpack.prod.conf.js` 文件，添加如下代码：

      ```js
      externals: {
          // 包名: window全局对象,
          echarts: 'echarts',
          vue: 'Vue',
          'vue-router': 'VueRouter',
          axios: 'axios',
          lodash: '_',
          nprogress: 'NProgress'
        }
      ```

   2. 打开 `index.html` 首页，在头部header区域添加如下代码：

      ```html
      <link rel="stylesheet" href="https://cdn.bootcss.com/nprogress/0.2.0/nprogress.min.css">
        <script src="https://cdn.bootcss.com/nprogress/0.2.0/nprogress.min.js"></script>
        <script src="https://cdn.bootcss.com/echarts/4.1.0/echarts.min.js"></script>
        <script src="https://cdn.bootcss.com/vue/2.5.16/vue.runtime.min.js"></script>
        <script src="https://cdn.bootcss.com/vue-router/3.0.1/vue-router.min.js"></script>
        <script src="https://cdn.bootcss.com/axios/0.18.0/axios.min.js"></script>
        <script src="https://cdn.bootcss.com/lodash.js/4.17.10/lodash.min.js"></script>
      ```

   3. 配置开发模式下，自动在header头部注入外联的脚本：

      + 打开并修改 `build -> webpack.prod.conf.js`，找到 `new HtmlWebpackPlugin({})` 节点，添加配置项如下：

        ```js
        // 是否为发布模式
        isProd: true,
        // index首页的 title 文本
        title: '随心购后台网站'
        ```

      + 修改 index.html 如下：

        ```html
        <title><%= htmlWebpackPlugin.options.title %></title>
        
        <!--按需注入外联脚本-->
        <% if (htmlWebpackPlugin.options.isProd) { %>
          <%= `
            <script src="https://cdn.bootcss.com/echarts/4.1.0/echarts.min.js"></script>
            <script src="https://cdn.bootcss.com/vue/2.5.16/vue.runtime.min.js"></script>
            <script src="https://cdn.bootcss.com/vue-router/3.0.1/vue-router.min.js"></script>
            <script src="https://cdn.bootcss.com/axios/0.18.0/axios.min.js"></script>
            <script src="https://cdn.bootcss.com/lodash.js/4.17.10/lodash.min.js"></script>
            ` %>
          <% } %>
        ```


## 2. 配置 element-ui 的按需导入

参考官方文档即可



## 3. 实现路由懒加载

1. 运行 `npm i babel-plugin-syntax-dynamic-import -D`

2. 在 `.babelrc` 的 `plugins` 节点下，新增如下插件配置：

   ```js
   "babel-plugin-syntax-dynamic-import"
   ```

3. 把路由改造成懒加载形式：

   ```js
   // 导入 登录组件
   // import Login from '@/components/Login'  改造成如下格式：
   
   const Login = () => import(/* webpackChunkName: "login" */ '@/components/Login')
   ```


## 4. 为服务器启用Gzip压缩



## 5. HTTPS 服务器

1. 普通的HTTP协议，在网络中传输数据的时候，都是明文传输的；
   + 不论用的是Post还是Get等其它请求，都不安全；
   + 只要有人通过黑客的形式，抓取到了你和服务器之间的数据报文，就可以解析出网络中传输的数据
   + 总结：HTTP协议是没有安全性可言的，非常不安全！
2. 推荐网站，都启用HTTPS协议进行网络之间的数据传输；
   + HTTPS是基于 SSL 这个安全层来进行数据传输的；
   + SSL 会把传输的数据，通过证书进行加密，然后，当数据到达服务器之后，会通过密钥进行解密；
3. 网站如何启用HTTPS协议呢？
   + 要申请SSL相关的证书；
   + 注意：一般，企业中用的SSL证书，都是收费的，因为收费，所以安全！
   + 但是，作为个人，我们没有多余的资金去购买SSL证书，因为企业版的证书太贵了！



## 6. 通过 pm2 让项目一直保持运行

1. 在服务器中，全局安装 `npm i pm2 -g`
2. 通过 `pm2 start 脚本 --name 好记的名称` 可以在后台启动一个项目；
3. 通过 `pm2 stop 好记的名称` 可以停止项目；
4. 通过 `pm2 ls` 可以查看后台都运行了哪些项目；
5. 通过 `pm2 delete 好记的名称` 可以删除某个项目；
6. 通过 `pm2 restart 好记的名称` 可以重启某个项目；



## 相关文章

[html-webpack-plugin详解](https://www.cnblogs.com/wonyun/p/6030090.html)