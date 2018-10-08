/**
 * Map
 * 
 * JavaScript 的对象（Object），本质上是键值对的集合（Hash 结构 就是 k-v结构），
 * 但是传统上只能用字符串当作键。这给它的使用带来了很大的限制
 */

const m = new Map();
const o = {p: 'Hello World'};

m.set(o, 'content')
m.get(o) // "content"

m.has(o) // true
m.delete(o) // true
m.has(o) // false


//例子
const items = [
  ['name', '张三'],
  ['title', 'Author']
];

const map = new Map();

//这里 ([key, value])  是解构赋值
items.forEach(
  ([key, value]) => map.set(key, value)
);