Webstorm 浏览器查看 Alt+F2
     代码格式化 Ctrl+Alt+L
     按住 Alt 鼠标左键 滑选 隔选
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

简单数据类型： 
  number      //数字类型 整型数字 浮点型数字 NaN
  string      //字符串类型 (""和0的内容是相等的 ==为true ===为false)
  boolean     //布尔类型(true=1 false=0) (转换最后为false的值有 0 NaN "" undefined null)
  undefined   //变量未初始化(定义变量 未赋值) undefined+1 结果是NaN   void 0 === undefined 结果为true void 0防止undefined重写 省3个字节
  null      //值为空 用来销毁变量(var n1=null; n1用typeof判断是object类型)(null==undefined 为true  ===为false)(var a = null + 1;//结果是 1 number类型)
复杂数据类型：
  object      //对象

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

  && //只要有1个false结果就为false,否则为true
  || //只要有1个true结果就为true,否则为false   
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
  if(表达式){
    if(){
    }else{}
  }else if(){
  }else{}

  n1<n2?n1:n2;

  switch(变量){
    case "1":case "2":

    break;
    case "3":

    break;
    default:

  }  //变量与"1"类型相同

  while(表达式){

  }

  do{

  }while(表达式)  //至少执行一次循环

  for(变量;表达式;自增){

  }  //执行一次循环在自增
  break //跳出当前for循环，结束
  continue //跳过本次循环，循环仍继续
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
  var a=fn(1,2);      //调用函数返回值
  return //如果函数没写return或者写了return后面没跟内容则返回undefined，如果return后面跟了内容则返回内容
  //重载：函数的名字相同，但是参数的个数不同
  //javascript 中没有重载的概念，但下面的函数会覆盖上面的函数
  // 定义函数的形参 与 实际传入参数不一致 函数仍能运行 
  // function f(a,b){} f(1)  b的值为undefiend
  // function f(a){}   f(1,2) 2没有用
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
this详解（ 函数在定义的时候this是不确定的 谁调用就是谁 
      函数在执行时 内部this指向全局window
      调用对象方法 this指向该对象
      构造函数中的this其实是一个隐式对象，类似一个初始化的模型，所有方法和属性都挂载到了这个隐式对象身上，后续通过new关键字来调用，从而实现实例化）
