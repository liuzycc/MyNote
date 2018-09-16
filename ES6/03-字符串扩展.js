/**
 * API 提升
 */

 let str = 'hello word';
 str.includes('hell');  //是否包含
 str.startsWith('1he');//判断是否是某个字符串开头的
 str.endsWith('ord'); //判断是否是以某个字符串结尾的
 str.repeat(3); //返回三次字符串的拼接

let str1 = '11';
str1.padStart(6,'0'); //头部补全  共6位
str1.padStart(10,'5'); //尾部补全  共10位

/**
 * 模板字符串
 */

 let data = {
   name : '张三',
   age : 18
 }

 let str2 = `
      <ul>
        <li>${data.name}</li>
        <li>${data.age}</li>
      </ul>
 `;
 console.log(str2);