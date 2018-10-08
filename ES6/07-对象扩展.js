/**
 * 对象扩展
 * 
 * 写法简写
 */

 let birth = '2000/01/18';
 let obj = {
   name : 'lzy',
   
   //等同于birth:birth
   birth,

   //等同于hello: function()...
   hello(){
     console.log('我的名字是：',this.name);
   }

 }

 /**
  * Object.keys()  es5，Object.values() es6 , Object.entries() es6
  */

  //1.Object.keys()  es5    返回一个数组，成员是参数对象自身的（不含继承的）所有可遍历（enumerable）属性的键名
  var obj = { foo: 'bar', baz: 42 };
  Object.keys(obj)
  // ["foo", "baz"]

  //2.Object.values()  es6   方法返回一个数组，成员是参数对象自身的（不含继承的）所有可遍历（enumerable）属性的键值对数组
  Object.values(obj);
  //["bar","42"]

  //3.Object.entries() es6   方法返回一个数组，成员是参数对象自身的（不含继承的）所有可遍历（enumerable）属性的键值对数组
  Object.entries(obj);
  // [
  //   ["foo","bar"],
  //   ["baz",42]
  // ]




  let {keys, values, entries} = Object;  //实例化方法
  let obj = { a: 1, b: 2, c: 3 };
  
  for (let key of keys(obj)) {
    console.log(key); // 'a', 'b', 'c'
  }
  
  for (let value of values(obj)) {
    console.log(value); // 1, 2, 3
  }
  
  for (let [key, value] of entries(obj)) {
    console.log([key, value]); // ['a', 1], ['b', 2], ['c', 3]
  }



  /**
   * Object.assign() //合并多个对象   属于浅拷贝不是深拷贝
   */

   let a = {aa:[1,2,3]};
   let b = {bb:1};
   let c = {cc:10};

   Object.assign(a,b,c); //{aa:[1,2,3], bb:1, cc:10}


