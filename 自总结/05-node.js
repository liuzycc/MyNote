npm i browser-sync -g //命令行工具  可以在修改文件的时候浏览器自动刷新
browser-sync start --server --files "**/*.css, **/*.html,**/*.js"//开启自动刷新命令

(注意)// 有关npm介绍和package.json文件内容的介绍(02-node笔记)
npm i nrm -g //切换镜像  的  命令行工具  nrm
// 使用：nrm npm/nrm cnpm 
//查看能切换的镜像   nrm ls


www.npmjs.com //npm官网，可以搜索官网提供的包名
//这样我们就可以通过npm  install  下载

如果node版本较低  则安装全局的第三方包会安装到  C:\Users\Administrator\AppData\Roaming\npm

Node奥义在于 封装异步函数 必须使用回调函数接收数据 callback

//npm第二层含义就是一个命令行工具，只要你安装了node就已经安装了npm
npm 常用指令:

npm --version //查看npm版本号
npm update --global npm //升级npm  自己升级自己

npm init //生成package.json配置信息文件
npm init -y //快速生成  跳过向导


npm list // 查看当前package.json记录的所有包的信息(包括所有依赖信息)
npm list --depth 0 //查看当前package.json所有的一级依赖(也就是我们需要下载的第三方包)

npm install //根据package.json 的dependncies配置信息，重新下载
npm install 包名  //下载对应包
npm i 包名 (简写)
npm i boostrap@3.3.7 //安装指定版本的包
npm i bootstrap@latest //强制安装最新版本的包
npm view bootstrap  //查看远程包的所有版本

//第三方包版本的查看
npm view bootstrap versions// 查看包的所有版本号  10.0.0版本以上的
npm view bootstrap   //查看包的所有版本号   10.0.0版本一下的

npm install --save 包名
//下载并且保存依赖项（package.json文件中的dependncies选项中）
//npm i -S 包名 (简写)


//卸载第三方包
npm uninstall 包名  (npm un 包名)
//只删除，如果有依赖项依然保存
npm uninstall --save 包名 (npm un -S 包名)
npm un -s 包名 (npm un -S 包名)
//删除的同时也会把依赖项删除

npm help  //查看使用帮助
npm 命令 --help //查看指定命令的使用帮助
//例如我忘记uninstall的简写了，我们就可以通过'npm uninstall --help' 来查看

//package.json文件中属性的解析
name: (npm-demo) 项目的名称
version: (1.0.0) 0.0.1 项目版本
description: 项目简介
entry point: (index.js) main.js 项目入口
scripts:指定npm执行命令 其中 test 与 start 是默认的 npm start 可以直接执行
test command: 测试命令，暂且不用关系
git repository: 仓库地址
keywords: 关键字，如果是一个开源项目，则可以填一些关键字被别人在 npm 中搜索到
author: tony 项目的开发者
license: (ISC) 开源协议

(注意)
对于我们而言：dependencies  和 devDependencies 是我们重点要关注的属性；

- --save 会保存到 dependencies 依赖项中
- --save-dev 会保存到 devDependencies 依赖项中

我们把一些辅助开发的工具包安装到 devDependencies 中。
这样做的目的是对包进行分类，项目上线的时候可以使用 npm install --production 命令
只安装 dependencies 依赖项中的包。

//package-lock.json 主要是为了锁住 引用包的版本  防止引用包自动升级


解决npm被墙问题：(淘宝镜像)
npm 存储包文件的服务器在国外，有时候会被墙，速度很慢，所以我们需要解决这个问题
//http://npm.taobao.org/ 淘宝的开发团队把npm在国内做了备份 10分钟同步一次
安装淘宝的cnpm
//在任意目录执行都可以
//--global 表示安装到全局，而非当前目录
//--global 不能省略，否则不管用
npm install --global cnpm
接下来你安装包的时候吧之前的npm替换成cnpm就可以了
例子：
//这里还是走国外的服务器，速度比较慢
npm install jquery
//使用cnpm就会通过淘宝的服务器来下载 jquery
cnpm install jquery

