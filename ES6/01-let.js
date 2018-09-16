/**
 * let  (块级作用域)
 * 1.不存在变量提升
 * 2.不能重复定义在同一作用域内
 * 3.{}内被认为是一个块级作用域
 * 4.存在暂时性死区
 */
if(true){
  let a = 1;
  var b = 2;
}
//console.log(a) ReferenceError: a is not defined
//console.log(b) 2


function cc(){
  console.log(a);  //报错ReferenceError
  let a = 10;
}