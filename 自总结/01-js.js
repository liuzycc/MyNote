js组成部分
- ECMAScript：核心语法
- BOM：（Browser Object  Model）//浏览器对象模型，提供了一套操作浏览器的工具。
- DOM：（ Document   Object   Model） //文档对象模型，提供了一套操作网页的工具。

script标签属性
  async  //异步 立即下载，下载完了就执行
  defer  //异步  等到文档显示完了在执行，只有外链可用
  sync   //同步 立即下载，下载完了就执行


  alert();      //弹出对话框  转义字符\r回车 \n换行 \\ \"等
  confirm();      //弹出对话框 多了一个取消按钮 点击确定返回true 取消false
  prompt();         //接收用户输入的信息 window.prompt("提示信息","默认值") 点击确定返回一个字符串 点击取消返回一个null
  console.log();    //在控制台输出消息 JS调试试用
  document.write(); //在页面输出信息  可以识别标签 
  console.dir();    // 显示出一个对象的所有属性和方法 获取的dom元素用于展开查找属性方法

  变量的命名规则和规范
  变量名可以由数组、字母、下划线、$符号组成，但不能以数字开头
  变量名不能使用关键字或保留字
  变量名区分大小写
  
  规范
  变量名一般是小驼峰形式

  基本数据类型 
  number      //数字类型 整型数字 浮点型数字 NaN
  string      //字符串类型 (""和0的内容是相等的 ==为true ===为false)
  boolean     //布尔类型(true=1 false=0) (转换最后为false的值有 0 NaN "" undefined null)
  undefined   //变量未初始化(定义变量 未赋值) undefined+1 结果是NaN   void 0 === undefined 结果为true void 0防止undefined重写 省3个字节
  null      //值为空 用来销毁变量(var n1=null; n1用typeof判断是object类型)(null==undefined 为true  ===为false)(var a = null + 1;//结果是 1 number类型)
复杂数据类型(引用数据类型)：
- 数组 Array
- 日期 Date
- 函数 function
- object      //对象
...

alert(typeof(x))   //判断数据类型 它将返回一个字符串 "number" "string" "boolean" "undefined" "objct"(null 数组 对象) "function"
alert(typeof x) 
+         //2个数字类型相加得到数字类型，其他相加都是连接作用得到字符串
console.log(1+true);//加法的隐式转换 true为1
-         //得到数字类型（隐转），有非数字字符串得到NaN仍是数字类型
/     //有非数字字符串得到的是NaN,0做为除数的时候得到Infinity(无限大),均是数字类型 
转意字符 \t制表 \b空格 \f进纸 \\斜杠 \r回车 \n换行

console.log(Number.MIN_VALUE);//数的最小值 是正数
console.log(Number.MAX_VALUE);//数的最大值

//不要比较2个浮点数是否相等,非要比较 *10 parseInt()在比较

转数字类型
  n2=Number(n1);   //不能转数字开头的非纯数字字符串
    console.log(Number("123")); //123
    console.log(Number(""));  //0
    console.log(Number(true));  //1
    console.log(Number(false)); //0
    console.log(Number(undefined)); //NaN
    console.log(Number(null));  //0
    console.log(Number([]));  //0
    console.log(Number([3])); //3
    console.log(Number([3,2])); //NaN
    console.log(Number({}));  //NaN
  n2=parseInt(n1); //取整 能转数字开头的非纯数字字符串
    console.log(parseInt('123.5asd'));//123
    console.log(parseInt(""));//NaN
    console.log(parseInt(true));//NaN
    console.log(parseInt(false));//NaN
    console.log(parseInt(undefined));//NaN
    console.log(parseInt(null));//NaN
    console.log(parseInt([]));//NaN
    console.log(parseInt({}));//NaN
    console.log(parseInt("0x10"));//16
    console.log(parseInt("a",16));//10
    console.log(parseInt("010"));//10
    console.log(parseInt("010",8));//8
  n2=parseFloat(n1); //能转数字开头的非纯数字字符串 parseFloat(".1") 转为0.1
转字符串类型
  n2=n1.toString();//12.toString()，大部分都能转只有null和undefined不能转
  n2=String(n1);   //String(变量) ，null和undefined能转
var n2="a"+1;    //1隐式转换
转布尔类型
  n2=Boolean(n1);  //绝大多数为true,只有0,NaN,"",undefined,null为false
  !!"12as"  
  if(){}    //()内隐式转换
  isNaN(x)  //是NaN 字符串 对象 undefined 结果为true,否则false
  a instanceof Array //用来判断 a对象是不是谁的对象 是返回true
  a.constructor  //返回的是当前变量的构造器是谁
  8|1 //值为9  （|）表示，是直接对数字的二进制形式进行运算。
  //8的二进制形式是1000
  //1的二进制形式是0001
  //相加  1001  二进制转十进制 结果为 9

  && //只要有1个false结果就为false,否则为true
  || //只要有1个true结果就为true,否则为false  
//短路运算符 || 遇到true就返回，没有就返回后面的 && 遇到false就返回，没有就返回最后一个
//短路运算，如果有1个数不是Boolean类型，必须有返回值 返回满足自己特点的那个值 都不满足 没办法只能返回第二个值
使用默认值 var n1=Number("A");
           n1 = n1 || 0 //n1为undefined null NaN等均为false 则n1=0取到默认值了 
  ++ -- 也自带隐式转换Number

  
