/**
 * const 基本与 let 相同  只不过是声明的是常量  内存地址不能改变
 */

 const a = 10;
 a = 20; //报错



 const b = {
   name:'lzy',
   cc:'dd'
 }
 b.dd = 'haha'; //因为是引用类型，这样写没问题