向系统对象中添加方法
  Object.prototype.name = function () {this//this代表使用这个方法的那个变量};

基本包装类型：number string boolean   （基本类型 的变量是不能直接调用属性和方法的 但是默认转成了基本包装类型就可以了）

字符串 不可变的特点（由于字符串的不可变性 任何属性方法 都不能对原字符串做更改 （自己理解的））
    var str = '1'; str = '2';重新给str赋值的时候，'1'不会被修改，依然在内存中 大量拼接字符串的时候会有效率问题

字符串中子 子符的值 可以通过数组索引的方式读取 （只读属性 不能被赋值！！！）
  var str = 'asd'; //str[1] --> 's' 这是一种遍历字符串的方式（！！！！！！）

String对象的属性和方法
  var s = "Aa1";
  s.length;     //返回字符串长度
  s.toLocaleUpperCase(); //将字符串中的字母转成全大写 并适应环境 返回 （不加Locale也可以 就是不太稳妥）
  s.toLocaleLowerCase(); //将字符串中的字母转成全小写 并返回
  s.charAt(index); //返回字符串对应索引(index)的一个子子符,如果没有找到则返回空字符串 这是遍历字符串的一种方式
    s.charCodeAt(index); //返回指定索引的ASCII码值
    s.concat('a',...); //字符串拼接.返回新的字符串(+号就已经代替了)
    s.trim();//去掉字符串两端的空格,中间的空格不能去掉
  s.substr(index,3);//返回字符串从对应索引(index)的几个字符，如果不写几个则返回到最后  (只是截取 不改变原字符串)
  s.substring(startindex,endindex);//返回字符串2个索引之间的字符，不包含endindex的字符 (只是截取 不改变原字符串)
  s.indexOf("as",开始检测的索引值); //返回字符串中的 子字符 对应的索引值，如果没有找到返回-1，后面字符串中有多个相同的字符 则返回最先碰到的对应的索引
    index = s.indexOf('as',index+1);开始检测的索引值（没写默认0 undefined等值不会影响结果）
  s.lastIndexOf("as");//返回(从右往左)
  "a,b,c".split(',');//根据分割符将字符串分割成数组 分隔符两边没有用""自动补到数组里
  
  s.replace('a',1);     //将字符串中的一个子字符'a'替换成1 并返回 不改变原字符串
    .replace(/a/g,1); //全局替换
    .replace(/a/gi,1);//全局替换 忽略大小写
'./asd.vue'.replace(/\.\/(.+)\..+/, '$1') // 'asd' replace正则表达式也可以使用捕获
  s.search('123');      //查找子字符对应的index（最左面的） 如果没有返回 -1 对大小写敏感
    .search(/123/i);  //查找 忽略大小写  
  s.match(/ain/gi);     //检索符合条件的子字符串 以数组形式返回 （提取邮箱 等）没有找到返回null 

准确判断数组 Array.isArray([]); //是数组返回true 是ECMA5里的 底本版不兼容 MDN中找兼容写法
        [] instanceof Array; //对象是不是某个类型的
        const a = 1; //设置一个常量 1 常量不能被随便更改
Array对象的属性和方法
  var a= [a,b,c];
  a.length;  //返回数组长度(如果设置的值比它的当前值小，数组将被截断，其尾部的元素将丢失。如果设置的值比它的当前值大，数组将增大，新元素被添加到数组尾部，它们的值为undefined。)
    a.toString(); //将数组转为字符串 ,号分割
  a.join('|'); //根据分隔符 将数组拼接成字符串
  a.reverse(); //将数组翻转
  a.concat(b); //不改变原数组 数组合并+扁平化 最多一层 var a = [1,2];console.log(a.concat(3,4));console.log(a.concat([3,4]));-->[1,2,3,4] 返回新数组 将元素的值融入 如果元素为2维数组 则变为一维数组融入
  a.sort();    //数组排序 不稳定 数字正常排 字母按第一个字母大小(a,b | A,a) （更改原数组）
    a.sort(f); function f(a,b){return a < b;}//比较函数 注意a.sort(f);传的是函数地址 a < b 方向排列 大数在前
  a.forEach(function (e,i,a){ // IE8 不支持 e每一个元素 i对应索引 a这个数组
    console.log(e,i,a, this); // this 是 window
  })
  a.filter(function (e,i,a){
    if(){return true;}
  })//如果 函数的返回值是true,元素保留下来,组成一个新的数组 不影响原数组
  a.map(function (e,i,a){
    return e * 2;
  })//必须 return 每个元素 做相同的操作 并放回原位置 
  a.every(function (e,i,a){
    return e > 0;
  })//如果 所有元素 都>0 返回true 否则false 
  a.some(function (e,i,a){
    return e > 0;
  })// 只要有一个元素满足条件就返回true;
  ES6 中 
  arr.find(function(e){ //返回 满足条件 那一项 不满足返回undefined
    return e.id == 3;
  })
  arr.findIndex(function(e){ //返回 满足条件 那一项对应的索引 不满足返回undefined
    return e.id == 3;
  })
  Array.from($('div'), (e,i) => i); // ES6中提供 Array.from 用于将伪数组转化为真数组 第2个参数和map方法一致 对转化后的真的数组进行统一的处理
  数组元素的删除和添加
  delete a[0]; //只删除数组的内容 数组的长度不会改变 （删除对象的属性，是真的删除了）(for in 不会循环 被删除数组的下标)
  a.shift();   //删除数组中第一个元素 返回删除的值 数组长度-1（元素往前窜）
  a.pop();   //删除数组中最后个元素 返回删除的值 数组长度-1（元素往前窜）
  a.unshift('1','2'); //在数组前面添加元素 返回数组的长度 数组长度改变（若数组为空 返回undefined）
  a.push('1','2');  //在数组后面增加元素 返回数组长度
  a.splice(index,length,添加的元素); //截取一段数组 如果没写length 一直到最后(改变原数组！！！) 
    a.splice(index,1); 数组中删除 指定索引的元素
    a.splice(index,1,element); 在数组中替换元素
    a.splice(index+1,0,element); 改变原数组 向数组index后面添加元素
    // a.splice(index,1,a[index],element);  备用方法
    [1, 2].splice(9, 1, 99) // 会得到 [1, 2, 99] 并不会在指定位置填充 Vue中对数组操作 可以先使用 arr[9] = 99 在使用深拷贝 最后赋值的方式来实现响应式的数组
  a.slice(startindex,endindex);//返回一个子数组 根据下标 不返回endindex对应的元素 没指定endindex 返回到最后 如果index为负代表倒数第几个 (原数组不会改变)
  a.indexOf(val[, startIndex]) // 在数组中查找val存不存在 严格=== 查到了返回对应索引 没查到-1 第2个参数开始查找的索引位置 -2表示从倒数第2个向后查找
Date对象 //使用Date对象 必须先创建 否则无法使用属性和方法
  var today = new Date(); //创建当前（现在的）日期对象，不带任何参数
  var today = new Date(1000); //创建指定时间日期对象，参数为毫秒（是创建了距1970.1.1之后多少毫秒的日期对象）
  var today = new Date("2017/6/6 10:00:00"); //创建指定时间日期对象，参数为字符串（是创建了2017/6/6 10:00:00日期对象）
  var today = new Date(2017,6-1,6,10,20,0);    //创建指定时间日期对象，前3个参数是必要的(注意 月从0-11)
获取日期毫秒形式
  var time = new Date();
    console.log(time.getTime());
  var time = Date.now();//HTML5中提供的方法，有兼容性问题
  var time = + new Date();//调用 Date对象的valueOf()
  .toLocaleDateString();// 年/月/日
  .toDateString();// 星期 月 日 年
  .toLocaleTimeString();//12小时制 (上午 9:30:29)
  .toTimeString();//24小时制
  .getFullYear(); //获取年份
  .getMonth();  //获取月份 0-11
  .getDate();   //获取几号 日期 1-31
  .getHours();  //获取小时
  .getMinutes();  //获取分钟
  .getSeconds();  //获取秒
  .getMilliseconds();//获取毫秒
  .getDay();    //获取星期 0-6
  .getTime();   //获取1970至今的毫秒数
  .valueOf();
Math对象 （静态方法）（函数都是对象 对象不一定是函数）
  Math.PI;    //圆周率
  Math.E;     //自然对数的底数，其值近似于2.71828
  Math.abs(-9); //求绝对值 （9），传入非数字形式的字符串 undefined/empty 变量 返回 NaN ，传入null返回0
  Math.ceil(1.1); //向上舍入  天花板函数 （2）
  Math.floor(4.9);//向下舍入  地板函数   （4）
  Math.max();     //返回多个数的最大值
  Math.min();   //返回多个数的最小值
  Math.round();   //四舍五入 基于个位
  Math.random();  //返回0-1之间是伪随机数
  Math.pow();   //返回x的y次方
  Math.sqrt(n); //n开平方，也可写成 Math.pow(n,1/2);
    var s = Math.floor(Math.random()*(max-min)+min);//返回 min（含）max（不含）之间的随机整数
Number对象
  Number(1.25).toFixed(1);//将一个数字转成字符串，四舍五入,保留指定小数位（"1.3"） 注意 1.toFixed(1)直接运行会报错 所以尽量都转Number
  Number.MAX_VALUE//数的最大值
  Number.MIN_VALUE//数的最小值 是正数！！！

var o = new Ren();//创建对象 --- 实例化对象
Ren.name();//静态方法
o.name();//实例化方法

for(var key in Object|Array){
    Object.key //key是变量 但系统会在对象中查找属性为key的值 系统不会吧查找key所对应的值 所以这种方法不可取 undefined
    Object[key]//只能通过键值对的形式去访问对象属性的值
    //只能循环对象的属性 或者是 数组的下标
    //循环对象 每次循环获取对象的属性和方法（严格来说方法就是属性 只不过方法中的值是函数）
    //循环数组 每次循环获取下标值(string类型)，对于数组中undefined的值不会循环，只返回有效值
  }

BOM浏览器对象模型 Browser Object Model（提供了访问和操作浏览器组件的方式）
BOM中的顶级对象就是window
（页面中所有内容都是window的属性 window.变量 window.函数（this 是 window） window.对象 window对象是其他对象的最顶层对象 因此可以省略）
  window（浏览器窗口）
    docuemnt（网页）
      body对象 img对象 等 （访问语法 window.document.body.backgroundColor='#000'）
    location（地址栏）
    history（浏览历史）
    navigator（浏览器组件）（主要判断用户是什么浏览器，可以解决兼容性的问题）
    screen（显示器屏幕）

window对象属性方法
  window.name = "asd";（指浏览器窗口的名字或框架的名字，这个名字是给<a>标记的target属性来用的）
  window.top（代表最顶层窗口）
  window.parent（代表父级窗口，主要用于框架中）
  window.self（代表当前窗口）
  window.innerWidth window.innerHeight（指浏览器的内宽高（不包括菜单栏等）
  该属性ie不支持 用 document.documentElement.clientWidth 等来代替）
    .document.body //对象下的属性也是一个对象 单看window.document document是其属性 而document.body 中 document是对象
      .document.title //body title 标签直接就能通过.document 获取 
  window.alert();      //仅仅是测试用 开发时对话框自己做
  window.prompt();     //接受到的只有2个值 一是字符串（输入0-> '0'） 用户点击取消接收到null
  window.confirm();  //弹出确认带取消对话框 确定返回true 取消返回false
  window.close(); //关闭窗口
  window.print(); //打印窗口
  window.open('url','name','options'); //打开一个新窗口 返回一个对象 该对象具备window对象的属性和方法
         url//准备在新窗口显示那个文件 可以为空字符串 表示一个空页面
         name//新窗口名字 给<a>标记的taeget属性用
         options//新窗口规格  ('width=100,height=100,left=10,top=10') width height（新窗口内宽高） left top(据屏幕 和浏览器大小无关) menubar（是否显示菜单栏 取值 yes no） toolbar（工具栏） status（状态栏） 
 
 .innerText//凡是成对的标签,中间的文字内容设置的时候都可以使用:innerText

延时器     //延时器 定时器 一定是页面加载完成之后才会执行 所以单用的时候可以不用 window.onload
  var time = window.setTimeout('close()',2000);//设置一个延时器（页面加载完成之后 过了2S 执行JS代码一次） 2S后关闭
             window.setTimeout(close,2000); //传函数地址，因此不需要加括号 如果加括号是将函数的执行结果传过去
             window.setTimeout(function (){},2000);
  返回值是一个延时器ID，这个ID给.clearTimeout()用
  window.clearTimeout(time);//清除延时器id变量 使其停止执行
定时器
  var time = window.setInterval('ab()',2000);//设置一个定时器（时间一到 重复不断的执行JS代码）
             window.setInterval(ab,2000); //传函数地址，因此不需要加括号 如果加括号是将函数的执行结果传过去
         window.setInterval(function (){},2000);
  返回值是一个定时器ID，这个ID给.clearInterval()用
  window.clearInterval(time);//清除定时器id变量 使其停止执行
location对象（地址栏）（注意：所有的属性重新赋值后 网页自动刷新）
location.href   //获取地址栏中完整的地址 可以实现JS的页面跳转
          //HTML中网页跳转 <meta http-equiv="refresh" content="1;url=http://www.baudu.com" >
  .host       //主机名字和端口号
  .hostname   //主机名
  .pathname   //文件路径及文件名
  .port           //端口  
  .search         //查询字符串（地址栏中?号及之后的部分）
  .protocol   //协议（http等）
  .hash     //地址栏上#及后面的内容（#top等）
  .reload([true]) //刷新网页 如果有true为强制刷新
  .assign("http://www.baidu.com"); // 跳转页面 保存历史记录 可返回
  .replace("http://www.baidu.com");// 替换地址,不会保存历史记录 不可返回

history对象（浏览历史）
  .length    
  .forward() //相当于浏览器的前进按钮
  .back()    //相当于浏览器的后退按钮
  .go(N)     // history.go(0) 刷新网页
  history.go(0) 刷新网页
  history.go(-1) 后退1步
  history.go(2) 前进2步
navigator对象（浏览器组件）
  .appName        //浏览器名称（用来判断是什么浏览器以便解决更多兼容性问题）
  //如果是IE 返回值为Microsoft Internet Explorer 火狐等返回 Netscape
  .appVersion       //浏览器核心本版号
  .systemLanguage   //系统语言
  .userLanguage   //用户语言
  .platform       //平台
screen对象（显示器屏幕）
  screen.width      //屏幕宽 （都是只读属性 不能被赋值）
  screen.height     //屏幕高
  screen.availWidth   //有效宽 （不含任务栏）测试与屏幕宽高一致
  screen.availHeight  //有效高
DOM文档对象模型（提供了访问和操作HTML标记的方式 document objcet model 可以使JS 动态访问或操作 网页的内容、外观、结构）
DOM中顶级对象:document 

HTML DOM访问HTML的方法（很重要！！！）（通过 document.get... 获取的元素叫 DOM元素）
var obj = document.getElementById(); //在网页中通过ID获取元素对象
       element.getElementById(); //在element中通过ID获取元素对象
var arr = document.getElementsByTagName();//通过标签名字获取元素对象 返回伪数组 例如var arrobj = ulobj.getElementsByTagName('li')
var arr = document.getElementsByClassName();//通过类名获取元素对象 返回伪数组
var arr = document.getElementsByName();//通过通常是表单元素的name属性的值 返回伪数组
    //HTML中name属性 一般只有 表单元素 框架 a标签 有 其他标签没有
var obj = querySelector();    //根据选择器 返回一个dom对象
var arr = querySelectorAll();   //返回伪数组
document.getElementsBy
Event DOM 事件DOM 可实现用户与网页互动 当事件发生时执行相关代码
  //事件三要素：有事件源（作用在谁） 触发（条件） 响应（结果）
window.onload   //当页面加载完成时. 如果不给window设置 只有body才有这个属性
  onunload  //页面关闭之后,谷歌不支持,IE8支持
  onclick   //当单击时触发事件
  onscroll  //当拖拽滚动条时
  onmouseover //当鼠标放上时
  onmouseout  //当鼠标移出时
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
一.标准浏览器引入Event对象
在HTML中如何通过事件来传递参数
（1）参数来传递的，系统固定写法全小写
function get_xy(e,b){
  alert(e.clientX+','+e.clientY+','+b);
  //获取单机事件 X值（距离body  内宽高）
}
<img onclick="get_xy(event,100)"> //行内样式传递event对象 必须写 
  
（2）通过元素的属性传递 会默认传递，但形参必须有一个值来接收
window.onload = function (){
  var img  = document.getElementById('img1');
  img.onclick = get_xy;//写不了参数 默认传递，但形参必须有一个值来接收
};
function get_xy(e){
  alert(e.clientX+','+e.clientY)
}
<img id="img1">
Event对象 的属性
  type      //当前事件类型
  clientX clientY //距离窗口左边和上边的距离（body）
  pageX pageY   //距离网页左边和上边的距离
  screenX screenY //距离屏幕左边和上边的距离
二.IE中Event对象
IE中Event对象，是window对象的一个属性，不需要传参数
如：window.event.clientX
IE中event对象属性
type
clientX clientY
x y
screenX screenY

表格对象的属性
table对象.rows    //获取一个表格所有行构成的数组
   tr对象.cells   //获取一个行中所有单元格构成的数组

form对象 的属性 方法
  name    //表单名称(可以通过name的值来获取表单对象)
  action  //表单传输到哪（.php)
  method  //表单提交方式 （get post）
  enctype //表单数据的编码方式
  
  submit() //提交表单 与<input type="submit">一样
  reset()  //提交表单 与<input type="reset">一样

  onsubmit //当单击提交按钮时发生 并在上传服务器之前发生（用来表单提交之前进行验证）
  onreset  //当单击重置按钮时发生（了解）
获取表单元素
<form name="form1">
  <input text="text" name="username">
  var inputObj = document.form1.username //通过name属性的值 来获取表单元素 

事件返回值 
如果事件返回false则为阻止默认动作的执行，(<a>标签默认跳转 <submit>标签默认提交)
受返回值影像的事件有2个 onclick onsubmit // <form onsubmit="return false"> 
写法有3种 <a href='#' onclick="f();return false">
      <a href='#' onclick="return f();"> function f(){return false};
      aObject.onclick = function (){return false}

表单提交和验证方法总结
1.使用submit按钮，结合form对象的onsubmit事件 （最常用）
2.使用submit按钮，结合onclick事件
3.使用button按钮，结合onclick事件,结合form对象的 submit()方法

input对象 的属性 方法
  name        //通过document.formname.inputname 找到input对象
  value     //可以设置默认值，提交输入的内容 也是通过这个值来传递的！！！
  size    //长度
  maxLength   //最大输入字符
  readonly  //只读
  disabled  //禁用

  focus()  //获取焦点
  blur()   //失去焦点
  select() //选中全部文本内容

  onfocus  //获取焦点时触发事件
  onblur   //失去焦点时触发事件

select对象 属性
  name          //通过document.fomr1.select1 找到这个select对象
  length      //!!!指定下拉列表中<option>的个数 （可理解为创建option标签对象的个数）不指定个数就是没有(通过这种方式创建的option标记是没有文本节点的 所以加内容用innerHTML)
  options     //下拉列表中<option>标记构成的数组 
  selectedIndex //选中时对应 <option>的索引号 或设置默认选中的那个索引号

option对象 属性
  text  //指<option></option>之间的文本
  value //指<option>标记的属性

onchange事件 //在域的内容改变时触发事件


//http://placehold.it/400x250 生成 占位图片


//传智课程记录。。。
使用for循环对很多标签添加onclick事件 
var imgs = document.getElementsByTagName('img');
for(var i = 0; i < imgs.length; i++){
  imgs[i].onclick = function (){
    alert(this); // 这里的this是每个img对象
    //绝对不能用 imgs[i] 来代替 因为先循环执行完毕了 此时 i=imgs.length onclick事件没有调用 等调用时i不会是当前的那个对象对应的那个索引值 
  }
}

//HTML中有些标签的属性 checked,selected,disabled（禁用）等 这些属性的值 就是其本身
//此时在JS中 给这些属性赋值 直接赋 true （就可以！！！经验）

设置元素的样式:两种方式
//1.在style属性中 通过JS直接操作行内样式 覆盖原有样式（属性少这么做很好）
//对象.style.backgroundColor css属性名字是多个单词组合 改为驼峰命名法
//对象.style 直接设置多个行内属性 但会替换原有的行内样式中所有属性
//2.在style标签中 通过JS操纵标签的className 改变类样式（属性多这么做）(className获取的类样式 是 'a b c'这种样式的 可以使用.split(' ')拆分成数组 解决sByClassName兼容中的一步)
//注意！！！ 对象.className 会把类样式中所有的类都替换掉 ！！！

恢复默认样式（指原来没有行内样式 设置了行内样式优先级高 此时将行内样式赋值'' 原来的类样式作用---这就是恢复默认样式 前提一开始没有行内样式）
 aObject.style.backgroundColor = '';

textarea标签是 双边标签 也是表单元素 （设置 获取 表单元素就用value 没毛病）
//设置其中的文本内容 .value      .innerText 都好使
//获取其中的文本内容 .value 好使 .innerText 不好使
//区别:value设置的时候,在浏览器的程序员开发工具中的Element选项中是没有修改内容,但是,innerText页面和开发工具中的Element中都修改了
判断input标签内容为不为空
  .value.length==0 //推荐这个
  .value==''

.innerText   //文本内容（标签下的文本 如果是块元素 显示会换行 长度不标准） 目前都支持
.textContent //文本内容 这是标准写法 IE8不支持（标准写法 不解释 长度标准）
.innerHTML   //标签下的 html代码 及 文本
总结 设置文本内容 尽量用兼容代码 如果只有纯文本 直接用 innerHTML

自定义HTML属性：自己定义HTML标签中的属性 HTML标签中根本没有这个属性
.setAttribute('属性名','值'); //设置
.getAttribute('属性名');   //获取  .属性名 不能获取 因为这个自定义属性HTML标签中没有 只能通过这种方式
.removeAttribute('属性名');    //删除 很干净
  .className = '';          //移除类样式的属性 但是‘不干净’

节点:页面中所有的内容都是节点（标签,属性,文本（文字、空行、空格、空白））
节点的属性
  .nodeType //节点类型   1标签             2属性            3文本         8注释     9文档
  .nodeName //节点名字   标签名字（大写）  属性名（小写）   #text                   #document
  .nodeValue//节点值     null              属性的值         文本内容

获取节点和元素
.parentNode   //父节点  和  父元素一样 主要用这个
.parentElement//父元素
.childNodes   //子节点伪数组
.children   //子元素伪数组  如果子元素只有一类(ul>li*3)用.children  多类(div>p*3+a*3)用.getElementsByTagName()比较方便
.firstChild       //第一个子节点
.firstElementChild//第一个子元素
.lastChild        //最后一个子节点
.lastElementChild //最后一个子元素
.previousSibling       //前一个兄弟节点
.previousElementSibling//前一个兄弟元素
.nextSibling           //后一个兄弟节点
.nextElementSibling    //后一个兄弟元素

//总结:谷歌是标准的 ，IE8中 获取节点的是 获取元素的 ，获取元素的 都不支持！！！（写兼容）

动态创建元素的方式（三种）
document.write("标签及内容");//页面全部加载完毕后,使用会覆盖文档！！ 但是在页面加载的时候 可以嵌入广告
.innerHTML="标签及内容"; //会替换里面的内容 内容过多 可以通过循环的方式 字符串拼接 但是字符串大量拼接效率太低 建议使用数组避免 a.push();
var a = document.createElement("标签名"); //这种方式 创建多标签 通过循环 数组对象 创建

添加元素
父元素.appendChild(a);//将a元素追加在父元素的中最后一个子元素的后面（相对父元素而言的）
父元素.insertBefore(a,b);//将a添加在父元素下面的b元素的前面 比较灵活 当b为null与 .appendChild()效果一样

删除元素
父元素.removeChild(a);//在父元素中移除a元素,最好在删除前先判断该元素是否存在
            //判断父元素下有没有子元素 if(!my$('text')) 无则创建 ---> 不管点击按钮几次只能创建一个
替换元素
父元素.replaceChild(a,b);//在父元素中用a元素替换的b元素

要克隆的元素.cloneNode(true);//返回一个克隆的元素 true为所有的玩意都复制 一模一样   div.appendChild(p) 直接将p放入div中 原p消失  div.appenChild(p.cloneNode(true)) 是克隆了一份 原有并没有改变

一些写法建议 优化 减小 占的内存空间 （核心思想 共有东西提出来 优化）
//1. 循环添加事件处理程序（函数） 应把函数单独提出来 
//2. dvObj=my$("dv"); 用到了同一个对象 最好只获取一次 减少.getElementById() 的访问次数


一般创建元素套路
var p = document.createElement('p');//创建
document.body.appendChild(p);   //追加(创建完就追加防止忘记。。。)
setInnerText(p,'内容');       //添加属性
p.style.backgroundColor = 'red';  //添加属性

真对空字符（''）在字符串方法中的一些注意问题
  var s ='123'.split(''); //--->['1','2','3']
  var s = '123'; var a = ''; s.indexOf(a); //---> 0 空字符indexOf 得到的是0

元素添加事件的三种方式
  注册事件      e.onclick = function(){};//为 同一个元素 注册多个 相同的事件 只会执行最后一个 （本质还是变量赋值覆盖） 
  绑定事件      e.addEventListener('click',function (){this},false);//标准 不带on （相同的事件仍然可以追加多个!!!）
  绑定事件    e.attachEvent('onclick',function (){this});//IE8 带on       这里的this是 window !!!

元素删除事件的三种方式
  注册事件    e.onclick = null;//将这个对象的这个事件 用null赋值 销毁 以达到解除事件处理函数
  解绑事件    e.removeEventListener('click',f1,false);//标准 IE11 IEEdge 支持
  解绑事件    e.detachEvent('onclick',f1);//IE8支持,谷歌和火狐不支持,IE11不支持 (看看IE这 哎)
//解绑事件后2种方式 对应的f1 绝对不能用匿名函数 因为同一个click事件的匿名函数 都是不同的 系统判断不了究竟是哪个！！！ 
//所以一定要 写有名函数 传地址的形式
//总结:用什么方式绑定事件,就应该用对应的方式进行解绑

.onkeyup   //按键抬起 事件  
.onkeydown   //按键按下 事件
.onmousemove //鼠标移动 事件
.onmousedown //鼠标按下 事件  相当于 onclick 的一部分（制作自制滚动条）
.onmouseup   //鼠标抬起 事件  
event对象
//e 为 event 事件对象 在标准浏览器 调用函数 或者 函数传地址 函数的第一个参数必须有一个形参来接收
//但IE中 事件对象 是window的一个子对象 无需传参
关于e的兼容写法 e = window.event || e; //应用短路运算
e.type //触发该事件的事件类型---事件的名字,没有on   拓展 利用e.type 结合 switch 实现 为同一个元素注册不同的事件 指向的是同一个函数
e.target//事件源对象--谷歌和火狐
window.event.srcElement.id//事件源对象---IE8写法
e.currentTarget.id//当前触发该事件的对象

e.keyCode //按键对应的数字值  能输的按键对应的 都有对应的唯一数字值
e.altKey  //按下alt键   为true 否则为false
e.shiftKey//按下shift键 为true 否则为false
e.ctrlKey //按下ctrl键  为true 否则为false

e.clientX //相对于页面的可视区域的横坐标
e.clientY
e.pageX   //相对于doucment 或者说 body (页面出现滚动条的时候 = 滚动条部分+可视区域)
e.pageY

事件冒泡
//元素A嵌套元素B,都注册了相同的事件click,如果元素B的事件触发了,那么外面元素A的事件也会被触发.
//发生顺序 嵌套元素先执行 从内向外 很合理 默认就是 冒泡阶段
事件的三个阶段:
  e.addEventListener('click',f(),false | true);
  //这个false代表冒泡阶段 true代表捕获阶段
事件对象 e.eventPhase可以知道事件的阶段到底是什么触发的
捕获阶段 e.eventPhase----1 (先发生)    都为true 由外向内
目标阶段 e.eventPhase----2 (本质点击的)
冒泡阶段 e.eventPhase----3 (后发生)     都为false由内向外
例子： 结构dv1>dv2>dv3
  my$('dv1').addEventListener('click',function (e){
      console.log(e.eventPhase+this.id);
    },true)
  my$('dv2').addEventListener('click',function (e){
      console.log(e.eventPhase+this.id);
  },false)
  my$('dv3').addEventListener('click',function (e){
      console.log(e.eventPhase+this.id);
  },true)
结果为   1 dv1 
    2 dv3 
    3 dv2


阻止事件冒泡
e.stopPropagation(); //标准写法--谷歌支持,火狐支持,IE8中不支持
window.event.cancelBubble = true; //IE8支持,谷歌也支持,火狐不支持

兼容写法 （只a有对象的事件触发）
a.onclick = function (e){
  if(e){
    e.stopPropagation();
  }else{
    window.event.cancelBubble = true;
  }
}

JS无法直接操纵CSS 只能通过 行内样式（.style） 和 类样式（.className）来操纵CSS 
对于style标签中样式属性的值 可以通过 window.getComputedStyle(dom,null).left  dom.currentStyle.left 获取的是带px的值
//测试 给页面中元素添加自定义属性.setAttribute('index',1) 在element元素中会有该属性 获取该属性的值 只能通过 .getAttribute('index') 不能通过 ['index'] .index
//       页面中元素添加 .index 也能添加 只不过element元素中不显示这个属性 访问 可以通过 ['index'] 或 .index

document.直接能获取的元素
document.documentElement//获取Html标签
document.title = '标题';//即可获取title标签 还能设置其中的值
document.body           //获取的body标签
document.head

不受定位影响 获取元素相对于视口距离
dom对象.getBoundingClientRect() // 方法返回元素的大小及其相对于视口的位置

offset系列  获取的值都是数字类型
  .offsetWidth  //获取元素的真实宽度（边框 padding 内容）（border-box的width的感觉）
  .offsetHeight //

  .offsetLeft   //获取元素到最近的定位父盒子的左侧距离，如果上级元素都没有定位,那么最后距离是与body的left值
  .offsetTop    
  .offsetParent //返回距离当前元素最近采用了定位的父级元素，都没有 返回body

scroll系列  获取的值都是数字类型
  .scrollWidth  //元素内容的实际高度,如果内容不足,就是自己的高度（如果显示了滚动条 -滚动条的宽高）
  .scrollHeight //
  .scrollTop    //元素向上卷曲出去的距离
  .scrollLeft   //

client系列 
  .clientWidth  //元素可视区宽 （padding 内容）（padding-box的感觉）
  .clientHeight
    .clientLeft //获取的边框宽度 （基本不用 就是了解）
    .clientTop 
event事件对象的
  e.clientX      //当前可视区 距离 窗口（可视区）的水平坐标 （只有event.有  绝对不能 对象.client）
  e.clientY
  e.offsetX      //距离自身元素的水平距离
  e.offsetY

.onscroll 滚动事件发生事件执行

浏览器的滚动条 滚动了多少兼容代码 是window的 所以它的滚动事件 （到一定距离固定导航栏）
window.onscroll = function (e){
  Eve.getScrollTop(e); //获取浏览器 向上滚动的距离 要配合window.onscroll
}

滚动条向下滚动的距离 （兼容代码）
window.pageYOffset   //谷歌 火狐支持 IE9+支持
document.documentElement.scrollTop //火狐 IE8以下支持
document.body.scrollTop   //只有谷歌支持

获取元素的某个属性的值CSS （带PX的!!!）（兼容代码）// CSS中单写 position: absolute; 是在原有位置脱标 直到你给了left top 才按你写的显示  最好position 就直接给 left:; top:;
window.getComputedStyle(element,null).left  //谷歌和火狐可以,IE8不行 获取的是字符串 带PX的！！！
element.currentStyle.left        // IE支持   

鼠标按下的同时移动不会选中文本（兼容代码!!!）
window.getSelection ? window.getSelection().removeAllRanges():document.selection.empty();  //鼠标按下的同时移动不会选中文本

在做 跟着鼠标动这种案例 核心就一个 跟着移动的物体相对鼠标的位置不变
// 伪数组 不能使用数组的一些方法 能用的 也就 .leng []访问方式 （将伪数组转为真数组 [].slice.call(伪数组) ）
// e.innerHTML +=（这种+=方式 也可已实现在子元素 后面追加内容 效果与 e.appendChild相同）
// 真对案例位置动态移动
// 定位元素 left top marginTop marginLeft  都影响其位置
// 没有定位的元素 只有marginTop marginLeft 影响其位置
// 父容器 display:none; 子容器都不显示 都不占位置

.ondblclick //双击事件
.onresize   //窗口改变事件

JS高级部分：
面向对象特性:封装,继承,多态
//封装：把代码封装到函数中 在把函数封装到对象中
//继承：类与类之间的关系 js中没有类的概念（但可以通过原型模拟）
//多态：同一个行为真对不同对象产生不同效果（模拟多态 几乎不用）

工厂函数 与 自定义构造函数 区别
//工厂函数 函数名小写 一定有return 不能明确对象属于什么类型（instanceof 工厂函数名 就是Object）
//构造函数 函数名大写 没有return   非常明确对象类型（就是 构造函数名 也是Object）

//4种方法创建对象 只有自定义构造函数 可以通过instanceof 判断是不是 自定义的类型

console.dir()//输出对象的结构
console.time('label') // 统计一段代码的执行时间时 参数为对应相同的字符串 在控制台输出以ms为单位
console.timeEnd('label')

原型的作用之一 可以实现 数据共享 节省空间（共享的属性方法写在原型中 不共享的写在构造函数中）
// 构造函数和实例对象之间的关系,叫原型链,这个原型链是通过原型来联系的 ----实现数据共享
// 构造函数中都有一个属性prototype 叫原型 这个属性也是一个对象     （开发者用）
// 所有实例都有一个属性__proto__ 这个属性和构造函数的原型指向相同  （浏览器用的原型 不标准 开发不用）
// 原型中的所有属性方法 都被 实例对象 共享
// 实例对象的__proto__ 指向 自己构造函数的prototype 最终指向 Object的prototype 指向 null
// 原型链搜索过程:首先在当前的实例对象中找这个属性,有则使用,没有去该实例对象的下一级原型链中找,有则使用,无则继续 都没找到 undefiend (类似作用域链)
// 如果实例对象和原型对象中的属性名字一样,原型对象中的属性的值是不会被修改的,修改是实例对象中的属性,原型对象中的属性只是不用而已 等到 实例对象属性没了 在用 

向对象的prototype中添加方法
O.prototype.init = function (){this.};  （添加一个方法）
O.prototype = {    //会改变原型的指向
  constructor: O,//缺陷:--->就是一个对象,没有构造器 用这种方法要把构造器加上（添加多个方法 !!!注意直接这么写会覆盖原prototype下的所有方法）
  init:function (){this.},
  f:function (){this.}
}; 

原形中的方法可以相互调用
function P(){
  this.a();
}
P.prototype = {
  a:function (){
    console.log('a方法');
    this.b()
  },
  b:function (){
    console.log('b方法');
  }
};
var o = new P();//通过构造函数P 创建对象实例化o 在创建的同时调用方法a a中调用方法b

(function (){
  window.t = new Date(); //吧t转换为全局变量
}()); //自调用函数的;必须加

对象/函数.bind(that);//---->改变this的指向that变量中的值 (很强势！！！)
//对象中多次使用的方法 放在原型中 以便节省空间
//对象中多次使用 但 又不用于别的函数（外面） 可以直接私有函数 （写在自调用的里面）

function A(sex){
  this.sex = sex;
}
A.prototype.sex = '女';
var o = new A('男');  // o.sex; ----> '男' 对于重名的属性方法 先在自己的里面找 找不到了去下一级原型链找 都没找到undefined

实例对象的__proto__指向的是自己的构造函数的prototype 如果prototype的指向发生改变 那么对应的实例对象的__proto__指向也改变 此时在原型中添加方法 这个方法已经被添加到 新的指向位置
JS是一门基于对象的语言 没有类的概念 但是js可以模拟面向对象（可以使用构造函数来代替类）

继承是基于原型的（原型的继承|借用构造函数继承|组合继承|拷贝继承）
//组合继承（构造函数继承 + 改变原型指向）
function A(name){
  this.name = name;
}
A.prototype.init = function (){console.log('A方法')};
function B(name,sex){
  A.call(this,name);//构造函数继承 单用缺陷（仅仅是继承了属性 方法都没继承）
  this.sex = sex;
}
B.prototype = new A();//原型的继承 改变原型指向 不传参数 实现 方法的继承 （单用缺陷 实例对象的属性的值都固定了）
B.prototype.hai = function (){console.log('B方法')};
var o = new B('赵琦',23);
//拷贝继承:把A原型对象中的属性和方法 遍历对象的方式 复制给B的实例对象 仅仅是 原型对象中的属性方法 对于 A自有属性方法不能。。
function A(name){
  this.name = name;
}
A.prototype.sex = '男';
A.prototype.hai = function (){};
function B(age){
  this.age = age;
}
var o = new B(23);
for(var key in A.prototype){
  o[key] = A.prototype[key];
}

继承的总结
//原型的作用:数据共享,实现继承(通过改变原型指向 实现继承)
//js是一门基于对象的语言,不是真正的面向对象语言 但是js可以模拟面向对象
//构造函数继承:构造函数.call(this,属性1,属性2,属性3...)只能继承属性,不能继承方法
//原型继承:改变原型指向 不传参 实现继承方法
//组合继承:借用构造函数+改变原型指向，既能继承属性.也能继承方法
//拷贝继承:把原来对象（原型）中的属性和方法直接复制一份放在新的对象中

所有的函数都应该是Function的一个实例对象
if(true){
  function f1() {
        console.log("小杨才是最帅的");
    }
}else{
    function f1() {
        console.log("小段才是最猥琐的");
    }
}
f1();
var ff;
if (true) {
  ff = function () {
    console.log("第一个");
  };
} else {
  ff = function () {
    console.log("第二个");
  };
}
ff();
//函数声明---注意:IE8中的函数声明如果是在if-else语句中,那么执行的是else中的代码（很恶心）
//以后使用函数表达式的方式最友好,最好不要把函数的声明写在if-else的语句中

关于this的详解 （谁调用就是谁 没有是window 箭头函数看外层this是谁）
var o = {
  set:this, //console.log(o.a);  this 是 window
  init:function (){console.log(this)}, //o.init();  this 是 o构造函数
  get:() => console.log(this)    //o.get();  this 是 window   
};
function f(){console.log(this)}; //f() this 是 window
[].forEach(function(){console.log(this)}); //this 是 window
setTimeout(o.init,1000); //调用的是o.init对应的那个地址函数 此时this是window          特点  不能传参  但地址还可以被别人调用
setTimeout(f,1000);      //一个道理
setTimeout(function (){console.log(this)},1000); //也是一样 只不过直接把f拿过来了           可以传参  不能被别人调用
setTimeout('o.init()',1000); //调用的是方法  此时this 是 调用方法的对象                     可以传参  可以被别人调用
setTimeout('f()',1000);      //  函数 的话 和 setTimeout(f,1000); 一个效果 this 肯定是window啊 基本不用
function Person() {
  console.log(this); //person() 当成函数调用 this 是 window    new Person() this 是 实例对象
  var user = {
    g:() => console.log(this); //就是 外部 this
  }
  user.g();
}

btn.onclick = function (){console.log(this)}; //this为btn对象
btn.onclick = f; function f(){console.log(this)}; //this为btn对象  单调用f()函数this肯定是window

<a href='javascript:;' onclick="f(this)"> //javascript:;禁用a链接的跳转
function f(a){
  console.log(this);   //this是window
  console.log(a);      //行内样式 this只能作为参数传入 a 是事件触发对象
}
"use strict";//严格模式 严格模式下调用函数,那么this是undefined 除非写成 window.f() 标准才是 window

//函数一定是对象 对象不一定是函数（Math 是对象 不是函数）
//只要是函数,里面就有prototype原型
//只要是对象.里面就有__proto__原型
function f(){}//函数也是对象,对象可以添加属性,可以添加方法
f.age = '123';
f.hai = function (){};

函数常见属性方法
//这个两个方法都是Function原型中的,applye和call的作用:就是直接调用函数或者方法,改变里面的this的指向
         f.apply(this,[a,b]);//apply的参数是以数组的方式传入      直接调用函数执行
         f.call(this,a,b);   //call的参数是以一个一个的参数传入的   直接调用函数执行

var f1 = f.bind(this,a,b);   //ECMAScript5中,新的方法 相当于是复制了这个函数 返回值是复制的这个函数
  f1();

setTimeout(this.init.bind(this),1000);//延时器中的第一个参数只能是函数地址（匿名函数 如果是函数调用的话只是立即执行了一次函数） 这2个this都是实例对象 返回的这个函数中this 本应该是window 但是bind改变了this指向
function f(x,y) {//调用f1函数 输出的字符串window 显示的是---->  [object Window]
    console.log(''+this);
  }
 f();
总结//没传this或者this传的null 那函数中this就是window!!!  传了就是传入的  都是改变this指向 apply call直接调用 bind 相当于复制（还要单独调用） apply其余参数以数组形式传入
f.name      //函数名 只读属性
f.arguments //实参所组成的伪数组
f.length    //形参的个数
f1.caller    //在函数f2中调用了f1 在函数f1中输出f1.caller 为f2函数  （直接调用f1 输出null）

判断数据类型
   typeof(变量)     //判断简单数据类型
对象 instanceof  对象 //判断对象是不是某个对象
Object.prototype.toString.call([]) == '[object Array]'; //true | false

函数作为返回值使用（拓展）
var arr = [ //对arr数组中的对象的某个属性进行排序  制作 按价格排序。。。。
        {x:'b'},
        {x:'d'},
        {x:'a'},
        {x:'c'}
      ];

      var str = 'x';//配合按钮实现 哪个属性？排序
      arr.sort(g(str));
function g(attr){
  return  function bj(a,b){
        return a[attr] > b[attr];
      };
}
for(var i = 0; i < arr.length; i++){
  console.log(arr[i][str]);
}

闭包  函数中 返回函数 在这2个函数之间的局部变量存在数据缓存 这就是闭包
作用：缓存数据 
模式：函数模式  对象模式
function f(){
  var index = 10;  
  //f函数只执行了一次
  //缓存数据:只要是想把数据保存起来,就把这个数据放在闭包中(就是在外层函数和里层函数的中间)
  //局部变量 函数使用后应该释放 但是闭包的情况 该变量的值没有释放 延长作用域了.
  return function (){
    console.log(++index);
  };
}
var ff = f();//f函数只执行了一次
ff();//11
ff();//12
ff();//13
应用//配合事件实现 变量不冲突的问题
inputs[i].onclick = f(); //每个onclick 事件中的 都是独立的 不冲突（闭包所缓存的数据是独立的！！！）

面试题
for(var i = 0; i < 3; i++) {
      setTimeout(function () {
        console.log(i);
      }, 0);
    }
//循环3次创建3个延时器 但是其特性是页面加载完毕后才执行 此时i=3 输出3次3

沙箱:环境,黑盒//可以解决命名冲突的问题
(function (){
    //内部空间独立 若要转全局变量 window.变量名 = 变量名;
}());//分号必须加

小细节
in 运算符
console.log(属性名字 in 对象) （判断属性名在对象中是否存在 存在返回true 不存在false）

delete 运算符
delete a; //删除隐式全局变量
delete obj.name; //删除对象的某个属性
delete array[3]; //删除数组中某一项的值得内容 在次 访问undefined 数组长度不会改

关于
offsetWidth       返回不带px的 数字
style.width       行内样式 返回的是带px的 没有行内样式样式 返回空字符串 设置的是百分比 返回百分比
getStyle()        css样式        返回的是带px的

浅拷贝 把一个对象的地址拷贝到另一个对象中  obj2 = obj1; 或者for in obj1 拷贝到 obj2中 
深拷贝 （利用递归深拷贝 主要了解）
var obj1 = {name:[1,2,3],sex:{4:4,5:5,6:6}};
    var obj2 = {};
    function digui(a,b){//将a属性拷贝到b中
        for(var attr in a){//本质还是利用 for in  既能循环数组（下标） 也能循环对象（属性）
          var it = a[attr];//对象属性的值 或 数组哪一项的值
          if(it instanceof Array){
            b[attr] = [];
            digui(it,b[attr]);//将it中的属性拷贝到b[attr]中
          }else if(it instanceof Object){
            b[attr] = {};
            digui(it,b[attr]);
          }else{
            b[attr] = it;
          }
        }
    }
遍历DOM树（利用2个函数间的递归）
function forDom(e){
  console.log(e.nodeName);
  f(e.children);//e的子元素伪数组
}
function f(a){
  for(var i = 0; i < a.length; i++){//这就是递归停止的条件 当最后一个元素没有子元素是 children 返回的是空数组 a.length 长度为0 不满足条件递归结束
    forDom(a[i]);
  }
}
forDom(document.documentElement);

正则表达式 （由元字符组成 匹配（检索）字符串）
  .   //除了\n以外的任何一个字符
  [0-9a-zA-Z] //范围中的一个字符  （0-9中的一个字符或者a-z中的一个字符或者A-Z中的一个字符）
    [.]     //去掉含义 就是一个.   \. 一样转义 把.变为普通的一个点
    [abc]   //a或b或c 中的一个字符
  ()      //优先级 分组
  |     //或者 （优先级特别低 最后运算）

  {}      //前一个出现的次数
  * {0,}    //前一个出现0次或多次
  + {1,}  //前一个出现1次或多次
  ? {0,1} //前一个出现0次或1次  （?阻止贪婪模式）

  \d  [0-9]   //所有数字中的一个
  \D      //非数字
  \s      //空白符号
  \S      //非空白符号
  \w      //非特殊字符 （含_）
  \W      //特殊字符   （不含_）

  ^           //1.以 后一个字符 开头  2.取非
    ^[0-9]  //以数字开头
    [^0-9]  //非数字
  $       //  以 前一个字符 结尾

  /^   $/   //严格模式 （匹配的是整个字符串 而不是只匹配字符串的一个子字符串）
      /^\d?$/.test('');       //true
      /^[0-9][a-z][A-Z]$/.test('9f8131241as'); // false 只能是3个字符
  /^    /     //这都是非严格模式 匹配字符串的一个子字符串 满足就为true了 后面的不会看了
      /[0-9][a-z][A-Z]/.test('9fB131241as');   //true
      /^\d{2}/.test('0123');  //true
  /    $/
      /\d{3,5}/.test('12asd3'); //false 连着的数字至少出现3次 最出现5次 但是出现3次后面的就不看了 最出现5次根本没用
      /\d{3,5}/.test('123456'); //true

写正则表达式的经验: 1.找规律 2.不要追求完美

身份证号码（15位18位最后一位可能是xX 第一位不能是0）  /^[1-9]\d{14}(\d{3}|\d{2}xX)?$/
ip地址的正则（192.168.234.255）                       /^(\d{1,3}[.]){3}\d{1,3}$/
邮箱的正则（shuaiyan.g-24kcs_88@fdfd3.com.cn）        /^[0-9a-zA-Z_.-]+[@][0-9a-zA-Z_.-]+([.][a-zA-Z]+){1,2}$/  或 /^\w+@\w+\.\w+(\.\w+)?$/
姓名的正则                                         /^[\u4e00-\u9fa5]{2,6}$/

创建正则表达式的对象
var r = new RegExp(); //构造函数创建对象
var r = //;       //字面量的方式来创建对象
r.test('string');     //匹配返回true 否则false;
r.exec('string');     //与字符串.match() 方法差不多 只不过返回 1个检索的 没有 返回null
  //g---->全局模式  还可写成 new RegExp(/\d+/,'g');在new 方法中这么写
    //i---->忽略大小写
    //m---->多行模式


console.log(/.?/.test("12"));//true      ----     非严格
console.log(/^[0-9]/.test("9527"));//true
console.log(/^[a-z]$/.test("what"));//false  ----   严格
console.log(/[a-zA-Z]/.test("1"));//false
console.log(/[0-9a-zA-Z]$/.test("asdg"));//true
console.log(/^b|(ara)$/.test("ara"));//true
console.log(/[a-z]{2,3}/.test("a1r2f"));//false --- 就算是 非严格 他也要连续
console.log(/\d{2,3}/.test("8o9"));//false
console.log(/\D/.test("e090t"));//true
console.log(/\s/.test(" 89"));//true
console.log(/\S/.test(" 嘎嘎"));//true

//字符串方法中可以使用正则表达式
console.log('12我31我456我'.replace(/\d{2}/g,'0')); //0我0我06我
var str = "1@a.com,f@.com";
console.log(str.match(/\w+@\w+\.\w+(\.\w+)?/g)); //在字符串中提取邮箱 
//提取邮箱肯定是 不严格的 严格的压根就不匹配
//而验证邮箱是   严格的
var str="    fd  sf  ";console.log(str.replace(/\s+/g,'')); //去除完全的空白 比 str.trim()方法好
// 提取 字符串 组 test是RegExp的方法 而 match是String的方法
/(\d+)-(\d+)-(\d+)/.test('2017-1-20');//如果正则表达式有小括号,那么这个正则表达式就有分组了,想要那一组的东西,就可以直接使用  正则对象.$组数(正则对象指 正则对象前面的离它最近的)
 console.log(RegExp.$3); //20

'6.0$'.match(/(\d+)(?:\.?)(?:\d+)([￥$])/) // (?:) 不捕获组 ["6.0$", "6", "$"]
"12332aa438aaf".match(/[0-9a-z]{2}(?=aa)/g) // (?=) 必须满足的条件 但是不捕获 ['32', '38']
"12332aa438aaf".match(/(?<=aa)[0-9a-z]{2}/) // (?<=) 前面必须跟着aa 但是不捕获 ['43']
[0-9a-z]{2}(?!aa)  // 匹配两个字符，且后面紧跟着的不是aa 但是不捕获
(?<!aa)[0-9a-z]{2} // 匹配两个字符，且前面紧跟着的不是aa 但是不捕获

伪数组:
//假的数组,有length属性,能遍历 但是不能使用数组中的方法
//伪数组 本质是对象

js中的多行字符串
1.ES6以前使用 \
var str = "<ul>              \
            <li><a href="#">666</a></li> \
          </ul>  ";
2.ES6后使用   ` `
var str = `<ul>
            <li><a href="#">666</a></li>
          </ul>  `;

window 自带了一些属性 name top 尽量不要用做变量名 ！！！
document.write();
document.writeln(); //在element中查看时带换行的 在浏览器显示就是以空格显示


// <audio controls autoplay loop>
//  <source src="images/e123.mp3" type="">
// </audio>

// <video controls autoplay loop poster="">
//  <source src="images/qwe.mp4" type="">
//  不支持！
// </video>

dom对象.paly();  //js中实现播放   在js中给标签设置 autoplay 是不能够使其播放的
dom对象.pause(); //js中实现暂停播放

js中实现关闭音频  通过干掉 src 在赋值给src路径  此时如果不paly() 是不会播放的 所以标签中 autoplay loop 一般不设置

dom对象.volume = 0; //干掉背景视频的声音



细节:
 获取网页上的 a的href img的src 都是获取的绝对路径 赋值给别的标签 不要用
 
事件委托
dom.onclick = function(e){
  e.target  //当前点击的   事件源  事件委托给谁
  window.event.srcElement //window.event.srcElement
  this //就是dom对象
  if(e.target.className==){

  }
};

在谷歌浏览器中 控制台输出二维数组 可以使用 console.table();  //更加方便 

apply() call() 深层次运用于 某个对象没有 每个方法 但是可以借用方法（借用函数调用）

将伪数组转为真数组
.slice() //是数组的方法 什么都不写 slice(0) 相当于拷贝一份数组 本质遍历原数组组成新数组
将伪数组转为真数组
Array.prototype.slice.call(伪数组);
[].slice.call(伪数组);

在封装库的时候 考虑到每次调用都会创建一个数组
  var a = [],
    slice = a.slice,
    push = a.push
  以后代码直接用就可以了

数组扁平化
var a = [1,2],
  b = [3,4];

方法一 for循环b数组push到a数组里
方法二 a.concat(b) 展开数组 扁平化处理
方法三 a.push.apply(a,b); 将b数组插入到a数组 apply实现扁平化
方法四 ES6 引入了展开运算符 a.

JQuery中 获取 $("div,li,p"); 应用扁平化
        var div = document.getElementsByTagName('div');
        div = [].slice.call(div);
        div.push.apply(div,document.getElementsByTagName('li'));
        div.push.apply(div,document.getElementsByTagName('p'));


// DOM-Core 一部分 操作 （了解）
// 1> 增加元素或节点
// document.createElement( '元素节点: 标签名' )
// document.createTextNode( '文本节点: 文本内容' )
// document.createArrtibuteNode( '属性节点: 属性名' )
// document.createDocumentFragment()
// 3> 修改
// attrNode.nodeValue = '...'
// txtNode.nodeValue = '...'        













面试题：
函数表达式的函数名字不允许对外访问 只能内部自己调用自己
var a = function f(){}; //这是一个函数表达式 函数名为 f
a();
f();//报错

!function f(){}; //这是一个函数表达式 函数名为 f 
f();//报错

var i = 0;
var a = function f(){
  if(i==3)return;
  i++;
  f();//内部可以访问
  console.log(i);
}
a();
    
delete 用于删除 隐式全局变量 数组元素（不改变长度） 对象属性 删除后返回boolean 表示是否成功
var a = b = 1;
delete b; //true 

function f( f ){
    return typeof f();//f 是 形参 优先级高于 函数名
};
var result = f(function(){ return 1; });
console.log( result );

var foo = {
    bar: function() { return this.baz; },
    baz: 1
};
function fn(){
    return typeof arguments[0]();//自调用函数的this 是window winodw.baz undefined
};
var result = fn(foo.bar);
console.log( result );


<script src="common.js">//公共函数 含有一些标准兼容代码
//封装document.getElementById
  function my$(id){
    return document.getElementById(id);
  }
//鼠标按下的同时移动不会选中文本 
  function getSelection(){
    return window.getSelection?window.getSelection().removeAllRanges():document.selection.empty()
  }
调用 dom.onmousemove = function(){ getSelection(); };
//获取max - min 的随机整数
  function random(min,max){
    if(max<min){[min,max]=[max,min]}
    return Math.floor(Math.random()*(max+1-min)+min);
  }
//获取 元素 文本内容  //使用typeof判断是否支持某个属性更为准确排除（ '' ）在这里只简写    typeof(e.)=='undefined'
  function getInnerText(e){
    return e.textContent || e.innerText;
  }
//设置 元素 文本内容
  function setInnerText(e,c){
    if(e.textContent){
      e.textContent = c;
    }else{
      e.innerText = c;
    }
  }
//获取父元素中第一个子元素
  function getFirstElementChild(e){
    if(e.firstElementChild){
      return e.firstElementChild;
    }else{
      var ele = e.firstChild;
      while(ele&&ele.nodeType!=1){
        ele = ele.nextSibling;
      }
      return ele;
    }
  }
//获取父元素中最后一个子元素
  function getLastElementChild(e){
    if(e.lastElementChild){
      return e.lastElementChild;
    }else{
      var ele = e.lastChild;
      while(ele&&ele.nodeType!=1){
        ele = ele.previousSibling;
      }
      return ele;
    }
  }
//获取当前元素前一个元素
  function getPreviousElementSibling(e){
    if(e.previousElementSibling){
      return e.previousElementSibling;
    }else{
      var ele = e.previousSibling;
      while(ele&&ele.nodeType!=1){
        ele.previousSibling;
      }
      return ele;
    }
  }
//获取当前元素后一个元素
  function getNextElementSibling(e){
    if(e.nextElementSibling){
      return e.nextElementSibling;
    }else{
      var ele = e.nextSibling;
      while(ele&&ele.nodeType!=1){
        ele.nextSibling;
      }
      return ele;
    }
  }
//获取兄弟元素
  function getElementSibling(e){
    if(!e)return;//元素是否存在 不存在直接返回
    var a = [];//存储所有的兄弟元素
    var ele = e.previousSibling;
    while(ele){
      if(ele.nodeType==1){
        a.push(ele);
      }
      ele = ele.previousSibling;
    }
    var el = e.nextSibling;
    while(el){
      if(el.nodeType==1){
        a.push(el);
      }
      el = el.nextSibling;
    }
    return a;
  }
//为任意一个元素绑定事件
  function addEventListener(e,t,f){
    if(e.addEventListener){
      e.addEventListener(t,f,false);
    }else if(e.attachEvent){
      e.attachEvent('on'+t,f);
    }else{
      e['on'+t] = f;
    }
  }
//为任意的一个元素解绑某个事件
  function removeEventListener(e,t,f){
    if(e.removeEventListener){
      e.removeEventListener(t,f,false);
    }else if(e.detachEvent){
      e.detachEvent('on'+t,f);
    }else{
      e['on'+t] = null;
    }
  }
//封装动画函数 匀速的
  function animate(e,t){
    clearInterval(e.time);
    e.time = setInterval(function (){
      var d = e.offsetLeft;
      var b = 11;
      b = t > d ? b : -b;
      d += b;
      if(Math.abs(t-d)>Math.abs(b)){
        e.style.left = d + 'px';
      }else{
        e.style.left = t + 'px';
        clearInterval(e.time);
      }
    },20);
  }
//格式化日期
  function getTime(d){
    var f = d.getFullYear();
    var m = d.getMonth()+1;
    var date = d.getDate();
    var h = d.getHours();
    var min = d.getMinutes();
    var s = d.getSeconds();
    return f+'年'+x10(m)+'月'+x10(date)+'日 '+x10(h)+':'+x10(min)+':'+x10(s);
  }
  function x10(a){
    return a < 10 ? '0'+a : a;
  }
//返回当前浏览器是什么类型的浏览器
  function userBrowser(){
      var browserName=navigator.userAgent.toLowerCase();
      if(/msie/i.test(browserName) && !/opera/.test(browserName)){
          console.log("IE");
      }else if(/firefox/i.test(browserName)){
          console.log("Firefox");
      }else if(/chrome/i.test(browserName) && /webkit/i.test(browserName) && /mozilla/i.test(browserName)){
          console.log("Chrome");
      }else if(/opera/i.test(browserName)){
          console.log("Opera");
      }else if(/webkit/i.test(browserName) &&!(/chrome/i.test(browserName) && /webkit/i.test(browserName) && /mozilla/i.test(browserName))){
          console.log("Safari");
      }else{
          console.log("不知道什么鬼!");
      }
  }
//获取浏览器滚动条向上卷曲出去的距离//配合document.onscroll
  function getScroll(){
    return {
      'top':window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
      'left':window.pageXOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
    };//调用 getScroll().top  getScroll().left
  }
//获取浏览器内宽高兼容//配合window.resize
  function getClient(){
    return {
      'width':window.innerWidth || document.body.clientWidth || document.documentElement.clientWidth || 0,
      'height':window.innerHeight || document.body.clientHeight || document.documentElement.clientHeight || 0
    };
  }
//封装动画函数 缓动的(目标-当前)/10
  function animate(e,t){
    clearInterval(e.time);
    e.time = setInterval(function (){
      var d = e.offsetLeft;
      var b = Math.ceil(Math.abs((t-d)/10));//最后一直移动1 本质先变速 后匀速
      b = t > d ? b : -b;
      d += b;
      e.style.left = d + 'px';
      if(d==t){
        clearInterval(e.time);
      }
    },20);
  }
//获取元素CSS样式属性的值
  function getStyle(e,attr){
    return window.getComputedStyle ? window.getComputedStyle(e,null)[attr] : e.currentStyle[attr] || 0;
  }
//封装变速函数终极版（含opacity zIndex）
  function animate(e,json,fn){
      clearInterval(e.time);
      e.time = setInterval(function (){
          var x = true;//假设 所有属性 均到达位置
          for(var attr in json){
              if(attr=='opacity'){//透明度0-1  吧d t 先乘100 赋值时在除100
                  var d = getStyle(e,attr)*100;
                  var t = json[attr]*100;
                  var b = Math.ceil(Math.abs((t-d)/10));
                  b = t > d ? b : -b;
                  d += b;
                  e.style[attr] = d/100;
              }else if(attr=='zIndex'){//层级 就是直接赋值吗 还过度毛线
                  e.style[attr] = json[attr];
              }else{
                  var d = parseInt(getStyle(e,attr));
                  var t = json[attr];
                  var b = Math.ceil(Math.abs((t-d)/10));
                  b = t > d ? b : -b;
                  d += b;
                  e.style[attr] = d + 'px'; //总是忘记加'px'
              }
              if(d!=t){//只要有一个属性不到达位置 
                  x = false;
              }
          }
          if(x){
              clearInterval(e.time);
              if(fn){//回调函数 如果fn存在 执行 再次调用animate 实现 上一次动画结束 才开始执行下一个动画
                  fn(); //这里有个核心思想 只有当前手动画结束 才会执行（）
              }
          }
      },20);
  }
//对象封装 事件参数对象
  var Eve = {
    getEvent:function (e){
      return window.event || e;
    },
    getClientY:function (e){//可视区
      return this.getEvent(e).clientY;
    },
    getClientX:function (e){
      return this.getEvent(e).clientX;
    },
    getScrollTop:function (){//页面向上曲出去的距离
      return window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop || 0;
    },
    getScrollLeft:function (){
      return window.pageXOffset || document.body.scrollLeft || document.documentElement.scrollLeft || 0;
    },
    getPageY:function (e){
      return this.getEvent(e).pageY || this.getClientY(e)+this.getScrollTop();
    },
    getPageX:function (e){
      return this.getEvent(e).pageX || this.getClientX(e)+this.getScrollLeft();
    }
  };

玖富工作 

// 封装的插件
// 已经挂载在Vue的原型中了
// loading 加载完成消失
  this.showLoading(true) // 显示load ing
  this.showToast({msg: res.message}) // toast 提示
  this.$fetch({
    url: this.$store.state.api,
    data: {}
  }).then(date => {
    this.showLoading(false) // 隐藏 load ing
  })
// 1个按钮的弹窗
  this.showNewAlert({
    title: '提示',
    msg: `<p>您尚不具备该业务的参与资格</p>`,
    rBtnText: '我知道了',
    callShow: false, // 叉号是否显示
    confCallBack: function () {
      console.log(1)
    }
  })
// 2个按钮的弹窗
  this.showTwoBtnDialog({
    title: '提示',
    msg: `<div class="member_two">
            <p>您需要开通银卡会员，</p>
            <p>才可以进行此项业务</p>
          </div>`,
    rBtnText: '我知道了',
    lBtnText: '马上开通',
    borderNone: true,
    cancelBack: () => {
      console.log(1)
    },
    confCallBack: () => {
      console.log(2)
    }
  })

// 对象融合 
// 原生 Object.assign({a:1},{b:2}) // 浅拷贝
// E6对象展开运算符 {a:1, ...{b:2}} // 浅拷贝
// jQ里     $.extend({a:1},{b:2}) // 浅拷贝
// lodash里 _.assign({a:1},{b:2}) // 浅拷贝

Object.assign() // 方法的用法
// 1.合并多个对象 // 对数组的合并 是根据对index 对对象的合并 是根据key
// 2.克隆对象（浅拷贝）
// 3.为对象添加多个方法
Object.assign(SomeClass.prototype, {
  someMethod(arg1, arg2) {
  },
  anotherMethod() {
  }
});​
// 原来的方法
SomeClass.prototype.someMethod = function (arg1, arg2) {​
};
SomeClass.prototype.anotherMethod = function () {
};

// 浅拷贝 对简单的数据类型 是对值的复制  对引用类型 是对地址的复制 浅拷贝并没有完全把2个对象'分开'
// 深拷贝 完全把2个对象'分开'
let cloneObj = function(obj){
    let newobj = obj.constructor === Array ? [] : {};
    if(typeof obj !== 'object'){ // 递归终止条件
        return;
    } else if(window.JSON){
        newobj = JSON.parse(JSON.stringify(obj)); // 序列化在还原对象地址不会在指向原对象
    } else { // 不支持JSON 手动递归深拷贝
        for(let key in obj){
            newobj[i] = typeof obj[i] === 'object' ? cloneObj(obj[i]) : obj[i]; 
        }
    }
    return newobj;
};


// scss样式问题
@import "../../assets/scss/app";
@include px2rem(padding, 30 0);
@include font-dpr(28); // 任何手机屏幕上px的统一
background-size: contain; // 盒子的宽高 和 背景一致 完全放入 就是正好的
@include wh(200, 100); // rem形式的 宽 高
@include lh(100, 100); // rem形式的 高 行高
@include wlh(200, 100, 100); // rem形式的 宽 高 行高

@include _icon(30, 30, 0);   // 背景图 宽 高 margin-top 这个是转行内块  自动有 background-size: contain;
@include _icondb(30, 30, 0); // 背景图 宽 高 margin-top 这个是转块 居中（margin 0 auto）
background-image: url(../../); // 配合使用

@include display_flex(); // display: flex;的兼容 flex-wrap: wrap; align-items: center;
@include flex(1); // flex:1;的兼容

@include c3(justify-content, space-around); // c3属性兼容处理  -webkit等私有前缀
@include c3(transform,translate3d(0,0,0)); 
@include c3(opacity,0);
@include c3(transition, all 1s ease);

@include singleline-ellipsis(); // 截取文本text-overflow 单行文本 默认width: 100%需要配合
@include px2rem(width, 100); // 配合使用
清除浮动clearfix 类样式

// CSS 单行显示省略号
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;

// 高度超过 显示滚动条
max-height: 10rem;
overflow-y: auto;

// css calc自动计算  可以解决一些盒子100%被border padding撑开问题
// 使用“+”、“-”、“*” 和 “/”四则运算；
// 表达式中有“+”和“-”时，其前后必须要有空格
.one{
  width: 90%; // 给不支持calc的一个默认值
  width: -moz-calc(100% - 20px * 4);
  width: -webkit-calc(100% - 20px * 4);
  width: calc(100% - (10px + 10px) * 2);
}

for...of可以直接遍历数组，字符串，arguments，集合等等 不能直接遍历对象，在of之前还可以使用解构语法。
for(let a of [1,2,3,4])console.log(a)  
for(let b of "abc")console.log(b) 

// 截取url查询字符串
window.location.search.substr(1) // 个别时候不好使（不是正常网址）
this.$route.query.name
this.$store.state.route.query.name

git init // 初始化仓库 自动创建了一个.git的隐藏目录
ssh-keygen -t rsa 一路回车 //id_rsa密钥 id_rsa.pub公钥 复制公钥 到Key
git remote add origin 'git@github.com:154809748/2018_1_12.git' //远程地址起别名 origin 没有空格
git push -u origin master // 把本地仓库推送到远程仓库 并关联
// 先拉git pull  提示信息（ d    shift+:一起按 输入wq ）在提交 git push ！！！
git pull //提示“no tracking information”，则说明本地分支和远程分支的链接关系没有创建，用命令git branch --set-upstream 'branch-name' origin/'branch-name'
git push origin master //推倒远程仓库 （分支默认是master） 项目不能建在桌面 不是空项目

// 克隆
git clone git@github.com:154809748/2018_1_12.git --depth=1 // --depth=1 克隆的深度为1

// 新建分支拉取代码时 应该先 切换到 master 分支上 
git checkout master // 切换到 master 分支上
git pull origin master // 更新
git checkout -b 分支名 origin/分支名 // 创建新的分支 并移到这个分支 拉取远程代码

// 更改完代码 要切换分支 先存到本地仓库
git status // 查看状态 红色更改 绿色是已经推到暂存区
git add -A // 推到 暂存区
git status 
git commit -m "备注信息" // 存到 当前分支的 本地仓库

// 提测试
 新建分支拉取代码 改代码 或者 写代码 写好了 要测试 假设是B分支
 先新建test测试分支 拉取test测试分支（如果原来已有test分支 更新test分支） 没有冲突 合并B分支和test分支 最后push到远程

// 将写好的代码 提交到远程 （共别人查看拉取）
git add .
git commit -m 更新
git push origin 你的分支名20171225 // 他就可以在远程 下载你的分支了

// 删除远程分支
git push origin --delete <branchName>

// 更新自己开发分支上的master基础
git checkout master           // 切换到master分支
git pull origin master        // 更新master分支
git checkout members_20171229 // 切回对应分支members_20171229 
git merge master              // 把最新的master 合并到 对应分支members_20171229
  // 有冲突 git 中显示如下 (members_20171229|MERGING)
  // Auto-merging src/store/module/api.js // 正常合并的
  // CONFLICT (content): Merge conflict in src/store/module/api.js // 遇到冲突需要去对应文件 改 >>> >>> 改完保存
git status
git add .
git commit -m "更新基本master"

// 在git中查看 具体文件的改动 红色是被删除的 绿色是添加的
git diff 文件名

// git的版本回退（本地） 与 前进
git log // 查看历史版本 后更新的在前 commit ca7fd8a9f12... (commitId)
git reset --hard HEAD~2 // 后退2个版本 git reset --hard HEAD^^
cat 文件名 // 查看某个文件
git reset --hard HEAD a9092d160a4a // 到固定的commitId版本 log只会存储该commitId之前的 所以需要保留git的历史
// 撤销修改  
git checkout -- 文件名 // 撤销红色没有推到暂存区的修改  不会撤销推到暂存区的修改  // 用本地 版本库里的版本替换工作区的版本，无论工作区是修改还是删除，都可以“一键还原” 不会更改 暂存区
git reset HEAD 文件名  // 撤销推到暂存区的修改          不会撤销红色没有推到暂存区的修改

// 远程分支显示不及时 （人家刚推完 你要拉取 显示没有这个分支）
git fetch // 不要在master分支用这个命令 在其余分支更新远程分支

// 创建标签  标签也是一个快照
git checkout master // 先切换到 需要打标签的分支上
git tag v1.0 // 打一个新标签 默认为HEAD
// 指定一个commit id 打标签
// git log --pretty=oneline --abbrev-commit 
// git tag v0.9 6224937 
git tag // 查看
git push origin v1.0 // 可以推送一个本地标签到远程
git push origin --tags // 可以推送全部未推送过的本地标签
git tag -d v1.0 // 可以删除一个本地标签
git push origin :refs/tags/v1.0 // 可以删除一个远程标签 需要先删除本地标签

// git 的文件忽略 (.gitignore文件本身要放到版本库里，并且可以对.gitignore做版本管理)
// 在Git工作区的根目录下创建一个特殊的 .gitignore文件  
// Windows系统会提示你必须输入文件名 放到编译其中就好了
// git add .   git commit -m 添加忽略配置   git push
设置一个 神奇的快捷键
// git lg
// git config --global alias.lg "log --color --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit"

如何在 手机查看 做好的H5网页
// 必须以服务器形式打开 电脑和手机必须链接的是同一个内网 或者 wifi
// 终端cmd中输入 ipconfig    其中IPv4的 10.3.82.192   替换拼接到你服务的前面 比如原来node起的服务 localhose:3000/a --> 10.3.82.192:3000/a 草料等生成二维码工具（10.3.82.192:3000/a） 扫一扫
// 10.3.82.192:8090/h5/#/myMembers?token=4a14030081f5020057728c9add544dfe81c4a73d661d7277 可以拼接token标识


在H5环境 打版
在群里问
// H18 有人用吗
// H18 我的会员 members_20171229 api7200 @李璐婷
在 9f.config.js   
'//123.57.38.167:7200' // 配置 api 接口
'/h18' // 配置 
npm run custom
// 访问地址 http://wxtest.9fbank.com/h18

JSON.parse('[{"a":1},{"b":2}') // 谨记js中 JSON.parse严格要求格式 key 必须都加双引号

window.eval() // 是全局对象的一个函数属性 参数是一个String 会执行其中代码 
// 如果eval()的参数不是字符串，eval()将会将参数原封不动的返回 可以通过 toString() 绕过 使得参数必为 String

数组中获取一个最大值
Math.max.apply(null, []);

取整操作
parseInt(a,10)
Math.floor(a)
a>>0
~~a
a|0

nginx
start nginx.exe // 启动
nginx.exe -s reload // 重载

<p date-index="1" asd="2" >
dom.attributes // attributes 拿到所有属性{ 0: data-index, 1: aaa,2: class,3: style }
dom.dataset // dataset 拿到标准的 自定义属性即 data-XXX