//如果不想安装cnpm 又想使用淘宝的服务器来下载
npm install jquery --registry-https://regustry.npm.taobao.org 
//可以这样来下载
//但是每次手动这样加参数很麻烦，所以我们可以吧这个选项加入配置文件中
npm config set registry http://registry.npm.taobao.org
//只要经过上面的命令配置，则你以后所有的npm install 都会默认通过淘宝的服务器来下载

//查看npm 配置信息
npm config list


node框架 express(快速的) 介绍和安装  expressjs.com
//原生的http 在某些方面表现不足以应对我们的开发需求
//所以我们就需要使用框架加速我们的开发效率
//这里我们学习express为主

npm install -S express


修改完代码自动重启(nodemon第三方工具)
 我们这里可以使用一个第三方命令行工具 nodemon来帮我们解决批犯修改代码重启服务器的问题
 nodemon 是基于Node.JS开发的一个第三方命令行工具，我们使用的时候需要地理安装

 npm install --global nodemon
 所有需要 --global 来安装的包都可以在任意目录执行
 安装完毕之后，使用:
 之前  node app.js
 使用nodemon
 nodemon app.js
 只要是通过nodemon app.js 启动的服务，则他会监视你的文件变化，当文件变化的时候，自动帮我们重启服务器
 有点类似我们常说的热加载 但是不一样nodemon我们需要手动刷新下浏览器,知识服务器不需要我们重新启动了

 在原生中使用art-template
 const artTemplate = require('art-template');
artTemplate.defaults.root = 'views'; //设置读取那个目录下，如果不在这个目录就写绝对路径
artTemplate.defaults.extname = '.html';//设置后缀名为.html才解析  默认是.art

let html = artTemplate('publish',{msg:'请输入名字'});  //返回字符串
return res.end(html);

##在expres中使用mysql实例
var mysql      = require('mysql');
//配置连接项
var connection = mysql.createConnection({
  host     : '127.0.0.1',
  user     : 'root',
  password : '123456',
  database : 'users'
});
 //创建实例
connection.connect();
 //查询语句
connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});
 //关闭链接
connection.end();


 模板引擎
 在express中使用art-template:
 //安装：
 npm install --save art-template
 npm install --save express-art-template
 //配置：
 var express = require('express');
 var app = express();
 //第一个参数表示，当渲染以 .art 结尾的文件的时候，使用art-template模板引擎
 //express-art-template 是专门用来在Express中把art-template 整合到express中
 //虽然外面不需要记载 art-template 但是也必须要安装
 //原因就在于 express-art-template 依赖于 art-template
 //当渲染的文件后缀是 .art 结尾的(可以修改html这种也可以) 就使用art-template
 app.engine('html', require('express-art-template'));

 //Express 为 Response 响应对象提供了一个方法: render

 //render 方法默认是不可以使用，但是如果配置了模板引擎就可以使用了
 //res.render('html模板名',{模板数据});

 //第一个参数不能写路径，默认会去项目中的 views 目录查找该模板文件
 //也就是说 Express 有一个约定：希望开发人员吧所有的视图文件都放到views 目录中

 //如果想要修改默认的 views 的目录，则可以：
 app.set('views',render函数的默认路径);

 //使用：
 app.get('/',function(req,res){
   //express 默认会去项目中的 views 目录找 index.html
   res.render('index.html',{title : 'hello world'});
 })


//一些模块  模块很多  多看文档吧(注意)
//mime(第三方)
const mime = require('mime');//调用mime.getType('路径+文件全称')可以返回文件对应的类型
let type = mime.getType('路径+文件全名');
res.setHeader('Content-Type',type);//设置请求头中的浏览器解析该文件的类型
//url(原生)
const url = require('url');
let obj = url.parse('路径');//console.log(obj) 可以查看解析路径的对象 其中 query  pathname 我们常常用到
//path(原生)
const path = require('path');
let cc = path.join(__dirname,'../index'); //拼接字符串 我们常用来拼接绝对路径加相对路径，
//最后返回我们需要的路径


 node原生获取get post数据的对象形式
 get:
 const url = require('url');
 let obj = url.parse(req.url,true);//方法可以看官方文档
 console.log(obj.query);//这个打印的就是url中参数的对象形式
 post:
 const qs = require('querystring');//xx=xx&yy=yy 这种形式的字符串 调用parse方法转对象
 //默认是以  &  =  分隔的  看文档可以设置
 let data = '';
  req.on('data',(chunk)=>{
    data += chunk;
  })
  req.on('end',()=>{
    //获取数据的对象形式
    // console.log(data);
    let cc = qs.parse(data);
    console.log(cc); //这个打印的就是url 请求体中的参数的对象形式
  })
  //因为post数据可能会很大所以采用的是分段传输的方式,所以我们需要用事件获取所有的数据

 Express 中的一些方法:

 //相当于  res.statusCode = 302; res.setHeader('Location','/'); res.end();
 res.redirect('/'); //重定向到首页

 //获取get请求参数
 req.query()// 返回的是kv对象

 //获取post请求参数(使用中间件 body-parser 再req.body 就可以获取到了)
 //Express没有提供直接的API获取post请求参数，我们使用中间件middleware来获取post请求参数
 安装：
 npm install --save body-parser

 配置和使用(例子):