运算符的优先级/*
  ()
  ++ -- !
  先* / % 后+ -         .号优先级高于*
  < <= > >=
  == != === !==
  && ||                && 的优先级高于 ||    (1||'a'&&2)--> 1
  ?
  =
 */ //大致总结 （）优先级最高 运算 高于 判断 .高于* ?优先级倒数第2

 break //跳出当前for循环，结束
 continue //跳过本次循环，循环仍继续

 switch语句:

 switch(传入的值){
  case 值1:
    //执行语句
	break;
  case 值2:
    //执行语句
	break;
  case 值3:
    //执行语句
    break;
  /*...*/
  default:
    //执行语句
    break;	
}

循环语句:
while(条件表达式){
  //循环体
}
//当条件成立时，会执行循环体中的代码。
//然后再返回判断条件是否成立，周而复始。直到条件不成立时，结束当前循环


do {
  //循环体
}while(条件表达式);
//先执行一次循环体，然后是否周而复始的执行循环体，根据条件表达式是否成立决定。

//每个表达式用分号;分割，千万不要写成逗号,
for(初始化表达式1;条件表达式2;自增表达式3){
  //循环体4
}
//执行顺序： 1 2 4 3 → 2 4 3 → 2 4 3 ...

数组 有序 可以存放任何类型 数组长度可以动态调整
 var n1=new Array(2); //通过构造函数 创建数组 长度是2 一个数是长度，两个数已上都是赋值
 var n1=[];      //通过字面量 创建数组
   n1[0]=123;    //给数组赋值，从0开始，数组中的数据可以是任何类型 
 var array=[1,2];    //定义数组赋值
 array[1]; array["1"];  //获取数组中的元素
 array.length=3;     //设置数组长度 超出长度的数值会被删掉 即便长度恢复也没用
 delete array[1];    //删除数组中元素的内容 如访问为undefined
 for(var i=0;i<n2.length;i++){ //数组的遍历
   console.log(n2[i]);
 }
 for (let i = 0; i < index; i++) {
   --index // --index 会对自身操作 反过来会影响循环次数
   index - 1 // 不会对自身操作 不会影响循环次数
 }
 var n3=n1.concat(n2); //数组的合并
 var n3=n1.join("");     //将数组中每个值之间添加字符，返回字符串
二维数组 var arr = [1,[2,3],4]; //数组中的元素还是数组 这就是二维数组
    arr[1][0]    //获取二维数组中的值
 function fn(x,y){   //封装函数
   var c=0;for (){}//函数体
   return c; //返回值 后面的不会执行
   console.log(c);
 }

  // 预解析 函数中的变量提升 会提升到函数里面的最上面 不会提升到其他作用域中
  // 预解析的时候 如果有多对script标签 里面函数名相同 函数提升 只会提升到 script标签里面的最前面
  // 先变量提升 在函数提升
  var a = b = 1;
  delete a;// a是全局变量 delete 删不掉
  delete b;// b是隐式全局变量 能删掉
 函数的两种定义方式
 函数的声明 function f(a,b) {
       return a+b;
     }
 函数表达式 var f=function (a,b) { //函数表达式 不会发生函数提升
       return a+b;
     };        //有分号，后面匿名函数，表达式在调用前
 调用匿名函数 f();
 
 自调用函数 特点:一次性的
 (function (){
 
 })();

 //面向过程 和 面向对象 都是一种编程思想
//面向过程 注重 细节 过程
//面向对象 注重 结果 
//面向对象 特征 ：继承 封装 多态
arguments 对象 是一个伪数组 获取函数中参数 所构成的数组（既然是数组就能得到数组的长度 循环 遍历 取值）
arguments.callee(x) 引用当前正在运行的函数(递归的另一种方式)
创建对象:三种方式
1.通过系统构造函数 
var obj = new Object();
obj.name = '小明';
2.通过自定义构造函数（1.开辟内存空间存储对象 2.把this设置为当前对象 3.添加属性方法 4.自动返回对象）
function Ren(name,sex){
this.name = name;
this.sex = sex;
this.look = function (){
  console.log(this.name);
};
}
var obj = new Ren('小明',true);
3.通过字面量的方式（这里用的json数据格式）
var obj = {
'name' : '小明',
'sex' : true,
'look' : function (){
  console.log(this.name);
}
};

数组常用方法：
var arr = ['张三','李四','王五'];
var result = arr.toString(); //数组转字符串
pop()\push()\   //删除最后一个/在最后添加一个
shift()\unshift() //删除第一个/在最前面添加
arr.reverse();//数组反转  字符串反转
arr.sort();//数组排序   参数是个回调函数  function(a,b){return a-b} 从小到大
arr1.concat(arr2);//返回一个全新的数组  两个数组合拼
数组名.slice(startIndex,endIndex);  arr.slice(2,4);//数组截取  返回截取的数组不改变原数组
数组名.splice(startIndex,count,数据,数据,数据...);//数组增删改  会修改原数组
数组名.indexOf(数据)、数组名.lastIndexOf(数据);//从数组中查找  返回找到的索引  没找到返回-1
数组名.join('-');//返回字符串  默认以','链接  
数组.reduce(function(pre,curr){return pre+curr},0)  //返回数组相加的和
清空数组的方式：
var arr = [22,33,44,55];
// 方式1 推荐 
arr = [];
// 方式2 
arr.length = 0;
// 方式3
arr.splice(0, arr.length);

字符串常用方法:
// 1 字符方法
charAt()    	//获取指定位置处字符
charCodeAt()  	//获取指定位置处字符的ASCII码
str[0]   		//HTML5，IE8+支持 和charAt()等效 【 重点】
// 2 字符串操作方法
concat()   		//拼接字符串，等效于+，+更常用
slice()    		//从start位置开始，截取到end位置，end取不到 【重点】
substring() 	//从start位置开始，截取到end位置，end取不到
substr()   		//从start位置开始，截取length个字符
// 3 位置方法
indexOf()   	//返回指定内容在元字符串中的位置  【重点】
lastIndexOf() 	//从后往前找，只找第一个匹配的
// 4 去除空白符（空格）  
trim()  		//只能去除字符串前后的空白
// 5 大小写转换方法（针对的是字母）
toUpperCase() 	//转换大写 重点
toLowerCase() 	//转换小写 重点
// 6 其它
search()
replace()  
split(s)  
fromCharCode()
// String.fromCharCode(101, 102, 103);	 //把ASCII码转换成字符串

