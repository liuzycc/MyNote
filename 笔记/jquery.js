外链引用jquery.js文件 (JQuery里 $ === jQuery )

入口函数3种写法
$(function(){}); 
// 低版本jQ $(function () {}) 比 window.onload 先运行 高版本jQ 比window.onload后运行     
// $(function () {}) 中的js 要等到外部js运行完成在运行 --- 所以格式你懂的
//入口函数本质是事件 入口函数中的function类似沙箱（所以你懂的）
//与window.onload区别 入口函数多次调用不会冲突（window.onload后面会把前面的覆盖） 入口函数在DOM绘制完成即可执行不需要等待加载图片（window.onload 必须等到页面加载完成（图片加载完成）之后才能执行）
//入口函数与window.onload都出现 一定是 入口函数先执行 与顺序无关
$().ready(function(){});
$(document).ready(function(){});

方法
$('.btn').click(function(){}); //没有on 是个函数 把伪数组里 全都对象 注册click事件
$('.btn').eq(0);               //将伪数组中第一项拿出来组成新的伪数组 (因为.click只能作用与伪数组 不能作用与对象!!!)


$('#box').css('width','200px');    //分别设置行内样式 width等带不带单位都可以 （lineHeight 必须带px !!! 都能识别要不默认倍数了）
$('#box').css('height',200);
$('#box').css('backgroundColor','red');
$('#box').css({width:'200px','height':200,lineHeight:'200px'});  //多属性写法

$('#box').css('width'); //注意有 行内样式 获取的是行内样式的 带px  没有行内样式 获取的是css样式的 带px
总结 .css()设置的是行内样式（加不加单位都行 lineHeight必须加） 获取（有行内样式用行内样式 没有用CSS的  都带px的）


//动画函数都要配合定位使用 position top left 顶到那就相对不动 过渡动画
宽高显示隐藏动画（没写时间 就是显示隐藏）
$('#box').hide(1000,fn);      //最终行内样式变为display:none;  设置毫秒1000 有动画效果 width height opacity-->0 最终display:none
$('#box').show(1000,fn);      //设置毫秒1000 动画效果 width height opacity -->1 最终行内样式变为该元素应有的 block inline-block
$('#box').toggle(1000,fn);    //切换
高度显示隐藏动画（没写时间 默认400）(真对img而言 必须设置html样式alt     width height给一个 !!!)
$('#img').slideUp(1000,fn);   //隐藏 高度过度(其中还配合了overflow:hidden) 最终display:none;
$('#img').slideDown(1000,fn); //显示
$('#img').slideToggle(1000,fn);//切换
透明度显示隐藏动画（没写时间 默认400）
$('#img').fadeOut(1000,fn); //隐藏 透明度过度 最终display:none;
$('#img').fadeIn(1000,fn);    //显示
$('#img').fadeToggle(1000,fn); //切换
$('#img').fadeTo(1000,0.3,fn);  //可设置最终的 透明度

动画函数（只有数值才能用 一些属性入颜色用不了 想要实现靠C3）
$('#img').animate({lineHeight:'20px',opacity:0.3,zIndex:1},1000,function(){});
//回调函数在动画执行完成才会执行
动画都有自动排序 （排序只针对同一元素）
//利  在jquery中一个动画结束调用另一个动画  不用写在回调函数中 因为（动画有自动排序
//弊  如果不想要 使用 .stop(); （！！！！！！！！特别重要）
.stop(a,b) // a 默认false 只终止前面的一个animate     true 终止前面所有 animate
.delay(1000).animate()  //动画延迟1S执行

获取元素 都是获取的伪数组
$('#btn')       //id
$('.left')      //class
$('img')      //标签名
$('*')      //通配符
$('h1,h2,h3')   //并集
$('ol li a')    //后代
$('ul>li')    //子代
$('body>*')     //子代 与 $('body').children() 获取的标签一样
$('p+div')      //兄弟 p后面第一个（并列）
$('p~div')      //兄弟 p后面的所有（并列）

过滤选择器
$('li:odd')   //li伪数组中索引为奇数
$('li:even')  //      索引为偶数
$('li:eq(2)')   //        索引为2  与 $('li').eq(2) 获取的标签一样
$('li:nth-child(2)') // 前提是 子元素都是li 才能用  

属性选择器
$('[class]')  //选中有class属性的
$('[value="1"]')//选中value值为1的

关系选择器 （()内可以写具体的名 如 .children('.l') .children('div')）
$('li').parent()  //每个li父元素所构成的伪数组 （注意可不一定就一个 li在2组里找到的是 2个父元素）
$('li').children()//直接子元素所构成的伪数组
$('li').siblings()//兄弟元素所构成的伪数组(siblings 有s！！！) 兄弟元素的获取基于网页中元素的兄弟
$('li').eq() //对应索引的
$('li').next()    //下一个元素所构成的伪数组
$('li').nextAll() //元素之后的 所有同级元素 构成的伪数组
$('li').prev()    //上一个元素所构成的伪数组
$('li').prevAll() // 选择该元素之前的 所有同级元素 注意是倒序！

基本不用
$('li').find('.l')//后代 li以下的元素 满足条件 效率是不高，所以少用 没有条件是无效的
$('li').parents() //祖先 li的祖先元素 效率是不高，所以少用

转  jQuery对象  
$(dom对象) //如（ $(this) ）

转  dom对象 
$('div')[0] //或者 $('div').get(0)
//使用document 去获取页面上面的元素产生的对象就是dom对象 dom对象不能使用jQuery对象的API 
//使用 $("") 去获取页面上面的元素产生的对象就是一个jQuery对象  jQuery对象 不能直接调用dom 的API 

.hover(鼠标移入事件,鼠标移出事件); //写2个参数 为鼠标移入事件,鼠标移出事件 只写一个参数代表鼠标移入移出都执行相同代码！！！

经验//没事多用用 .stop()  toggle() 系列很方便

类名操作（都是原来的类基础上操作 不会有覆盖问题！！！）
.addClass('b c d')    //在原类基础上添加 多个       原生中 .className 是对原有值得覆盖
.removeClass('b c d') //在原类基础上删除 多个 
.toggleClass('b c')   //每次事件触发  切换 如原来 class="a c" ---> class="a b"  

获取元素的索引
$('li').index() //jquery自带的方法 但是 兄弟元素都是自己才准！！！ （这样的 ul>li+div+li）(div index为1) 

jQuery中的排他（用的是 链式写法 + siblings() 都是套路！！）
$(this).addClass().siblings().removeClass();
//下拉列表 显示隐藏 .hover() （鼠标移出都不显示）  tab切换 .mouseover （鼠标移出显示最后在的那个）

获取和设置表单元素的值（表单元素）
.val()    //获取
.val('123') //设置
.val('')    //清空

创建元素
$('<div>123</div>')   //创建元素  原生 document.createElement('div')

创建元素并追加内容
$('ul').prepend('<li>子前加</li>')  //在ul子元素最前面添加
$('<li>子前加</li>').prependTo('ul')  
$('ul').append('<li>子后加</li>')   //在ul子元素最后面添加
$('<li>子后加</li>').appendTo('ul')   

