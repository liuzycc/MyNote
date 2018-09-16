##**********************
typeof:

 一般只能返回如下几个结果："number"、"string"、"boolean"、"object"、"function" 和 "undefined"。
对于 Array,Null 等特殊对象使用 typeof 一律返回 object，这正是 typeof 的局限性

instanceof:
 运算符用来检测 constructor.prototype 是否存在于参数 object 的原型链上。

 [] instanceof Array  //返回true
 a instanceof b?alert("true"):alert("false");   //a是b的实例？真:假




不同数据类型的Object.prototype.toString方法返回值如下。

数值：返回[object Number]。
字符串：返回[object String]。
布尔值：返回[object Boolean]。
undefined：返回[object Undefined]。
null：返回[object Null]。
数组：返回[object Array]。
arguments对象：返回[object Arguments]。
函数：返回[object Function]。
Error对象：返回[object Error]。
Date对象：返回[object Date]。
RegExp对象：返回[object RegExp]。
其他对象：返回[object Object]。
也就是说，Object.prototype.toString可以得到一个实例对象的构造函数。

Object.prototype.toString.call(2) // "[object Number]"
Object.prototype.toString.call('') // "[object String]"
Object.prototype.toString.call(true) // "[object Boolean]"
Object.prototype.toString.call(undefined) // "[object Undefined]"
Object.prototype.toString.call(null) // "[object Null]"
Object.prototype.toString.call(Math) // "[object Math]"
Object.prototype.toString.call({}) // "[object Object]"
Object.prototype.toString.call([]) // "[object Array]"