Math对象常用属性和方法:
- Math.abs(数字);	获取一个数字的绝对值
- Math.round(数字);   四舍五入
- Math.PI;    π
- Math.ceil(数字);    向上取整
- Math.floor(数字);  向下取整
- Math.random();    随机数[0,1);
- Math.max(数字,数字,数字...);    求最大数
- Math.min(数字,数字,数字...);     求最小数

常用的Date类型对象方法:

- 获取 和 设置 年月日
      日期对象.getFullYear() / 日期对象.setFullYear(数字) // 年
      
      日期对象.getMonth() / 日期对象.setMonth(数字)   // 月
      注意：获取月份是从0开始的
      
      日期对象.getDate() / 日期对象.setDate(数字)  //日
- 获取 和 设置 时分秒
      日期对象.getHours()  /  日期对象.setHours(数字)  // 时
      
      日期对象.getMinutes()  /  日期对象.setMinutes(数字) // 分
      
      日期对象.getSeconds()  /  日期对象.setMinutes(数字) // 秒
      
      对象. getMilliseconds()  / 对象.setMilliseconds(数字) // 毫秒
- 获取 星期数 
      日期对象.getDay();   // 0-6（周日0到周六6） 不能够设置，原因是周天是由今天的日期决定的。
- 获取1970年至指定时间的 总毫秒数
      日期对象.getTime()  /  日期对象.setTime(数字); 


  webAPI

DOM文档树
注意：树桩上的每一个分支都是对象， 也可 叫做 节点对象（node）

节点对象：元素（标签）、属性（标签的属性）、文本（内容）

每一个节点都是一个对象  顶级文档是  document

获取DOM元素
document.getElementById('标签的id值');   【推荐使用】
document.getElementsByTagName('标签名');  【推荐使用】
document.getElementsByName('标签的name值');【了解】
document.querySelector('选择器'); 【不考虑IE低版本，移动端，推荐使用】
document.querySelectorAll('选择器'); 【不考虑IE低版本，移动端，推荐使用】
操作元素的基本属性
获取
元素.属性名
console.log(div.title);  // 获取属性对应的值 
设置
元素.属性名 = 值
div.title = 'hello';     // 设置（更改）这个div的title属性的值
操作非表单元素属性
元素.className = 值
元素.className  //获取
元素.innerHTML
元素.innerText

事件：
事件三要素: 事件源、事件类型、事件应用程序
元素.onclick = function(){}

操作表单元素的属性
元素.value
元素.checked//是否选中
元素.disabled//是否禁用
元素.selected//操作下拉框选项是否选中
元素.readOnly//操作表单元素 是否只读

操作表单自定义属性
节点对象.getAttribute('属性名')
节点对象.setAttribute('属性名','值')
节点对象.removeAttribute('属性名')

操作元素的样式
元素.style.width
var box = document.getElementById('box');
box.className = 'aa bb';//设置
box.className.replace('aa','AA');//替换

元素节点之间的关系(查找节点)
获取父节点
元素节点.parentNode
获取子节点
节点.children
获取父元素中子元素第一个和最后一个节点(有兼容性)
父节点.firstElementChild
父节点.lastElementChild
获取上一个 和 下一个兄弟节点(有兼容性)
节点.previousElementSibling;
节点.nextElementSibling;

创建元素(创建节点)
document.createElement('li')
元素.innerHTML = "内容"

添加元素
父节点.appendChild(新的子节点);//父元素的最后添加一个节点
父节点.insertBefore(新的节点,旧的子节点) //将一个新的节点插入到父节点中的某个子节点的前面

删除元素
父节点.removeChild(子节点) //删除父元素中的指定的子节点

替换元素
父节点.replaceChild(新的节点,旧的子节点) //替换子节点

事件监听
事件目标.addEventListener(事件类型,事件处理程序,是否捕获); //这里默认是 true 冒泡

事件流
事件流的三个阶段  事件捕获、目标事件、事件冒泡


事件委托(代理)
事件目标.addEventListener(事件类型,要委托的DOM对象,事件处理程序,是否捕获);
//主要是利用事件冒泡的原理进行委托(代理)

事件对象兼容写法:
document.onclick = function (e) {
	// 事件对象的兼容处理
	var _event = e || window.event;     
};

原生JS事件监听写法：
/*
    功能：绑定事件
    参数：
      node 事件目标 节点对象
      type 事件类型 string 不加on
      handler 事件处理程序 函数
    返回值：无
  */
 function addEvent(node, type, handler){
  if (node.addEventListener) { // 检测浏览器是否支持标准方式
    // 支持
    node.addEventListener(type, handler);
  } else {
    // 不支持
    node.attachEvent('on' + type, handler);
  }
}

阻止浏览器默认行为
e.preventDefault() //标准
e.returnValue = false //IE低版本
阻止事件冒泡
e.stopPropagation() //标准
e.cancelBubble = true//IE低版本

鼠标事件对象的属性和方法：
e = event || window.event //事件对象兼容写法
e.offsetX   e.offsetY   //表示鼠标距离当前元素的距离
e.clientX   e.clientY   //表示鼠标在可视区域的距离
e.pageX     e.pageY     //表示鼠标相对于文档的距离