$('ul').before('同级前添加')
$('ul').after('同级后添加')

删除 清空
$('li').remove();   //删除li元素及以下 （jquery里不用找父元素）
$('li').empty();  //清空li元素里面的所有东西 （包括标签）

获取内容
$('ul').text()    //获取其下 文本内容   原生中的 innerText
$('ul').text('123') //设置其下内容 与 html一样的 会覆盖里面的东西
$('ul').html()    //获取其下 所有东西   原生中的 innerHTML
$('ul').html('123') //设置其下内容

克隆
$('ul').clone(true) //克隆 参数为true表示相关事件也克隆  原生中 e.cloneNode(true)



快速注册事件（静态的 只能给本来在页面存在的元素添加事件 若有新的标签创建）
$().click(function(){});   //快速注册事件 也是可叠加 类似原生中 事件绑定

on注册事件（动态的！！！----创建的元素也可以共享绑定的函数）
$('.father').on('click','.son',{name:'xx'},function(e){// .father 只做委托 .son是事件源  (委托和事件原 必须是嵌套关系)
  console.log(e);           //事件对象参数 和以前的一样
  console.log(e.data.name); //参数{}中的数据也一并传入 e.data获取的就是{}这个对象
  this  //这个this 是 .son  说白了也是事件源触发的
});

bind注册事件（不能委托事件）
$('.father').bind('click',{},function(){});

delegate注册事件（只能委托事件 子元素选择器 在前 事件类型在后）
$('father').delegate('.son','click',{},function(){});//$('.father').delegate(子元素选择器,事件类型,json格式数据,事件处理程序)

事件解绑
$('.father').off('click')       // 解绑所有$('.father')的click事件
$('.father').off('click', '函数名') // 只解除这一个
$('').unbind('')
$('').undelegate()
//juery中注册事件都可叠加 如果只希望解绑其中的某一个，可以传入这个事件处理程序的名称

//创建元素的同时是可以直接给元素添加自定义属性
$('<img data="20">')  

获取DOM元素属性（一般就用 .prop() 自定义属性才用.attr() ）
$().prop('checked')  //不能获取自定义属性
$().attr('data')     //不能获取单一直属性（checked selected disabled 等)  //原生JS中获取和设置自定义属性 通过 setAttribute() getAttribute()
修改
$().prop('alt','替换文本') //单属性设置 attr()一样
$().prop({           //多属性设置
  alt:'替换文本',
  title:'提示文本'
})

总结：jquery中修改行内样式  $().css({color:'red'});
        获取属性的值  $().prop('checked'); $().prop('className');
            修改类样式    $().addClass();  $().removeClass(); $().toggleClass();
            设置文本      $().text();  $().html();  $().val();


jquery链式写法 （本质 前一个方法内部返回值 return this 直接用于后一个方法 ）
使用链式写法 后一个 容易看错this（this就是最终选择的对象）


获取设置宽高
$().width()    //获取元素的width 不带px       对比.css('width') 带px
$().height()   //可以设置 
$().innerWidth()  // width + padding          可以设置 设置完 多余的只由width来承担
$().innerHeight()
$().outerWidth()  // width + padding + border 可以设置 设置完 多余的只由width来承担
$().outerHeight()
$().outerWidth(true) // width + padding + border + margin
$().outerHeight(true) // width + padding + border + margin

jquery获取的offset是对象！！！
$().offset().top            //在jq中 一直相对body  与原生pagesY很像  原生中的.offsetTop 相对最近定位的父级元素 没有才是body
$().offset().left
$().offset({top:30,left:30})//可以设置 一直相对body  最终是改变定位中的top left 实现的（元素没定位自动加relative 有absolute就用）

$().position().top          //自身定位就是元素定位的 top left 自身没定位 不准 不要用了
$().position().left         //不可设置！！！

$(window).scroll();    //浏览器添加滚动事件
$(window).scrollTop(); //浏览器垂直滚动距离   可设置
$(window).scrollLeft();//浏览器水平滚动距离

返回顶部固定写法
 function(){
  $('html,body').animate({scrollTop:0},1000);
 }

隐式迭代（说白了jquery中自带了循环）
可以循环 赋 相同的值  //如 $().click();  $('button').text(1);
不能循环 赋 不同的值  
不能循环 取值         $('input').prop('checked')  只能获取循环中的第一个!!!
 
$(this).index()     //取出某一个的值是可以的 

each() 可以循环 赋 不同的值
var a = [];
$().each(function(i,e){ //此时 this 和 e 一样
  e.innerHTML = a[i];
  $(e).html(a[i]);
});


 推选用
.hover()
.mouseenter() //鼠标移到子元素上 不会触发 在内部只能触发一次
.mouseleave()


.mouseover()  //鼠标移到子元素上 也会触发(因为冒泡)
.mouseout()

jQuery插件其实就是基于jQuery的拓展
先引入jquery-1.12.2.min.js
在引入 jQuery插件

关于懒加载插件的使用
结构中的图片的一个 data-original 自定义属性是必须的，就是用这个属性存储着图片的路径
图片的宽度和高度属性也是必须的
//激活lazyload插件
  $(function () {
        $('.lazy').lazyload({
            threshold :300
            });
    });
//<img class="lazy" data-original="images/01.jpg" alt="" width="1280" height="800" >

快捷键 Ctrl + d 选中最近的相同的
       Home   选中部分的最前面
       End    选中部分的最后面
       Shift + Tab 向前缩紧
       Ctrl + Shift + 回车 插入一行
       Ctrl + Shift + 左右方向键 选中长度不等的内容
       Ctrl + Shift + H 格式化
//  PC端 IE8+    在移动端可放心使用
var e = document.querySelector('.box');    （只返回第一个DOM元素）
var ae = document.querySelectorAll('.box');（全部DOM元素构成的伪数组）仍然是Dom对象 不能直接使用$方法

多库共存的2种解决办法
//解决办法1：  使用 jQuery 代替 $
jQuery.noConflict();  //解除$被占用
//解决办法：   卸载$符号，把jQuery存放到另一个变量里
var my$ = jQuery.noConflict(); //内部返回本身  以后再用就 my$()


each函数的底层，其实就是就是通过 for 循环实现的
$(function(){
  $('div').each(function(i,e){
    if($(e).is('.dv3')){  //通过  $().is('.dv3') 判断该对象有没有类名 .dv3
      return false;     //通过 return false 阻止each循环
    }
  });
});

事件委托原理（事件本质绑定到父元素上 因为冒泡所以 都能触发  但是 只有在子元素上才触发）
//例如点击事件
father.onclick = function(e){
  if(e.target.className=='son'){//判断 当前点击目标的类样式 是否为son 
    //满足条件才触发效果
  }
};

jQuery插件拓展 
//静态方法添加JQ插件
  $(function(){
    (function($){
      $.hai = function(){

      };
    }(jQuery));
  });

  $(function(){
    (function($){
      $.extend({  //通过拓展的方法 向$中添加方法
        hai:function(){
          
        }
      });
    }(jQuery));
  });

