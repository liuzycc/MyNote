/**
 * 箭头函数
 * 
 * 特点:
 * 1.箭头函数中 this 指向永远和箭头函数外部 this 保持一致
 * 2.不可以当做构造函数使用
 * 3.不可以使用arguments  可以使用 rest 来代替
 */


 //原本  没有参数
 let fn = function(){
   return 'foo';
 }
 //没有参数的语法
 let fn = () => 'foo';




 //原本  一个参数
 let fn = function(c){
   return c;
 }
 //箭头函数
var fn = (c) => { return c }
var fn = (c) => c;
var fn = c => c;

//原本  多个参数
let add = function(a,b,c){
  return a + b + c;
}
//箭头函数
let add = (a,b,c) => a + b + c;
let add = (a,b,c) => {
  return a + b + c;
}