e.target  //获取当前触发事件的元素
e.target.nodeName  //获取当前触发事件的元素的名称 的大写字母  例如： 'IL'

Event DOM 事件DOM 可实现用户与网页互动 当事件发生时执行相关代码
  //事件三要素：有事件源（作用在谁） 触发（条件） 响应（结果）
window.onload   //当页面加载完成时. 如果不给window设置 只有body才有这个属性
  onunload  //页面关闭之后,谷歌不支持,IE8支持
  onclick   //当单击时触发事件
  onscroll  //当拖拽滚动条时
  onmouseover //当鼠标放上时
  onmouseout  //当鼠标移出时
// 1、onmouseleave、onmouseenter，鼠标进入到指定元素区域内触发事件，不支持冒泡，不包含子元素的区域。
// 2、onmouseout、onmouseover、鼠标进入指定元素触发事件，含子元素区域。
  onfocus   //当获得焦点时
  onblur    //当失去焦点时
  onsubmit  //当提交文本时
  onreset   //当重置表单时
  onchange  //当容改变时（用在下拉列表、上传文件）input内容改变时 需点击外面才判定改变
  onselect  //当选中文本时
  onresize  //当改变窗口大小时
  事件句柄属性 每个HTML标记都对应一个元素对象，元素对象的事件属性全小写

Event对象 //当事件发生时，向调用函数传递一个event参数，这个参数是一个事件对象
//该event对象中记录了当前事件发生的环境信息 如单机坐标等
//注意：这个event对象是短暂存在的，新的事件发生，新的even对象产生，原来的event对象消失

元素三大家族：

offset
元素.offsetTop   元素.offsetLeft   //表示相对于有定位的父元素的位置的距离，如果没有定位则相对body位置的距离
元素.offsetWidth   元素.offsetHeight  //表示元素的大小   width + padding + border
元素.offsetParent  //获取元素的最近的带有定位的上级元素

client
元素.clientTop   元素.clientLeft   //表示元素的border的厚度
元素.clientWidth  元素.clientHeight   //表示元素的 width + padding

scroll
元素.scrollTop  元素.scrollLeft    //表示元素被卷去的距离
元素.scrollWidth  元素.scrollHeight  //表示元素的  width + padding + 溢出的部分

BOM  中的顶级对象window

BOM中的location对象：
//location对象可以用来操作地址栏中的地址 
  location.scheme:通信协议
	//常用的http,https,ftp,maito等
  location.host:主机
	//服务器(计算机)域名系统 (DNS) 主机名或 IP 地址。	
  location.port:端口号
	//整数，可选，省略时使用方案的默认端口，如http的默认端口为80。
  location.path:路径
	//由零或多个'/'符号隔开的字符串，一般用来表示主机上的一个目录或文件地址。
  location.query:查询
	//可选，用于给动态网页传递参数，可有多个参数，用'&'符号隔开，每个参数的名和值用'='符号隔开。例如：name=zs
  location.fragment:信息片断
  //字符串，锚点.
  location.search:设置或返回url中的?开始的部分

BOM中的Navigator对象:
navigator.userAgent
通过userAgent可以判断用户浏览器的类型
navigator.platform
通过platform可以判断浏览器所在的系统平台类型.



 构造函数和对象:
- 构造函数，创建对象的模板。 比如系统提供的 Object 
- 对象，构造函数所创建的实例。 

创建对象： new 构造函数名();

Object对象创建:
var a = {
  c:1,
  d:'xx'
}
var b = new Object();

对象的操作:(对象操作)

- //设置对象的属性或方法【重点】
  对象.key = value;
  对象['key'] = value;

- //获取对象的属性或方法【重点】
  对象.key;
  对象['key'];

- //删除对象的属性或方法
  delete 对象.key;//若对象中没有某个属性时，访问返回undefined。
  //若对象中没有某个方法时，调用时报错

- //检测对象的属性或方法
  对象.hasOwnProperty(name);//返回布尔值，true有，false没有
  
- //检测对象的类型 【重点】
  对象 instanceOf 构造函数名 //返回布尔值，true表示属于，false表示不属于

  原型与原型链：
  //每一个构造函数都有一个原型
  构造函数名.prototype;

  构造函数、原型与实例三者关系：

  构造函数-->原型<--实例.__proto__
  实例--> new 构造函数

  原型链:
  构造函数-->原型-->原型的原型   构成原型链  终点是object  object的原型时null

  通过原型给Array对象扩展求和方法(通过原型方式拓展内置对象的方法)
  Array.prototype.getsum = function(){
    var sum = 0;
    for(var i=0;i<this.length;i++)
    {
      sum += this[i];
    }
    return sum;
  }


自调用函数(解决变量名污染全局，一般会使用window暴露到外面,方便调用)
(function(){})();  一定要加';'
// 创建一个数组对象
var arr = [11,22,33];
// 调用getSum方法
var r = arr.getSum(); 
console.log(r); // 66

 
 改变this指向:
 bind(isthis,a,b,c)//返回全新的函数  等待调用
 call(isthis,a,b,c)//借用构造函数  直接执行  
 apply(isthis,[a,b,c])//借用构造函数  直接执行 

 this指向问题：
 5种情况下
 1、普通函数调用时，this指向window。
 例子：
      // 定义一个函数
      function fn () {
        console.log(this); 
      }
      // 调用
      fn();  // this→window

2、构造函数调用时，this指向当前所创建的对象
例子：
    // 构造函数
    function Student (name, age) {
      this.name = name;
      this.age = age;
      console.log(this); 
    }
    var stu1 = new Student('张三', '李四'); // this → 当前所创建的这个学生实例对象

 3、对象的方法调用时，this指向方法所属的对象。
 例子：
    // 构造函数
    function Student (name, age) {
      this.name = name;
      this.age = age;
      
    }
    // 原型中的方法
    Student.prototype.sayHi = function() {
      console.log(this);
      console.log( this === stu1);
    };
    var stu1 = new Student('张三', '李四'); 
    stu1.sayHi();  // this → stu1

 4、定时器中    this 指向全局window