//实例方法添加JQ插件
  $(function(){
    (function($){
      $.fn.now = function(){

      };
    }(jQuery));
  });

  $(function(){
    (function($){
      $.fn.extend({
        now:function(){

        }
      });
    }(jQuery));
  });
//例 设置或返回元素的颜色
  $(function(){
    (function($){
       $.fn.extend({
                getColor:function(color){
                    if(arguments.length==0){
                        return this.css('backgroundColor');
                    }else{
                        this.css({backgroundColor:color});
                    }
                    return this; //this 就是JQ对象
                }
            });
    }(jQuery));
  });

jq中获取标签属性的值 prop() attr()
  获取css属性的值  高宽类 直接 width() height()  获取margin-top  等 只能使用 css('marginTop') 一定注意是带单位的 在不就只能转到 dom对象.getStyle() 本质（getComputedStyle()）
    添加类样式    addClass()   （基于原有 不会覆盖）
            removeClass()

jq中做到 给多个对象同时添加循环随机动画 //核心 是 时间的同步
  $(function(){
        function f(){
            $('div').each(function(i,e){
                $(e).stop().animate({
                    left:random(0,1100),
                    top:random(0,550)
                },1000);
            })
        }
        var time = setInterval(f,1000);
    }); 



补充部分

$('div:lt(2)') //所选取的 索引值小于2
$('div:gt(2)') //所选取的 索引值大于2
$(':header')   //h1  ---  h6
$('div:first') //所选取的第一个
$('div:last')  //所选取的最后一个
$('div:has(p)')//所选取所有含有p标签的div
表单选择器
$(':text');
$(':password');
$(':radio');
$(':checkbox');
$(':submit');
$(':image');
$(':reset');
$(':button');
$(':file');
表单的过滤选择器
$(':checked'); //选择被checked
$('select option:selected'); //选择select 子元素被selected

indexOf 扩展
明确的告诉你 number 类型没有 indexOf 方法 要想使用 必须转化使用
// var num = 123;
// console.log( num.toString().indexOf(2) ); //()内的number类型会隐式转换
// console.log( (''+num).indexOf(2) );

数组有 indexOf(a,startindex) 方法   
// // start 大于或者等于了数组的长度 不会检索 直接返回-1
// var a = ['1','2','2'];
// console.log( a.indexOf('2') ); //1  只会匹配到第一个停止
// console.log( a.indexOf(2) ); // -1  数组的indexOf采用===不会隐式转换


对于使用了模板的（无论是PHP自带的 还是用HTML的模板） 采用PHP方式 每次都是重定向页面 所有代码都会执行 可以不用事件委托 但是AJAX 必须使用事件委托！！！

JQ中事件委托 
// $('.father').on('click','.son',function(){
//  this //this 是 .son
// });
// $('.father').on('click',$('.son'),function(){
//  this //this 是 .father
// });

MySQL 语句
// and or 连用优先级
// SELECT id,name FROM users WHERE email='1@con' and ( or or or );

// 查找
// SELECT id,name FROM users WHERE id=2

// 更新
// UPDATE users SET name=1,sex=2 WHERE id=2 

// 删除
// DELETE FROM users WHERE id in(1,2,3)
//                         id like '%我%'

// 添加
// INSERT INTO users(`email`,`password`,`nickname`,`slug`,`status`) 
// VALUES('1@com','123456','q','q','unactivated'), 
// ('2@com','123456','w','w','unactivated'),
// ('3@com','123456','e','e','unactivated')


JQ中 有这么个 .toArray() 可以将伪数组转化为真数组
// 例如 $('input').toArray().map(function(){});  //转化为真数组后有一些方法就可以用了


一般实现 input的 改变value 触发的事件  使用 input 事件！！！
但是 通过js改变value不会触发 下拉列表选取不会触发
// 1. onchange事件与onpropertychange事件的区别：
// 　　onchange事件在内容改变（两次内容有可能相等）且 失去焦点时触发；onpropertychange事件是实时触发，每增加或删除一个字符就会触发，通过js改变也会触发该事件，但是该事件是IE专有。
// 2. oninput事件与onpropertychange事件的区别：
// 　　oninput事件是IE之外的大多数浏览器支持的事件，在value改变时实时触发，但是通过js改变value时不会触发；onpropertychange事件是任何属性改变都会触发，而oninput却只在value改变时触发，oninput要通过addEventListener()来注册，onpropertychange注册方法与一般事件相同。
// 3. oninput与onpropertychange失效的情况：
// oninput事件：
// 　　（1）当通过js改变value时，不会触发；
// 　　（2）从浏览器的自动下拉提示中选取时，不会触发；
// onpropertychange事件：
// 　　当input设置为disable=true后，不会触发。


关于if else  三元表达式  和  ||  的替换关系
// if else 在代码量小的时候  可以使用三元表达式代替
// 在 三元表达式 其中某条件为空 可以使用 ||代替
// 例如文本的长度 是大于等于0的  等于0的时候给默认值
// if(text.length>0){ i=text; }else{ i="moren"; }
// text.length>0 ? i=text : i='moren' ;
// i = text || 'moren';


session_start();//开启session 才能使用 设置 $_SESSION
//一旦开启session_start() 会产生 session_id() 记录在服务器 
//PHP 查看浏览器的  $_COOKIE['PHPSESSID']
//浏览器端查看为 document.cookie

unset($_SESSION['id']); //删除$_SESSION['id']的值 来结束单个会话 在验证是否登录过的时候 第2层进不去

session_destory(); //通过销毁当前session_id() 结束当前的会话

$_SESSION=array(); //删除多个会话，把一个空数组给$_SESSION，把之前的值覆盖了，这样并不是将$_SESSION销毁 ，还可以重新赋值


$('p').prop(); //获取设置 单值属性 checked等 
//通过prop可以设置自定义属性 设置完可以通过prop获取 只不过Element不显示 
$('p').attr(); //获取设置 自定义属性

$(':hidden');  //返回所有不可见的元素的jQuery对象
//visibility: hidden;和opacity: 0;都被视作可见的，因为它们在页面上占据了相应的物理空间。

$('form').on('submit',function(){}); //当submit按钮被点击时触发
$('form').serialize(); //jq中 获取form 表单name=value data数据简单方式
$('form')[0].reset();  //dom对象的 重置表单方法
.trigger('change');    //同时出发对应的change事件

header( "Content-Type: application/json" );//PHP明确指明响应头 js获取时 不用使用JSON.parse()  直接获取的就是json格式的数据 [{},{},{}]

面试题:
给定一个 url 地址, 要求将其解析出来
http://www.itcast.cn:8080/abc/def.html?k=v&kk=vv#mark
host     主机 "www.itcast.cn:8080"
hostname 主机名 "www.itcast.cn"
port     端口 "8080"
pathname 路径 "/abc/def.html"
search   查询的参数 "?k=v&kk=vv"
hash     锚点 "#mark"

jQ中3种判断 元素是否含有类名 （含有返回true）
$('div').is('.a');   
$('div').hasClass('a');
$('div').prop('className')=='a';


/*jquery的插件封装机制  基于  $.fn */
$.fn.fullpage.moveSectionDown(); //触发插件事件的方法
$.fn.fullpage.moveTo(1,0);

