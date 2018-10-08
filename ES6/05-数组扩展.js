/**
 * 数组扩展
 * Array.findIndex()返回索引
 */

 let student = [
  {id:120,name:'tom'},
  {id:121,name:'tony'},
  {id:122,name:'allen'},
 ];

 student.findIndex(function(value,index,arr){
   return value.id = 121;
 })

 //获取索引返回  1   如果不存在则返回 -1