例子：
    setInterval(function() {   // 省略了window
      console.log(this);
    }, 500);

 5、事件绑定的方法，this 指向事件源
 例子：
        box.onclick = function () {
          console.log(this);
        };


继承：子承父业//继承是基于原型的（原型的继承|借用构造函数继承|组合继承|拷贝继承）

对象继承：
例子：
// 声明两个对象
var obj1 = {name:'张三', age:18};
var obj2 = {
	name:'李四', 
	age:17, 
	sex:'男', 
	sayHi:function () {
		console.log('大家好,我叫' + this.name)
	}
}
// 把一个对象中的属性和方法，拷贝到另一个对象中
function extend (parent,child) {
  for (var key in parent) {
    if (child[key] === undefined) {
      child[key] = parent[key];
    }
  }
}
原型继承(工作中不会使用)：Student.prototype = new Person()   //工作中不会用到
//(缺点)可以继承方法，但是继承的属性是没有用的，继承的属性值不能动态生成


借用继承：call()\apply()  //（缺点）不能继承原型上的属性

组合继承(工作中不会使用)：  借用继承+原型继承 //(缺点)组合继承会出现烂尾的现象 
//当原型继承的时候，Person(公共的) 在Student的原型上会出现相对Student构造函数里重复的属性或者方法，并且值是undefined
//解决办法，不继承Person的实例，只继承Person的原型，这样不会出现烂尾的现象
//(最大的缺点)当给实例对象的原型新增加一个方法的时候，另一个实例对象也会出现这个方法

也叫组合继承但是不使用原型继承来继承原型上的方法：     
//对象继承+借用继承(工作中用这种方式来实现构造函数原型之间的继承)
1、利用call()方法继承公共Person构造函数中的属性
2、利用对象深拷贝的方法 继承公共Person原型上的方法

//对象的深拷贝
//parentObj 代表公共的原型(Person.prototype)   childObj要继承对象的原型(Student.prototype)
function deepCopy(parentObj,childObj)
{
  for(var key in parentObj)
  {
    if(childObj[key] === undefined)
    {
      if(parentObj[key] instanceof Array)
      {
        childObj[key] = [];
        deepCopy(parentObj[key],childObj[key]);
      }
      else if(parentObj[key] instanceof Object)
      {
        childObj[key] = {};
        deepCopy(parentObj[key],childObj[key]);
      }
      else {
        childObj[key] = parentObj[key];
      }
    }
  }
}

闭包：延长内部变量生命周期  GC不会回收会造成内存空间一直被占用
//闭包就是能够读取/设置其他函数内部变量的函数，
//闭包就是将函数内部和函数外部连接起来的一座桥梁
//函数中每次使用完都会被GC回收，每次执行函数中的内部变量的内存地址都会重新生成
解决闭包：使外部对内部的引用设置为null

递归（必须要有边界条件，不然会无限执行下去）： 减少代码量。  自己调用自己  但是在内存角度来考虑，没有任何优点
递归的三个阶段：
- 递归前进段
- 递归边界条件
- 递归返回段


// 把obj2中的属性或方法拷贝到obj1中
extend(obj2,obj1);
// 拷贝之后的obj1
console.log(obj1); // {name: "张三", age: 18, sex: "男", sayHi: ƒ}

 js转中文  中文转ASCII码
 decodeURIComponent('str')  ASCII码转中文
 encodeURIComponent('str')  中文转ASCII码

 正则表达式:JS高级第5天大纲详细资料

 正则表达式的组成:
- 普通字符abc  123
- 特殊字符(元字符、限定符、中括号)：正则表达式中有特殊意义的字符

元字符: 元字符就是，在正则表达式中具有特殊含义的字符。
\d
//匹配数字
\D
//匹配非数字
\w
//匹配字母或数字或下划线_
\W
//匹配非字母、数字、下划线_
\s
//匹配空白符（空格）
\S
//匹配非空白符
.
//匹配任意除了换行符之外的单个字符

限定符:控制字符出现的次数
注意：^正则表达式$  使用时，会对字符串整体校验，完全符合才能够匹配。否则，不匹配
n*
//匹配任何包含零个或多个 n 的字符串。n{0,}
n+
//匹配任何包含至少一个 n 的字符串。{1,}
n?
//匹配任何包含零个或一个 n 的字符串。{0,1}
n{x}
//匹配包含 x 个 n 的序列的字符串
n{x,}
//匹配包含至少 x 个 n 的序列的字符串。
n{x,y}
//匹配包含 至少x个 至多 y 个 n 的序列的字符串。
n$
//匹配任何结尾为 n 的字符串
^n
//匹配任何开头为 n 的字符串

中括号:一个中括号就代表一个字符，中括号的目的就是控制了一个字符的范围。
[abc]
//查找一个方括号之间的任何字符。
[^abc]
//查找一个任何不在方括号之间的字符。^在中括号中有取反的意思
[0-9]
//查找一个任何从 0 至 9 的数字。
[a-z]
//查找一个任何从小写 a 到小写 z 的字符。
[A-Z]
//查找一个任何从大写 A 到大写 Z 的字符。
[A-z]
//查找一个字母（包含大小写和下划线）
[\u4e00-\u9fa5]
//查找一个汉字

或模式:

特殊符号：正则1|正则2, 或者。 符合或两边其中一个就可以匹配。
如：google，baidu，bing;  // 匹配三种其中一种字符串
正则：^google|baidu|bing$