经验
// 基于中线 left:50%; transform: translate(-50%); 在都 基于底线（或顶线） bottom  这样是一个简单的整体布局（有点适配的感觉）
// 为了重置动画考虑 也为了方便 通过动态添加类样式实现的动画 一般写类样式作用在最外边的父容器上 .selected img
// 动画集 需设置 forwards 使元素停留在最后的位置
// 过度 直接就过度到 最后的位置
// 动画集可连续 （在设置了forwards 前一个的动画集的to状态 是后一个动画集from状态）（应用在3个屏幕 真对同一个元素的动画）

JQuery中 监听动画的结束
// animation() show系列 slide系列 fade系列 都是通过 回调函数实现（ 在动画执行完成才会执行 ）
监听C3 动画调用结束 通过对应的事件
.a{
    animation: name 1s linear infinite alternate forwards;
}
$('.a').on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){});
/* animationend  事件 动画结束事件*/
/* transitionend  事件 过渡结束事件*/ 

全屏切换动画元素层级问题（同级定位元素 看子元素层级）
// section1 section2 两屏 相对定位 并列关系 
// 默认 section2子元素 在 section1子元素上面
// 通过设置section1子元素的层级 可以在section2子元素上面

在不刷新网页的情况下 重置动画
// jquery中的帧动画 fadeIn() animate()等 最终影响行内样式 style
// c3中的补间动画 transition animation 一般通过JS 修改类样式 class="donghua" 也更改行内样式
$('.section [style]').removeAttr('style'); //删除范围内的 style属性
$('.donghua').removeClass('donghua'); //删除动画类


动画集 实现连续动画（js动态给父元素添加类selected）
// .selected img{
//  animation: name 1s linear; //name 1s 1s linear infinite alternate forwards;
// }
// @keyframes name{
//  from{}
//  50%{}
//  to{}
// }
过度延迟 实现连续动画 （js动态给父元素添加类selected）
// img{
//  top: 10px;
//  left: 10px;
//  transition: top 1s linear,left 1s 1s linear;
//  //能不写all尽量不写 除非很明确前后过的属性
// }
// .selected img{
//  top: 50px;
//  left: 50px;
// }

背景定位 关键字和%的关系 （没写默认center 50%）
// %基于 父容器宽高-背景宽高
// background: url() no-repeat center center;
//              50%  50%
//              left bottom
//              0%   100%

定位3层布局
position: absolute;
bottom: 300px;  //排版
left: 50%;    //排版
transform: translate(-50%);//排版  过渡动画用
margin-bottom: 10px;  //做过渡动画用
margin-left: 10px;      //做过渡动画用
//注意 一定要有对应关系 bottom  margin-bottom （margin-top不好使）



JQ中有  $('li:first'); //li中第一个
        $('li:last');
        $('li:first-child'); //受结构 影响
        $('li:nth-child(1)');
        $('li:last-child');

利用 delay().animate() JS延迟 实现多组动画连续 
// 构建连续动画
// $().each(function(i,e){
//  $(e).delay(i*400).animate({opacity:1;},400);//执行i*400+400(最后一个)
// });
利用 transition-delay CSS延迟 实现多组动画连续
each(function(i,e){
  index++;
  $(e).css({
    'transform': 'rotateX('+(-index*90)+'deg)',
    'transition-delay': i*0.25 + 's'
  });
})

// 节流阀 最长的动画都结束了 以保证所有的动画都结束
$('.box li:last').on('transitionend',function(){
  key = false;
});

background: url() no-repeat center/cover; //背景图 完全居中 充满

H5 classList对象（基于原有 不会覆盖）  jQuery中class样式操作
dom对象.classList.add();               JQ对象.addClass();     //添加类
dom对象.classList.remove();            JQ对象.removeClass();  //删除类
dom对象.classList.toggle();            JQ对象.toggleClass();  //切换类
dom对象.classList.contains();          JQ对象.hasClass();   //判断含不含有类 含有返回true

H5对自定义属性有了新的定义 
// 它认为必须以 data- 开始才是自定义属性
// 通过dataset对象 设置和获取自定义属性
// data-my-index="1"
dom对象.dataset.myIndex //获取
dom对象.dataset['myIndex'] = '2'; //设置 多- 遵循驼峰命名 省略data

// 对于 <div id="#qq" data-aa="66"></div>data-aa 这样的H5自定义属性的值的获取 在JQ中  $('qq').data('aa') 得到 66

前端 向服务器请求数据的方式
1.表单提交
2.ajax请求
3.a标签 href  img标签 src  script标签 src  link标签 href ...含有src href属性的标签

// css3兼容处理 加私有前缀
// webkit  谷歌
// moz     火狐
// o       欧鹏
// ms      IE
// 加私有前缀的意义 更大程度兼容某个浏览器的更多本版

做全屏操作  对任意元素生效
document.documentElement.webkitRequestFullScreen();

兼容SEO处理：
替换当前历史记录 //仅仅是替换不会追加新的历史记录
history.replaceState(null,null,'a.html');
追加新的浏览历史记录 //刷新跳转
history.pushState(null,null,'a.html');/*参数： 历史记录的数据  关于历史记录的标题  历史记录的地址 */
监听历史记录的切换事件（当前进或后退时触发 history.go() history.forward() history.back() 触发）
window.onpopstate = function(){
  console.log(location.href);
};

// 1. 为什么要了解这个方案
// 2. 渲染的方式有两种  同步渲染  异步渲染
// 3. 同步渲染---> 后台渲染（php,java,c#）在服务端执行返回html格式的字符串在浏览器展示
// 4. 异步渲染---> 通过js(xhr,jsonp) 把数据加载过来然后再追加到页面
// 5. 同步渲染的页面---源码就是html格式的字符
// 6. 异步渲染的页面---源码会通过js追加新的内容
// 7. 当搜索引擎去抓取页面的时候，通过地址栏去回去页面源码，收录存起来（网页快照）
// 8. 当用户去搜索引擎搜索关键字的时候  去搜索对应的页面
// 9. 同步的页面搜索的优化比较好 当时异步方式渲染的页面 就会少很多关键字
// 10. ajax 渲染不利于seo

// 11. 利用 pushState();

本地存储 只能存储字符串，可以将JSON.stringify(对象) 编码后存储
sessionStorage //会话级别的本地存储 （只能同一页面下访问 关闭窗口，存储的数据清空） 约5M
sessionStorage.setItem('name',1);  //设置
sessionStorage.getItem('name');    //获取
sessionStorage.removeItem('name'); //删除单个
sissionStorage.clear();            //全部清除

localStorage //本地存储 （浏览器窗口下所有页面共享 永久生效，除非手动删除） 约20M
localStorage.setItem('name',1);  //设置
localStorage.getItem('name');    //获取
localStorage.removeItem('name'); //删除单个
localStorage.clear();            //全部清除

获取当前客户端浏览器的地理定位
/*获取的是谷歌的地理定位服务  需要强健的网络*/
navigator.geolocation.getCurrentPosition(function(position){
  console.log(position);
},function(error){
  console.log(error);
});
// position.coords.latitude纬度
// position.coords.longitude经度
// position.coords.accuracy精度
// position.coords.altitude海拔高度

