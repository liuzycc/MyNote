/**
 * 数组解构赋值
 */

  let arr = ['张三',18,'haha'];
  let [name,age,gender] = arr;
  //如果是不对等的情况
  let [name,age,gender,cc] = arr;
  //cc  是 undefinde
  let [name,age]  = arr;
  //赋值的就是arr中前两项

  /**
   * 对象解构赋值
   */

   let obj = {
     name : '张三',
     age : 18,
     say(){
       console.log('哈哈');
     }
   }

   let {name,gender,age} = obj;
   let{name:name1,gender:gender1123,age:age} = obj
//考虑情况：1.解构不对等 2.多层解构