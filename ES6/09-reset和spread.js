/**
 * reset和spread
 */

 //reset 剩余运算符

 //解构赋值
 let [a,...arr] = [1,2,3,4];
 //a  1   arr [2,3,4]

 //参数不确定
 //原本
//  let fn = function(a,b,c){
//   return arguments;
//  }

let fn = (...arg) => {
  return args;  //返回是个参数集合的数组形式
}

//spread 展开运算符

/**  合并数组 */
let arr1 = [1,2],arr2 = [3,4];
let [...arr1,...arr2]; //[1,2,3,4]

/**  转化伪数组  */
let nodeList = document.querySelectorAll('div');
let array = [...nodeList];