alert(window.navigator.onLine);//返回当前的网络状态 true false
// window的网络监听的事件 online 在线 offline 离线
window.addEventListener('online', function () {
  alert('网络已连接');
});
window.addEventListener('offline', function () {
  alert('网络已断开');
});

流式布局：就是%布局 内容向两侧填充 （理解为流动的布局）
受父元素padding影响 基于父元素内容的宽度
// 视觉窗口：viewport 是移动端特有的 是一个虚拟的区域 用于承载网页
// 承载关系 浏览器--viewport--网页
// 国际上通用的适配方案 标准移动端适配方案
// 如果什么都没设置 走的是viewprot默认设置
// 通过设置 <meta name="viewprot" content=""> 在head里面紧跟编码设置
// width 可以设置宽度 （device-width 当前设备宽度）
// height
// initial-scale 设置默认缩放比
// user-scalable 设置是否允许用户自行缩放（ yes no 1 0 ）
// maximum-scale 设置最大缩放比
// minimum-scale 设置最小缩放比
<meta name="viewprot" content="width=device-width,initial-scale=1.0,user-scalable=0">
meta:vp 快捷方式

移动端布局 一般设计稿640px（iphone4,4s） 750px（iphone6） 最小宽度320px保证排版不乱
通过给盒子设置 box-sizing:border-box; width就是元素的 border+padding+元素的width 在设置% （防止内容溢出 提升用户体验）
通过设置 -webkit-tap-highlight-color: transparent; //轻触 显示透明色 做到兼容

去除img的基线对齐所引起的下间隙 
// img{vertical-align:top;}
// img{display:block} 
// 给父元素设置font-size:0px;

sessionStorage实现 跳转页面 有曾经位置
$(function(){
  $('html,body').scrollTop(sessionStorage.getItem('scroll') || 0);
});
$(function(){
  $(window).scroll(function(){
    sessionStorage.setItem('scroll',$(this).scrollTop());
  });
});

CSS排版技巧
对于轮播图div>ul>li*8  div{width:600px;} ul{width:800%;} li{width:12.5%;}

一个元素定位脱标（absolute fixed） width: 100%;基于最近的定位元素
父元素的padding会限制 子元素的width: 100%

% float:left 排版 
ul>li*8     ul{width: 100%;} li{float:left;width:25%} //2行

移动端 精灵图公共样式
*,*::before,*::after{
  box-sizing: border-box;
  -webkit-box-sizing: border-box; //兼容低版本谷歌
  tap-highlight-color: transparent;
  -webkit-tap-highlight-color: transparent; // 清除 轻击高亮效果
}
body{
  font-family: sans-serif; //移动端的一个子字体
}
input,textarea{
  resize: none; //不允许改变尺寸
  -webkit-appearance: none; //元素的外观  none没有任何样式
}
[class^="img"],[class=" img"]{ // 只要含有img类
    background-image: url();   //防止覆盖
    background-repeat: no-repeat;
    background-size: ;
}

移动端的触摸事件
touchstart   //当手指触摸屏幕的时候触发
touchmove    //当手指在屏幕滑动时候触发
touchend     //当手指离开屏幕的时候触发
touchcancel  //当被迫终止滑动的时候触发（来电，弹消息）

移动端事件对象
e.changedTouches //改变后的触摸点集合      每个事件都会记录
e.targetTouches  //当前元素的触发点集合    touchend无法记录触摸点
e.touches        //页面上所有触发点集合    touchend无法记录触摸点

e.touches[0] 第一个触摸点的属性
clientY  clientX //基于浏览器窗口（视口）
pageY pageX      //基于页面
screenY screenX  //基于屏幕

封装的手势事件 移动 大于50PX
// window.onload = function (){
//  var bindS = function (dom,fn1,fn2){
//    var s = 0;
//    var c = 0;
//    var i = false;
//    dom.addEventListener('touchstart',function(e){
//      s = e.targetTouches[0].clientX;
//    });
//    dom.addEventListener('touchmove',function(e){
//      i =true;
//      c = e.targetTouches[0].clientX - s;
//    });
//    dom.addEventListener('touchend',function(e){
//      if(Math.abs(c)>50 && i){
//        if(c>0){
//          fn2 && fn2.call(this,e); //右 事件 存在 则执行
//        }else{
//          fn1 && fn1.call(this,e);
//        }
//      }
//      // 初始化
//      s = 0;
//      c = 0;
//      i =false;
//    });
//  };
// };
封装的Tap事件 不移动 时间小于150
// window.onload = function(){
//  var bindTap = function (dom,fn){
//    var t = 0;
//    var i = false;
//    dom.addEventListener('touchstart',function(e){
//      t = Date.now();
//    });
//    dom.addEventListener('touchmove',function(e){
//      i = true;
//    });
//    dom.addEventListener('touchend',function(e){
//      if(!i && Date.now()-t<150){
//        fn && fn.call(this,e);
//      }
//      t = 0; //初始化
//      i = false;
//    });
//  };
// };
两栏布局 自适应 （浮动元素要写在前面！！！）配合相对定位 实现里面的元素正常定位
// <div class="box1"></div>  .box1{float:left;position:relative;} 
// <div class="box2"></div>  .box2{overflow:hidden;position:relative;} 触发bfc 使其绝缘 不要设置width

网页不显示滚动条 html,body{width: 100%;height: 100%;} .box{width: 100%;height:100%;overflow:hidden;}
// <html>
// <body>
//  <div class="box"></div> 
// </body>
// </html>

背景缩放裁剪
box-sizing: border-box; /*固定*/
background-origin: content-box; /*从哪开始对齐 默认border-box 切记不要设置 background-position: center;*/
padding: 10px; /*挤背景*/
background-clip: content-box; /*从哪开始裁剪 默认border-box 以外的背景被裁剪*/


媒体查询 （用于解决响应式布局 一个页面适配多种终端 bootstrap底层也是通过媒体查询实现的）
// 超小屏设备 768px以下    100%
// 小屏       768-992px    750px
// 中屏       992-1200px   970px
// 大屏       1200px以上   1170px
// 语法and后面必须加空格！！！！！！
// @media screen and (max-width: 768px){
//     .container{
//         width: 100%;
//         background-color: red;
//     }
// }
// @media screen and (min-width: 768px) and (max-width: 992px){
//     .container{
//         width: 750px;
//         background-color: green;
//     }
// }
// @media screen and (min-width: 992px) and (max-width: 1200px){
//     .container{
//         width: 970px;
//         background-color: blue;
//     }
// }
// @media screen and (min-width: 1200px) {
//     .container{
//         width: 1170px;
//         background-color: #333;
//     }
// }

// .css样式适用于 最大设备宽度为480px 这里的 max-device-width 所指的是设备的实际分辨率 也就是指可视面积分辨率
<link rel="stylesheet" media="screen and (max-device-width:480px)" href="iphone.css" />

// 使用关键词 not 用来排除某种制定的媒体类型
@media not print and (max-width: 1200px){ 样式代码 } // 样式代码将被使用在除打印设备和设备宽度小于1200px下所有设备中
// 没有写 默认为 all 表示所有设备
@media all and (max-width: 1200px){ 样式代码 }
// 只有 彩色屏幕
@media only screen and (max-width: 1200px){ 样式代码 }