分组模式:

特殊符号：(正则);
组指的是一个小集体，分组就是将一个大集体可以分成几个小集体。
如：控制你的名字连续出现的次数，最少1次，最多3次
正则：^(bruce){1,3}$

贪婪模式和非贪婪模式:

贪婪模式，尽可能多的匹配
非贪婪模式，仅仅匹配一次
如：字符串  '<title>网页的标题</title>'    
贪婪模式：<.+>
非贪婪模式：<.+?>

修饰符:

→ g 
	g，全称global，有 全局 的意思，表示全局匹配。
	如： var reg = /hello/g;
→ i 
	i，全称ignore，有 忽视、忽略 的意思，表示匹配字母时，可以忽略字母的大小写。
	如： var reg = /hello/i;
→ gi 
	gi，全局匹配和忽略大小写一起使用。
  如： var reg = /hello/gi; 
  
  正则转义符:
  .在正则中表示特殊符号。去除.的特殊意义，需要转义：.

  正则案例：

验证邮箱： 
^\w{2,}@[0-9A-z]{2,}\.[A-z]{2,3}$
^\w{3,10}@[0-9A-Za-z]{2,10}\.(com|cn)$

验证身份证号：
^\d{17}[0-9Xx]$
^\d{17}(\d|X|x)$

验证手机号：
^1[538][0-9]\d{8}$
^1[345789]\d{9}$

js中使用正则表达式 【重要】：

var 变量 = new RegExp(“规则”,”修饰符”); 
var reg = new RegExp('\\d','g');

var 变量 = /正则表达式/;
var reg = /\d/g;

正则对象.test(字符串) ;  用于检测字符串是否匹配某个规则。返回true和false。 【重点 】

字符串对象方法相关正则使用：

- 字符串.match(正则对象); 重点
//获取匹配正则的子字符串，返回一个数组。 

- 字符串.replace(正则对象,替换后的内容);  重点
//替换所匹配正则的子字符串。返回替换后的字符串。

- 字符串.split(正则对象);
//按照正则规则拆分字符串，返回一个数组。

- 字符串.search(正则对象);
//获取第一个匹配正则的子字符串的位置。

 js操作css
    1. dom.style.width = 500px;
    2. dom.className = "red center"
    3. dom.classList  //获取类名对象
    //ECMA5新增加的与JQuery中的几乎一样
        * add()       //添加类名
        * remove()    //删除类名
        * toggle()    //切换类名
        * contains()  //判断时候存在类名
        * 
  js获取自定义对象属性
  dom.dataset()// 返回的是自定义属性的对象   自定义对象必须要是'data-' 开头的形式 不然获取不到
  JQ获取自定义对象属性
  JQdom.data()//返回的也是自定义属性的对象  也一定是要'data-'开头的
 1. dataset 只能存储 字符串  操作dom  (忘记了可以看F:\黑马49期就业班\10-乐淘全端项目\04-letao项目\day05\03-课程视频\06那天的视频)
 2. data() 存储任何任何东西（字符串 对象 函数 ） 不会操作dom
 $(box).data('fn',function(){console.log('123')})  这样存完 在dom 节点上不会显示出来，是存在内存中看不见，但是我们可以用
 document.querySelector('box').dataset.fn = function(){}  这样存完，在dom节点上显示的是[object,object] 这种形式的数据我们取出来也没有用
 以上是两个方法最大的区别  (注意)

  //浏览器端查看为 document.cookie
  //设置cookie  过期时间到2018,6,5
  document.cookie = "username3=lzy3;"+"expires="+new Date(2018,6,5)+";path=/";
  //封装设置cookie方法
  function setcookie(value,days)
  { 
    var exp = new Date();
    exp.setTime(exp.getTime() + days * 24 * 60 * 60 *1000)//设置过期天数
    document.cookie = 'username=' + name + ';' + 'expires=' + exp.toGMTString();
  }
  //获取cookie document.cookie
  // document.cookie
  // 结果为："name=12; username=13"
  //我们需要通过字符串出来的到我们想要的那条cookie记录



  获取上传文件数据(文件预览)(readAsDataURL文件读取器)
  var file = this.files[0];
  var read = new FileReader();
  read.readAsDataURL(file);
  //使用回调异步获取文件结果
  reader.onload = function(){
    reader.result;
  }