var express = require('express')
var bodyParser = require('body-parser')
 
var app = express()

//配置 body-parser 获取post数据
//只要加入这个配置，则在 req 请求对象上会多出来一个属性： body
//也就是说我们可以直接通过 req.body 来获取表单 POST 请求体数据了


app.use(bodyParser.urlencoded({ extended: false })) //获取application/x-www-form-urlencoded格式的数据
app.use(bodyParser.json()) //获取application/json格式的数据
//加上上面两句话  req.body 就可以获取到post参数了 获取出来的也是kv对象
 
app.use(function (req, res) {
  res.setHeader('Content-Type', 'text/plain')
  res.write('you posted:\n')
  // 可以通过 req.body 获取 请求体 中的数据
  res.end(JSON.stringify(req.body, null, 2))
})


//开辟本地静态资源目录
app.use('/static',express.static('public'));
app.use('/node_modules',express.static('node_modules'));

art-template 子模板 与 模板继承
在模板中添加子模板语法
{{include './header.html'}}
{{include './header.html' data}}
子模板继承
{{extend './layout.art'}} //继承模板
{{block 'head'}} ... {{/block}} //在模板中挖坑   填坑的语法也是一样的
//请求返回跳转链接
res.redirect('/students')

package-lock.json//这个文件可以锁定项目依赖引用的版本号，npm install的时候防止更新到当前版本的最新版
// ^1.11.1   如果没有 lock 这个文件  会自动升级到 1.12.0    1版本中的最新的版本


//抛出异常 (return console.log(err)) 这是js语法
//1.阻止程序的执行
//2.把错误消息打印到控制台
throw err

//回调地狱(回调嵌套)  指的是 我想把很多个异步操作按照我的顺序执行，那就必须要在异步操作的回调函数中嵌套
//这样做的后果是 代码很丑陋，并且后期很难维护

//为了解决以上编码方式带来的问题（回调地狱嵌套），所以在ES6中新增了一个API：Promise
Promise 本身不是异步的，但是里面封装的方法可能是异步的
promise 一旦创建出来就会立即执行

path路径模块
 path.basename  //获取一个路径的文件名（默认包含扩展名）
 path.dirname   //获取一个路径中的目录部分
 path.extname   //获取一个路径中的扩展名部分
 path.parse     
 //把一个路径转为对象
   root 根路径
   dir  目录
   base 包含后缀名的文件
   ext  后缀名
   name 不包含后缀名的文件

  path.join  //当你需要进行路径拼接的时候，推荐使用这个方法


  Node中的其他成员
  在每个模块中，除了require\rxports等模块相关API之外，还有两个特殊的成员
  1.__dirname 动态获取  可以用来获取当前文件模块所属目录的绝对路径
  2.__filename 动态获取  可以用来获取当前文件的绝对路径

  node中 fs.readFile  文件操作的文件路径 找的不是当前文件的相对路径 而是 执行node命令的路径
  fs.readFile('./a.txt',function(err,data)) //'./a.txt'就指的是执行node命令的路径下查找a.txt文件
  所以，在文件操作中用相对路径是不可靠的，我们可以采用绝对路径的方式

  webpack 依赖
  npm i babel-loader babel-core babel-preset-es2015 babel-plugin-transform-runtime -D