Bootstrap 中集成了 normalize 但是还是需要 自己的reset文件
// 都是增强浏览器的表现一致性但是normalize不会重置已经一致的元素（例如对于ul本身的list-style不会重置    reset会重置 ）

/*自定义字体图标*/
/*1.通过@font-face定义自己的字体*/
@font-face {
    /*2.申明自己的字体名称*/
    font-family: 'my';
    /*3.引入字体文件（约束某一段字符代码什么图案）*/
    src:
    url(../fonts/MiFie-Web-Font.svg) format('svg'),
    url(../fonts/MiFie-Web-Font.eot) format('embedded-opentype'),
    url(../fonts/MiFie-Web-Font.ttf) format('truetype'),
    url(../fonts/MiFie-Web-Font.woff) format('woff');
}
/*4.怎么使用维护性更好*/
.icon{
  font-family: 'my';
}
.icon_phone::before{
    content: "\e908";
}
.icon_tel::before{
    content: "\e909";
}

Bootstrap中
.container //响应式布局容器 默认会有padding-left padding-right 各15px
.container-fluid //流动布局容器

栅格系统
  .row       //会填充父容器的15px的左右内间距（通过 margin-left margin-right 各-15px）
  .col-*-*   //默认会有padding-left padding-right 各15px , 每一行的分等份，默认分成12等份 ，数字代表的是占多少份
  .col-lg-4  //大屏设备包含自身及以上生效    
  .col-md-4  //中屏设备包含自身及以上生效
  .col-sm-4  //小屏设备包含自身及以上生效
  .col-xs-4  //超小屏设备包含自身及以上生效

  栅格可以嵌套

  列的偏移 对应的列col-xs-6-offset-3  偏移几份  （注意其前手元素col-xs-3要是偏移了是影响后手元素的）
  // <div class="col-xs-3"></div>
  // <div class="col-xs-6 col-xs-offset-3"></div>

  列的排序 对应的列col-xs-3-push-9 （push加 pull减 就是自身相对盒子 内部通过position:relative实现的）
  // <div class="col-xs-3 col-xs-push-9"></div>
js调用模态框的显示与隐藏
  $('#myModel').modal('show');
  $('#myModel').modal('hide');
  $('#myModel').om('hide.bs.modal', function () {}); // 在模态框被隐藏（并且同时在 CSS 过渡效果完成）之后被触发
显示与隐藏 （3.2版本以后  建议使用hidden）
  .hidden-lg  //大屏隐藏 其余显示
  .hidden-md
  .hidden-sm
  .hidden-xs
  .visible-lg //大屏显示 其余隐藏
  .visible-md
  .visible-sm
  .visible-xs

  .btn         //普通按钮
  .btn-default //白色按钮
  .btn-primary //蓝色按钮
  .btn-lg      //加大一码
  .btn-block   //转block width100%
  .pull-left   //强制做浮动   -----   简单 自己排版用
  .pull-right  //强制右浮动
  .text-left   //文本左对齐
  .text-right  //文本右对齐
  .text-center //文本居中
  .text-danger //文本警告红色
  .modal-sm    //300*175 小模态框 (模态框那个 最外层是遮挡层 给第2层设置modal-sm)
  
  .navbar //导航模块
拷贝源码的模块样式 更改模块名称（替换对应类名）  应用层叠性覆盖更安全 ！！！
  .navbar-default  //样式模块 （webStorm点进去）
 
  .navbar-toggle   //切换按钮样式
  data-toggle="collapse"   //声明是什么组件（此处是折叠组件）
  data-target="#bs-example-navbar-collapse-1" //形式 （目标元素=选择器） 选择对应的元素 并操作 （此处是折叠操作）
  href=".box" //a标签的 href=选择器 也可实现 选择对应元素
  // aria-expanded="false"  aria-* 代表提供给屏幕阅读器使用的（盲人阅读器）
  // class="sr-only" screen read only  代表提供给屏幕阅读器使用的（盲人阅读器
  // id="bs-example-navbar-collapse-1" //对应的元素
  .carousel //轮播图模块
  .slide //滑动效果
  data-ride="carousel" //初始化轮播图属性 
标签页Tab 根据ID查找对应的显示很灵活 

  .nav-tabs //样式模块
  .active //默认选中
  data-toggle="tab" 选项卡式 data-toggle="pill" 蓝色胶囊式
  // <ul class="nav nav-tabs">页签
  //     <li class="active"><a href="#home" data-toggle="tab">1</a></li>
  // </ul>
  // <div class="tab-content">页体
  //     <div class="tab-pane active" id="home">1</div>
  // </div>

Bootstrap 也不是万能的 在需求得不到满足时 可以自己使用 媒体查询限定条件 达到需求

媒体查询 用层叠性的一种写法 （screen and 可省略）
// .container{
//  width: 100%;
//  height:400px;
//  margin:0 auto;
// }
// @media (min-width:768px){
//  .container{
//    width:750px;
//  }
// }
// @media (min-width:992px){
//  .container{
//    width:980px;
//  }
// }
// @media (min-width:1200px){
//  .container{
//    width:1170px;
//  }
// }
模板引擎原生语法
不涉及输出的直接写
// <% for(var i = 0; i < list.length; i++){ %>
// <% } %>
模板引擎内部 不可以使用 $ 等外部函数 但是可以 引入
  template.helper('tpl',function () {
    return jQuery;
  })
涉及输出的 必须使用 =号 =号必须顶格
// <%=(i+1)*2==0?1:0%>  //() * == 三元 正常使用
// <%=list[i]['p_img']%> 包含属性['']也可访问  字符串url后面不能加空格

JQ对象中的事件参数e n.Event 中有一个originalEvent对象就是TouchEvent （移动端）

$.ajax({
  type: 'POST',
  data: {},
  dataType: 'json',
  url: '',
  async: false, // 默认true
  success: function (data) {
  },
  error: function () {
  }
}) //ajax请求 一般在服务中打开 尽量不要本地打开
$.post 或者 $.get 默认都是 异步请求 获取的data是json字符串 使用JSON.parse(data)转
$.ajaxSettings.async = false; // 保证同步加载
$.ajaxSettings({async: false});

.json 文件 不能使用注释// 运行会报错

盒子阴影： 
// box-shadow: 0 0 5px 20px blue inset;
// 水平偏移 垂直偏移 羽化度 延伸度 颜色 内阴影

写兼容细节
console.log(window.asd); //对象下 没有这个属性 是undefined
console.log(window.asd()); //对象下 没有这个方法 直接报错
console.log(e); //变量不存在 直接报错
function ff(e){
  console.log(e); //函数中有e是事件事件参数 没有 没有传形参 undefined
}


css3规范 :伪类  :: 为元素
p:first-of-type //css3选择器 通过p找父元素 在通过父元素找所有子元素类型为p 然后再找第几个 
  // <p></p>
  // <p class="red"></p>
  // .box .red:first-of-type // 匹配父元素.box内同类型标签元素p中的第一个元素.test 然而并没有
