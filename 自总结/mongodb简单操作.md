#mongodb 安装完成之后


#启动：
mongodb 默认使用执行  mongod 命令所处盘符根目录下的 /data/db 作为自己的数据存储目录
所以咋及第一次执行该命令之前先自己手动新建一个 /data/db
mongod

#修改默认的数据存储目录，可以
mongod --dbpath=数据存储目录路径

#停止:  控制台就是cmd
在开启服务的控制台,直接 Ctrl+c 即可停止服务
或者直接关闭开启服务的控制台也可也

#连接和退出数据库

#链接：(mongo)
该命令默认链接本机的 MongoDB 服务
mongo

#退出：
在连接状态输入  exit 退出连接

#基本命令
 show dbs
  查看显示所有数据库
 db
  查看当前操作的数据库
 use 数据库名称
  切换到指定的数据库（如果没有会新建）
 插入数据

#在node中如何操作MongoDB数据库(查看node.js)
#使用官方的 mongodb 包来操作
//https://github.com/mongodb/node-mongodb-native

#这里我们使用 第三方 mongoose 来操作 MongoDB 数据库
第三方包：mongoose基于 MongoDB 的官方包进行的再一次封装

#使用的是Mongoose 第三方的 对MongoDB源码高度封装的插件

#起步:
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

//1.链接数据库
//指定链接的数据库
mongoose.connect('mongodb://localhost/test',{useMongoClient:true});

//2.设计文档结构(表结构)
//字段名称就是表结构中的属性名称
//约束的目的是为了保证数据的完整性，不要有脏数据
var userSchema = new Schema({
  username:{
    type:String,
    require:true //必须有 （不能为空）
  },
  password:{
    type:String,
    require:true
  },
  email:{
    type:String
  }
})
//3.将文档结构发布为模型
// mongoose.model 方法就是用来将一个架构发布为model
// 第一个参数：传入一个大写名词单数字符串用来表示你的数据库名称
//     mongoose 会自动将大写名词的字符串生成 小写复数 的集合名称
//       例如这里的 User 最终会变为 users 集合名称
// 第二个参数：架构 Schema
//
// 返回值：模型构造函数
var User = mongoose.model('User',userSchema);

//4. 当我们有了模型构造函数之后，就可以使用这个构造函数对 users 集合中的数据为所以为了（增删改查）

#添加一条数据
// 添加数据
var admin = new User({
  username:'刘子毅',
  password:'123456',
  email:'552019419@qq.com'
})

admin.save(function(err,ret){
  if(err)
  {
    console.log('保存失败');
  }
  else {
    console.log('保存成功');
    console.log(ret);
  }
})

#查询所有 与 条件查询 (如果查询不到返回 null )   （find({},fn)  findOne({},fn)）
#(查询全部 返回的结果是二维数组的形式  就是  一个数组 元素是对象的形式)
#(按条件查询  如果是一条数据 返回的结果是一个对象,不是数组的形式，，， 如果是多条数据 返回的也是二维数组的形式)
// 查询 所有
User.find(function(err,ret){
  if(err)
  {
    console.log('查询失败');
  }
  else {
    console.log(ret);
  }
})

// 查询  刘子毅那条数据
User.find({
  username:'刘子毅'
},function(err,ret){
  if(err)
  {
    console.log('查询失败');
  }
  else {
    console.log(ret);
  }
})

//查询单个数据
User.findOne({
  password:'123456'
},function(err,ret){
  if(err)
  {
    console.log('查询失败');
  }
  else {
    console.log(ret);
  }
})
#根据条件删除一个
User.findOneAndRemove({options},callback)
#根据Id删除一个
User.findByIdAndRemove(id,{options},callback)
#删除 删除所有
//删除
User.remove({
  username:'张三'
},function(err,ret){
  if(err)
  {
    console.log('删除失败');
  }
  else {
    console.log('删除成功');
    console.log(ret);
  }
})

#更新所有
Model.update()
#更新指定条件一条
Model.findOneAndUpdate()
#更新 根据Id更新
//更新
//这个是根据Id更新
//第一个参数  数据的ID
//第二个参数  要修改字段的对象
//第三个参数  回调函数 接收结果
User.findByIdAndUpdate('5b614ccebd110221e47a67af',{
  password:'456'
},function(err,ret){
  if(err)
  {
    console.log('更新失败');
  }
  else {
    console.log('更新成功');
    console.log(ret);
  }
})