判断客户端网络状态的监听事件(h5c3第4天)
alert(window.navigator.onLine);//返回当前的网络状态 true false
// window的网络监听的事件 online 在线 offline 离线
window.addEventListener('online', function () {
  alert('网络已连接');
});
window.addEventListener('offline', function () {
  alert('网络已断开');
});
//JS一些零碎的API
图片预览(h5c3第4天)base64
      var file = this.files[0];
      //使用FileReader
      var read = new FileReader();
      read.readAsDataURL(file);
      //这里使用事件接收文件数据
      read.onload = function(){
        document.querySelector('img').src = read.result;
        //read.result 这个文件数据是二进制转码得到的
        //下面是数据形式，这种形式存在数据库中不需要存储文件，直接存字符串就可以了
        `data:image/png;base64,iVBORw0KGgoAAAANSxxxxxxxx`
      }
      # JSAPI（js给我们提供的现成的属性或者是方法）

      ## 1. 读取本地文件
      1. 获取文件 
      ```js
      document.querySelector("input").onchange = function() {
          var file = this.files[0]
      }
      ```
      
      2. 创建一个读取文件的对象
      ```js
      var reader = new FileReader();
      ```
      
      3. 开始读取文件
      ```js
      reader.readAsDataURL(file);
      ```
      
      4. 使用读取结果
      ```js
      reader.onload = function() {
          reader.result;
      }
      ```
      
      
      ## 2. 拖拽
      1. 事件
          1. ondragstart = function(event) {event.dataTransfer.setData("key", "value");}
          2. ondragover = function(event) {event.preventDefault()}
          3. ondrop = function(event) {event.dataTransfer.getData("key"} 
      
      2. 步骤
          1. draggable=true;
          2. event.dataTransfer.setData("key", "value");
          3. 让父盒子能够接收子盒子， 阻止默认事件
          4. 接收子盒子传递过来的值，并且把子盒子放入到父盒子。
      
      3. 拖拽实现文件的读取
          1. 阻止浏览器的默认事件
              document.ondragover = function(event) { event.preventDefault();}
              document.ondrop = function(event) {event.preventDefault();}
      
          2. 对于盒子
              1. 能够接收图片，默认不能接收  document.querySelector(".box").ondragover = function(event) { event.preventDefault();}
              2. ondrop = function(event) {
                  var file = event.dataTranfer.files[0]
                  ...
              }
      
      ## 3. 数据的本地存储(本地缓存)
      1. 方法
          1. window.localStorage.setItem("key", "value")
          2. window.localStorage.getItem("key")
          3. window.localStorage.removeItem("key")
          4. window.localStorage.clear();//删除所有localStorage中的k  就是清空 localStorage 所有的数据信息
      2. 注意事项
          1. localStorage只能存字符串
          2. 如果想要存数组或者是对象
              1. 存： 先转成字符串 JSON.stringfy(arr/obj)
              2. 取： 把字符串再转成数组，或者是对象 JSON.parse(str)
      3. sessionStorage  
              sessionStorage 与 localStorage 完全一样，唯一不一样就是 sessionStorage在用户
              关闭浏览器时清除，而localStorage则永久保存，不手动删除，就不会删除掉

      百度地图API使用查看H5C3第四天案例      
      ## 4. 判断网络状态
      1. 判断当前是否处于联网的状态
      ```js
      if(window.navigator.onLine) {
          alert("连网状态");
      }
      
      window.addEventListener("online", function() { alert("连上网了")});
      window.addEventListener("offline", function() { alert("断网了")});
      ```
      2. 监听当前的网络状态是否发生变化
      
      ## 5. 地图
      1. 注册百度账号
      2. 注册应用， 生成一个密钥
      3. 复掉百度地图demo源码， 传入密钥， 和地理位置坐标
      
      ## 6. js操作视频播放(视频播放器) video
      1. paused //可以判断当前食品是否是暂停状态 video.paused
      2. play()
      3. pause();
      4. ontimeupdate = function() {}
      5. currentTime, duration
      6. webkitRequestFullscreen() //全屏方法

      ##获取表单提交数据 字符串形式 (在任何时候都可以获取到表单中的数据不一定非要在submit中)
      $('#form').on('submit',function(){
        //获取表单数据 字符串形式
        //下面两个方式都是JQuery中的form表单序列化
        var formdata = $('#form').serialize(); //获取表单元素的字符串
        var formdata = $('#form').serializeArray();//获取表单元素的数组对象
        //以上方式都可以直接通过ajax方式提交  （重点记忆）$.ajax({data:formdata})
        console.log(formdata);
      })

      ##window.name
      //当a.html设置window.name='123'时，并跳转到b.html时
      //在b.html获取window.name的值也是123，这样我们也可以实现跨域获取数据
      //但是一般不用，当然也不保证在特殊的场合会用到

      #  resize
      //当窗口改变时候触发  这是H5的事件
      $(window).on('resize',function(){
        lunbo();
      })


      原生轮播图实现注意事项
      html 上  需要在前面和后面分别再加一张图片 前面加最后一张图片 后面加第一张图片
      js中  定时器  中 使用  JQuery 的 animate 方法  每次移动一个图片的宽度
      index 的控制  index++
      //index++
      if(index >= 一共图片的个数-1(包括复制的一前一后的两张图片))
      {
        index = 1;
        //把ul回归到初始位置
        ul.css({'transform':'translate('+ -index*width +'px)'});
      }
      //index--
      else if(index <= 0) {
        //使index等于最后一张图(不包括复制的两张)
        index = 8;
        //把ul回归到最后的位置
        ul.css({'transform':'translate('+ -index*width +'px)'});
      }

      //js获取跳转过来的页面路径url
      //返回之前或之后的跳转方法
      document.referrer

      //自定义属性  获取自定义属性
      定义自定义属性
      // 不支持大写
      //如果关联过多使用驼峰命名法
      <div class='box' data-id='10' data-name='lzy' data-cc-dd='123'></div>

      //原生方式
      //获取自定义属性的集合
      box.dataset  // {id:'10',name:'lzy'}
      //获取data-cc-dd
      box.dataset.ccDd

      //jq或zepto
      box.data('name') //lzy
      box.data()//{id:'10',name:'lzy',ccDd:'123'}

      //img标签的两个原生事件
      onload  和 onerror
      主要负责监听img 的 src 资源是否加载成功   
      加载成功  onload  加载失败  onerror

      图片下间距问题
      图片的间距与文字大小有关如果是12px的文字间距就是3px如果是16px大小间距就会增大

    /*历史管理 是一个js 的api  对象  history */
    /*history.back() 回到上一个浏览器记录*/
    /*history.forward() 去到下一个浏览器记录*/
    /*history.go() 切换到基于当前的第几个浏览器记录  负 回退  正  前进*/
    /*history.pushState() 追加一条历史*/
    /*history.replaceState() 替换当前的历史*/

    template原生语法  就是使用原生js
    例子：
    // <% for(var i=$data.length-1;i>=0;i--){ %>
    //   <li><%=$data[i]%></li>
    // <% } %>

      JQuery中两个对象合并
      $.extend( [deep ], target, object1 [, objectN ] )
      deep	可选。 Boolean类型 指示是否深度合并对象，默认为false。如果该值为true，且多个对象的某个同名属性也都是对象，则该"属性对象"的属性也将进行合并。
      target	Object类型 目标对象，其他对象的成员属性将被附加到该对象上。
      object1	可选。 Object类型 第一个被合并的对象。
      objectN	可选。 Object类型 第N个被合并的对象。
      
      $.extend(obj,obj2) 两个对象合并 最后obj 是组合后的对象
      $.extend(obj3,obj,obj2)  两个对象合并  最后 obj3 是合并后的对象

      JQuery中 查找 符合条件的父元素(注意)

      子元素.closest('selector')

      //保留两位有效数字 2位
      11.0000000001.toFixed(2)  // 11.00


      ## Bootstrap  的一些插件

      分页：      
      使用的插件为：bootstrap-paginator.min.js  
      /*1. 下载  https://github.com/lyonlai/bootstrap-paginator*/
      /*2. 文档 https://www.cnblogs.com/yasmi/articles/4877364.html*/
      bootstrapPaginator配置分页的方法，插件的使用看博客


      如何实现表单外的元素可以进行submit
      解决方法：<form id='add'></form><button form="add"></button>(仅限H5 form是一个新增属性)

      ##ES6 一些知识(Node第一天文档有例子)
      
      let 

      // 特点:
      // 1.在代码块内生效
      // 2.不可重复定义
      // 3.不存在变量提升
      // 4.暂时性死区(在代码块内，使用let命令声明变量之前，该变量都是不可用的)
      
      块级作用域 
      // 只要被{} 包裹的 就是一个块级作用域

      const

      // 特点： 如果定义的是个对象，引用类型的话，只要不改变引用地址的地址块  就可以随意修改
      // 1.定义常量，不可修改
      // - 不可重复定义
      // - 不存在变量提升
      // - 存在暂时性死区

      字符串扩展

      API提升：
      // var str = 'hello world';

      // console.log(str.includes('a')); //是否包含
      // console.log(str.startsWith('1he')); //判断是否是某个字符串开始
      // console.log(str.endsWith('ld1')); //判断是否是某个字符串结尾
      // console.log(str.repeat(3)); // 返回两次字符串的拼接

      // var str1 = '11';
      // console.log(str1.padStart(6, '0')); //头部补全
      // console.log(str1.padEnd(6,'0')); //尾部补全

      模板字符：
      // var data = {
      //   wj:'王健',
      //   xg:'周传雄'
      //   }

      // let htmlStr = `
      //     <ul>
      //         <li>${data.wj}</li>    
      //         <li>${data.xg}</li>
      //     </ul>
      //     `;
      // /*模板字符*/
      // console.log(htmlStr);

      结构赋值

      数组结构赋值
      // let arr = ['xg',18,'男'];
      // let[name,age,gender] = arr;

      对象结构赋值
      // let obj = {
      //   name:'xh',
      //   age:18,
      //   gender:'男'
      // }
      // let {name,gender,age} = obj;
      // let{name:name1,gender:gender123,age:age} = obj;

      数组扩展
      // Array.findIndex() 返回索引

      // var student = [
      //     {id:120,name:'tom'},
      //     {id:121,name:'tony'},
      //     {id:122,name:'allen'},
      // ];
      // var cc = student.findIndex(function(value, index, arr) {
      //   return value.id == 121;
      // });
      // console.log(cc);//1
      //未找到返回-1

      函数扩展
      // var fn = function(x = 10,y = 20){
      //   //var x = x || 10;
      //   //var y = y || 20;
      //   return x + y;
      // }

      对象扩展
      // let birth = '2000/01/01';

      // const Person = {
    
      //   name: '张三',
    
      //   //等同于birth: birth

      //   birth,
    
      //   // 等同于hello: function ()...
      //   hello() { console.log('我的名字是', this.name); }
    
      // };

      ##### 箭头函数

- 没有参数语法

  //var fn = function(){ return 'foo' };
  var fn = () => 'foo';  //一行代码 且有返回值
  //var fn1 = function(){
  //  var a = 10;
  //  return a;
  //}
  var fn1 = () => { //多行代码
    var a = 10;
    return a;
  }

- 一个参数语法

  //var fn = function(x){ return x }
  var fn = (x) => { return x }
  var fn = (x) => x;
  var fn = x => x;

- 多个参数写法
  //var add = function(x,y){ return x+y }
  var add = (x,y) => {return x+y}
  var add = (x,y) => x+y;

- 箭头函数特点：

  - 箭头函数内部的 this, 永远和 箭头函数外部的 this 保持一致
  - 不可以当中构造函数
  - 不可以使用`arguments`对象，如果要用，可以用 rest 参数代替。


  ##### reset和spread

- reset 剩余运算符

  ```javascript
  //---------解构赋值---------
  let [a,...arr] = [1,2,3,4];
  //a 1
  //arr [2,3,4]
  //---------参数不确定---------
  //let fn = function(a,b,c){
  //	return argments;    
  //}
  let fn = (...args) => {
      return args;
  }
  ```

- spread 展开运算符

  ```javascript
  //--------合并数组----------
  let arr1 = [1,2],arr2 = [3,4];
  let arr = [...arr1,...arr2]; //[1,2,3,4]
  //--------转化伪数组----------
  let nodeList = document.querySelectorAll('div');
  let array = [...nodeList];
  ```


  require.js  使用详情在阿里百秀最后一天有讲(看视频)

  eval('1+1')//2 返回的是Number类型  //可以进行字符串运算