p:first-child   //通过P找到父元素 在通过父元素找所有的子元素 找第一个元素 匹配判断类型(如果不是选择器失效)
p:nth-of-type

less （简化CSS编写 降低CSS维护成本 less向下兼容支持css语法）
@charset "UTF-8"; //声明字符集
//这种注释 对应转换不了 （css中没有这种注释 ）
/*这种注释 可以转换*/
变量声明 （严格区分大小写）
@a:10px; //数值
@b:box;  //类名

混入 //可以理解为 函数 继承 
.@br(@number:5px){ //默认值 定义了参数（没有默认值）调用的时候必须传参 ，（有默认值）可传可不传
  border-radius:@number;
  -webkit-border-radius:@number;
}
.c{
  line-height: 10px;
}

导入
@import url(./banner.less); //导入别的less文件

.@{b}{ //使用{}拼接类名 .box
  width:@a;
  &:hover{ //使用&连接嵌套的元素
    height:@a*10; //100px
    color:red+yellow+blue; //#fff

  }
  img{
    .c(); //类混入
    .@br(); //函数混入
    background-color:darken(red,20%); //内置函数 查表 亮度提高20% 
  }
}

less在浏览器上使用的方法
// <link rel="stylesheet/less" type="text/html" href="./index.less" />
// <script src="less.js" type="text/javascript"></script>

 
@list:320px,750px;  //less声明数组 320px,360px,375px,384px,400px,414px,424px,480px,540px,640px,720px,750px;
@len:length(@list); //数组长度
@baseWidth:750px;   //设计稿宽 以基准宽
@baseFontSize:100px;//基准字体大小

less数组的循环（构建不同的rem）
.data(@index) when (@index<=@len){
  @media (min-width:extract(@list,@index)) {
    html{
      font-size:extract(@list,@index)/@baseWidth*@baseFontSize; // 当前宽/基准宽*基准字体大小
    }
  }
  .data(@index+1);//less中没有循环 只能用递归加判断 模拟
}
.data(1);//调用
@num = 5;
.div{
  width:@num*1px; //通过*1px 加单位
}

四种布局 （混用效果很好 less+rem效果最好）
// display:flex;       //利用伸缩盒子
// 流式布局（%布局）   //PC端 只能做到盒子,img等的缩放  文字,非%图片都是固定大小
// 响应式布局          //基于媒体查询  PC端 M端
// less+rem布局        //PC端 通常整体布局 使用流式布局 图片%自动缩放 其他的涉及font-size等带px 采用rem布局
实现图片适配
P端  单独充满width: 100%   响应式 定高背景图适配只是左右被裁剪 height:400px; background-position:center;background-size:cover; 
M端  单独充满width: 100%   对于图片不是单独充满  基于父容器%  或 rem

zepto移动端 阉割版jQ （基本模块就5个） 每个模块都有对应的功能想要使用就要追加
// .fx         //animate()方法
// .fx_methods //以动画形式的 show, hide, toggle, 和 fade*()方法.
// .selector   //支持$('div:first')和 el.is(':visible')类的
// .touch      //在触摸设备上触发tap– 和 swipeLeft swipeRight 等相关事件

swiper移动端 专门做轮播图插件 可以基于JQ 和 zepto

.andSelf() //选中当前对象和上级对象 组成jQ对象
$('div').find('ul').find('li').andSelf().animate({
  margin-left:'100px' //ul和li一起做动画
},1000);
.end()  //退回倒上一级jQ对象    最上级对象.end()是document对象
$('div').find('ul').find('li').end().end().css({
  color:'blue' //div样式被修改
})

预解析：
// 不同的<script>标签中的函数互不影响(预解析会分段进行,按照script标签分段)。
// 如果遇到重复的函数声明，保留后面的函数。
// 如果遇到变量与函数重名的情况，保留函数
// var f1 = function(){
//     console.log(2);
// }
// function f1(){
//     console.log(1);
// }
// f1();   //2

a:focus,input:focus,button:focus{
  // 当光标聚集时触发
  // 点击 a标签 点击button 就算光标聚集 在点击空白处 光标消失
}

一行文字 由于窗口宽度不够 导致换行 要求紧贴着上一行显示 
// 该容器不设置高度 给父容器设置padding:50px 0; 

画布的大小
// canvas标签自带的width height 是画布的大小 css样式设置的是该元素的大小不是画布的大小 此时画布自适应
// <canvas width="600" height="400"></canvas>
var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d'); //获取绘制工具 2d绘制平面效果

ctx.beginPath(); //开启新路径
ctx.moveTo(100,100); //起点  ctx.translate(100,100); 重新映射起点位置 ctx.rotate(Math.PI/4); 不是canvas画布旋转 是绘制的图形 以左上角为中心顺时针旋转
ctx.lineTo(200,100); //绘制直线 绘制的是路径
ctx.strokeStyle = 'blue'; //设置描边颜色 是跨路径的 不受ctx.beginPath()影响 但是ctx.stroke受影响
ctx.stroke(); //描边 只能描边本次路径内的 颜色是最近的ctx.strokeStyle

ctx.fillStyle = 'rgb(255,0,0)'; //设置填充颜色 
ctx.fill(); //填充 自动闭合 只能填充本次路径内的
填充规则：非零环绕 从本区域拉出一条直线 顺时针逆时针正好抵消为0不填充 否则填充

ctx.lineWidth = 10; //设置线宽 默认线宽为1px 设置了线宽会导致缺角很明显 使用ctx.closePath()填充缺角
// 在使用线宽时 是以线的中线为基准
ctx.closePath(); //闭合本次路径 基于本次ctx.moveTo(); 

ctx.lineCap = 'butt'; //butt默认值不加长  square加长一个正方形  round加长一个半圆形
ctx.lineJoin = 'miter'; //miter默认值直角  bevel平角 round圆角
ctx.setLineDash([10,30,60]); //设置虚线 需要传入数组类型 实线10 空白30 实线60 空白10 实线30 空白60 （实现10。。。）循环了
ctx.getLineDash(); //获取虚线规律  （一段不重复的实线和虚线的设置）
ctx.lineDashOffset = -10; //虚线的偏移  负值向右偏移

绘制的线默认宽度1px 默认颜色黑色，但是实际绘制出的线2px颜色淡了?
// 线的绘制坐标 是线的中心位置对齐坐标 1px的线跨2px的位置
// 处理方案：移动0.5px 

ctx.canvas.width //画布大小 或 canvas.width

直接绘制矩形
ctx.rect(100,100,200,100); //起始位置（坐标）,宽度,高度  绘制的是矩形的路径 
ctx.strokeRect(100,100,100,100); //直接 描边 矩形 每次绘制都开启了新路径 不会影响上次
ctx.fillRect(100,100,100,100);   //直接 填充 矩形 每次绘制都开启了新路径 不会影响上次
ctx.clearRect(50,50,100,100);    //清除矩形区域内的内容

创建一个渐变的方案  
var lg = ctx.createLinearGradient(100,100,500,100); //渐变由100,100指向500,100
lg.addColorStop(0,'blue');  //渐变的方向  渐变的长度
lg.addColorStop(1,'yellow');//0 0%  1 100%
ctx.fillStyle = lg;     //代替颜色
ctx.fillRect(100,100,400,100); //绘制矩形



绘制弧度
ctx.arc(width/2,height/2,150,2*Math.PI*0,Math.PI/2,false); //圆心X坐标 圆心Y坐标 半径 起始弧度 结束弧度 绘制方向(顺false 逆true) 零弧度 X正方向

绘制文本
ctx.font = '24px Microsoft YaHei'; //设置字体
ctx.textAlign = 'left'; //水平对齐方式 left center right  相对于坐标!!!
ctx.textBaseline = 'middle'; //垂直对齐方式 middle top bottom  相对于坐标

ctx.strokeText('文本',100,100); //绘制文本 文本 坐标X 坐标Y   默认左下角对齐!!!
ctx.fillText('文本',100,100);   //填充文本 文本 坐标X 坐标Y

ctx.measureText(str).width  //测量文本宽


绘制图片
var img = new Image();
img.onload = function (){ //当图片加载完
  ctx.drawImage(img,200,200,100,100,100,100,100,100);
  // 图片对象 在图片上的定位坐标XY 截取的图片大小WH 画布上的坐标XY 画布上的大小WH 
};
img.src="./images/01,jpg"; //部分浏览器的图片加载 会在onload绑定之前 先有接收 在创建图片 稳妥
// 拓展 含有src属性的标签 都可以跨域访问 iframe src属性 内嵌窗口 也有onload事件

canvas 适配浏览器或者移动端 js判断设置 .width .height

shift + 右键 在当前文件夹打开cmd
Git 直接右键 在当前文件夹打开Git Bash Here
// 版本控制:可以非常方便的恢复到任意的备份（版本）状态
// 本地版本控制系统     难实现多人协同开发
// 集中式版本控制系统 代表为SVN 通过单一的集中管理的服务器 实现在不同终端上的协同开发工作 严重依赖网络
// 分布式版本控制系统 不需要中央服务器 不再受网络影响 代表就是Git
// Git 项目的三个工作区域的概念：Git 仓库、工作目录、暂存区域

意义在于记录开发者信息 （安装第一设置 就行了！！！）
// git config --global user.name 自已的名字
// git config --global user.email 自已的邮箱地址
// --global 配置当前用户所有仓库
// --system 配置当前计算机上所有用户的所有仓库

ctrl+c   //退出当前命令
本地仓库
git init //初始化仓库 自动创建了一个.git的隐藏目录
ls -al   //查看当前文件夹下的信息（包括隐藏文件）
git status //查看文件状态 (git忽略空的目录 红色表示修改过的 绿色表示暂存区)
git add -A   // . 或 *  都可以 添加所有修改文件到暂存区
  git add "./" //添加文件到暂存区
git status
git commit -m "备注信息"  //存到本地仓库
  git log //查看提交的历史 按键盘q键退出
git remote add origin 'git@github.com:154809748/2018_1_12.git' //远程地址起别名 origin 没有空格
git push -u origin master // 把本地仓库推送到远程仓库 并关联
git push origin master //推倒远程仓库 （分支默认是master） 项目不能建在桌面 不是空项目 必须先拉git pull  提示信息（shift+:一起按 输入q ）在提交 git push ！！！
 
远程仓库
git init --bare  //创建远程（共享）仓库  必须以.git结尾的目录

本地仓库
git pull origin xxx
git fetch origin admittance_20171211

git pull "./" //拉取分支  前提 git init   git pull origin 是拉取所有分支
git pull      //拉取所有分支 前提 git pull "./"
git clone "./" 自定义文件夹名 //克隆远程仓库里的内容
git pull origin master

git branch 新分支名 //创建新分支
git branch -a //查看本地和远程的所有分支
git branch -r //查看远程分支
git branch    //查看本地分支 （绿色表示当前所在的分支）
git checkout 分支名 //切换分支 
//切换完分支 修改信息完 git add -A git commit -m 'name' 必须放到分支的仓库中 在切换分支到master 才不显示分支的内容
git checkout -b 新的分支名 //创建新分支 并 切换到该分支
git checkout -b 新本地分支名 origin/远程分支名  // 创建新分支 并 切换到该分支 从远程仓库下载

git branch -d 分支名 //删除分支
git branch -D 分支名 //强行删除没有合并的分支
git merge 分支名称   //合并分支  要先切换到主分支master,在master中执行命令 
// 出现编辑器 按“esc” 写“：wq”
// git push --set-upstream origin test

ssh-keygen -t rsa 一路回车 //id_rsa密钥 id_rsa.pub公钥 复制公钥 到Key

git fetch //更新本地仓库 和远程（共享）仓库保持一致

git fetch origin master    // 从远程的origin的master主分支下载最新的版本到origin/master分支上
git log -p master..origin/master // 比较本地的master分支和origin/master分支的差别
git merge origin/master    // 最后进行合并
   
mui
.mui-clearfix  //自带的清除浮动
.mui-ellipsis-2 //两行超出部分显示省略号  不要设置padding-bottom 底层通过overflow:hidden实现
.mui-ellipsis   //一行省略超出部分显示省略号

javascript:;中的代码依然能执行
// <a href="javascript:history.back();">后退</a> 

// 模版引擎中不要含有这种注释 <!-- <% if(rows.length=0){ %> --> 会报错
模版引擎中 该加引号还是加
// <% for(var i = 0; i < data.length; i++){ 
//    if(!data[i].pic || data[i].pic.length==0){
//      data[i].pic =  [{picAddr:'/zhaoqi-m/images/none.jpg'}];
//    }
//  }
// %>

$('#form').serialize(); //序列化表单值 
// 序列化的表单控件必须有 name 属性
// 序列化的值可直接用于AJAX请求 url: 中
// 复选框（checkbox）和单选按钮（radio）的值只有在被选中时才会被序列化
// 提交按钮的值不会被序列化,文件选择元素的数据也不会被序列化
$('#form').serializeArray(); //序列化表单值 得到json格式

$('#form').on('submit',function(e){ //只有表单才有默认提交行为
  e.preventDefault(); //阻止表单的默认提交行为
});

innerHTML += // 先将之前的元素拿出 + 上以后的 一起添加     会干掉原有事件 ！！！

.ajaxComplete(function(e,x,s){}); //方法 一般document window 绑定 用于监听所有ajax请求结束
.ajaxSuccess(function(e,x,s){});  //Ajax请求成功完成时执行
.ajaxError(function(e,x,s){});    //Ajax请求出错时时执行
.ajaxSend(function(e,x,s){});     //Ajax请求发送之前执行
.ajaxStart(function(){});         //Ajax请求刚开始时执行
.ajaxStop(function(){});      //Ajax请求完成时执行
通过参数 s.url 具体监听那一类url 的 ajax结束
// $(document).ajaxComplete(function(e,x,s){
//    if(s.url=='./'){ 
//      console.log(1);
//    }else{
//      console.log(2);
//    }
//  });

label for id 规避 checkbox样式
// <label for="c">点击看看 </label>
// <input type="checkbox" id="c">


