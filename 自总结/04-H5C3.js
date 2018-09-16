

//渐变
//径向渐变
radial-gradient(250px at top right, red, orange, skyblue) 
//线性渐变
linear-gradient(to left, #fa9b4e, #fa5a55)


//2d和3d变换

2d
缩放
scale()： 指定对象的2D scale（2D缩放）。
//第一个参数对应X轴，第二个参数对应Y轴。如果第二个参数未提供，则默认取第一个参数的值 

平移
translate()： 
//第一个参数对应X轴平移距离，第二个参数对应Y轴平移距离。如果第二个参数未提供，则默认值为0

旋转
rotate()：
//传入旋转角度

变形
skew()： 
//传入拉伸的角度

中心点
指定以XX位轴 旋转或拉伸
transform-origin： 指定点心点位置
//语法： transform-origin: x-axis y-axis z-axis;
//值可以设为left right bottom top, 或者百分比，或者像素值


3d变换:  //transform-style：preserve-3d  开启3D效果
//需要将 transform-style：preserve-3d 才能实现3d效果，默认值为flat，只能实现平面的动画效果

平移
//translate
- 沿y轴方向平移 
- 沿x轴方向平移
- 沿z轴方向平移

旋转
//rotate
- 沿x轴旋转
- 沿y轴旋转
- 沿z轴旋转

视距
//perspective:500px;
- 属性为： perspective
- 可以简单把电脑屏幕理解成一块透明玻璃; persipective理解成眼睛和电脑物体中的距离
- 值越小，3d效果越明显
- 设置给父元素： 相当于眼睛是父元素的正前方 perspective: 100px 
- 设置给子元素： 相当于眼睛在子元素的正前方 transform: perspective(100px)


过度：//transition:all 2s;
transition   
//参数一：指定要发生动画的属性
//参数二：动画执行时间
//参数三：执行方式 
ease   默认值
linear   匀速
ease-in   加速
ease-out   减速
ease-in-out   先加速再减速
steps(n)   动画分n步执行
//参数四：动画延迟执行时间


transition动画使用注意事项
1. 写在选择器中，和写在hover中的区别在于，如果写在hover时面， 那么返回时没有动画,
   写在选择器中返回也会有动画
2. 格式 
   1. 如果对多个属性添加过渡动画
   //transition: width 1s steps(5) 2s, height 2s ease-in 1s;
   2. 如果多个属性的过渡动参数值一样，或者只对一个属性添加动画
   //transition: all 1s steps(5) 2s
3. 手动触发transition动画的方法： 
   //把动画代码封装到一个类里，手动添加删除类。 删除类，则动画还原，添加类，则动画执行


animation  动画：

定义：

@keyframes boxAnimation {
  50% {
      transform: translateY(300px);
  }
}

使用：
.box {
  animation: boxAnimation 1s infinite;
}

animateion参数
//参数1  定义动画的名称
//参数2  动画执行时间  1s（n秒）
//参数3  动画执行时间  ease（默认）/ 其余值参考下表
ease 默认值
linear 匀速
ease-in 加速
ease-out 减速
ease-in-out 先加速再减速
steps(n) 动画分n步执行
//参数4  动画延迟执行时间         1s（n秒）
//参数5  是否保留动画结束状态    forwards/none
//参数6  动画执行次数           整数/infinite(无限次)

## animation动画的属性介绍
| 属性 | 值 | 作用 |
| :-- | :-- | :-- |
| animation-property | 想要对哪个属性添加动画，就写那个属性的名字 | 指定要发生动画的属性 |
| animation-duration | 1s（n秒） | 动画执行时间 |
| animation-timing-function | ease（默认）/ 其余值参考下表 | 动画执行时间 |
| animation-delay | 1s（n秒） | 动画延迟执行时间 |
| animation-fill-mode | forwards/none | 是否保留动画结束状态 |
| animation-iteration-count | 整数/infinite(无限次) | 动画执行次数 |


fullpage.js 基于jquery的分屏插件的使用
基本使用：
// html
<div class="full">
  <!-- 默认进来是第几页 就加上 active -->
  <div class="section section1 active"></div>
  <div class="section section2"></div>
  <div class="section section3"></div>
  <div class="section section4"></div>
  <div class="section section5"></div>
  <div class="section section6"></div>
  <div class="section section7"></div>
  <div class="section section8"></div>
</div>
// js
$(function(){
  $('.full').fullpage({
    navigation: true,
    sectionsColor:["#f9dd67", "#84a2d4", "#ef674d", "#ffeedd", "#cf4759", "#85d9ed", "#8ac060", "#f3d2c4"],
    //进入到某一屏时，调用： a用不上， index代表当前是第几屏， index是从1开始的
    afterLoad:function(a,index){
      console.log('我是第' + index + '页');
    }
  })
})



//属性
pointer-events: none;///* 不响应鼠标事件， 事件就会往下传递 */

四种布局 （混用效果很好 less+rem效果最好）
// display:flex;(弹性布局)       //利用伸缩盒子
// 流式布局（%布局）   //PC端 只能做到盒子,img等的缩放  文字,非%图片都是固定大小
// 响应式布局          //基于媒体查询  PC端 M端
// less+rem布局        //PC端 通常整体布局 使用流式布局 图片%自动缩放 其他的涉及font-size等带px 采用rem布局
##  弹性布局：
// 1. 如果想要实现弹性布局，必须给父盒子添加一个 display: flex;
// 2. display: flex;
//     1. 横向排列
//     2. 子元素变得有弹性（父盒子显示不下时， 自适应父盒子的宽度）
// 3. 子元素分配父元素的空间
//     1. flex-basis: 分得一个固定的大小
//     2. flex： 1；分得多少份
// 4. 如果不希望子元素的大小发生变化，一行显示不下就换行
//     1. flex-wrap: wrap;
// 5. 元素在水平方向的排列方法： 
//     1. justify-content: center; //sapce-around(平均分布)， space-between(左右贴边，平均分布)， flex-start(左贴边)， flex-end(右贴边)
// 6. 垂直排列  主轴和侧轴取反
//     flex-direction: column; 
//7. align-content, align-items, align-self: 对侧轴生效， 侧轴方向的对齐方式


多背景时，先添加的层级最高
多背景
background:url() no-repeat left top,
		   url(./img/bg2.png) no-repeat right top,
		   url(./img/bg4.png) no-repeat 30px 30px/300px 200px,(背景图 不平铺 位置 背景大小)
	  #fff url(./img/bg5.png) no-repeat center center;
(前者url覆盖后者url 背景颜色需要在最后一个url前面写或者在来个,#fff或者单独写)

背景尺寸
background-size:200px 300px; (背景宽高 给一个值为宽 背景等比例缩放)
                cover   按比例缩放 占满父元素
                contain 按比例缩放 背景完全放入
      
#文本加横线  删除横线      text-decoration: line-through;


问题：如何解决适配问题？
答：借鉴传统web页面解决的办法：设置版心
    由于移动页面的屏幕本来就小，再设置版心会使用本来就小的屏幕利用率更小了，不通过。
问题：移动端上有什么更好的方法来解决问题呢？
答：可以使用流式布局来解决问题。

流式布局：百分比布局（非固定像素布局）即在页面布局时，将容器的宽度设置为100%。
- 通过盒子的宽度设置成百分比来根据屏幕的宽度来进行伸缩，不受固定像素的限制，内容向两侧填充
- 这样的布局方式,是移动web开发使用的最常用布局方式

//二倍图
在移动端，最好让UI最大一点的图，我们再使用这些图的时候最好使用这图的二分之一比例的图

//一般初始化css  手机端有用
//设置视口
-<meta name="viewport" content="width=device-width, initial-scale=1.0">
//meta
- <meta name='viewport' content='相关设置' />
  - 设置页面的字符集
  - 设置页面的关键字
  - 设置页面的描述信息
- width 设置视口的宽度：
  - 取值
    - device-width 设备宽度(常用)
    - 固定数值：1000px. 600px（不用）
- height
  - 一般不设置
- initial-scale 初始化缩放比
  - 1.0  一般设置为1.0
- user-scalable 是否允许用户缩放
  - no/yes  0/1
  - 通过会将用户是否允许缩放设置为no 
- maximum-scale 最大缩放比
  - 0~10 （不用）
- minimum-scale 最小缩放比
  - 0~10 （不用）

//页面初始化web移动端
*,
*::after,
*::before {
    /* transparent:透明 */  /** 取消移动端a标签点击高亮样式  */
     -webkit-tap-highlight-color: transparent;
    /* 去掉默认立体效果 */
    -webkit-appearance: none;
}

transitionend:

- 当css3的过渡动画执行结束以后会触发这个事件。
- 当这个元素的过度效果结束后自动触发的事件
- 用法：
doc.addEventListener('transitionend', function(){
    // 代码段
  })


touch事件：

- 有三个
  - touchstart
    - 当屏幕上的这个元素上有触摸点的时候到被触发
  - touchmove
    - 当屏幕上触摸的点开始移动时，会被触发
  - touchend
    - 当屏幕上的触摸点离开时触发这个事件
  - touchcancle
    - 当触摸点被强行分离时触发这个事件
- 每个touch事件中都有一个事件参数：
  - TouchEvent
  - touches
    - 当前屏幕上所有的触摸点的集合
  - targetTouches
    - 得到当前屏上并且在当前元素上的点的集合
  - changedTouches
    - 得到当前屏幕上变化的点


  总结：都可以得到触摸点，用的最多的是targetTouches

  为什么这些参数都是复数
     因为它是一个集合，因为它们记录的是所有触摸点的集合


  每个参数对象都有自己的属性：

- 距离视口的距离
  - clientX
  - clientY
- 距离文档的距离
  - pageX
  - pageY
- 距离屏幕的距离
  - screenX
  - screenY

    任务：判断左滑还是右滑

#背景的相关属性：
- background-origin 背景绘制位置
  - 作用：设置当前绘制背景的开始位置
  - 取值：
    - border-box: 背景从边框开始绘制
    - padding-box: 背景从padding开始绘制
    - content-box: 背景从内容开始绘制
- background-clip: 背景裁剪
  - 作用：设置背景的裁剪区域
  - 取值：
    - border-box: 裁剪边框以外的背景
    - padding-box: 裁剪padding以外的背景
    - content-box:裁剪内容以外的背景

overflow: hidden
- 修饰的元素会成为一个绝缘容器
- 如果它的左右侧有浮动的元素，只要不给绝缘容器设置宽度，那么将来浏览器会自动将浮动元素之外的所有区域的宽度设置给绝缘容器
- BFC



滚动下拉插件(简单下拉操作，其他操作看文档  iscroll)：
插件：
- iscroll.js
- 步骤：
      html结构：
          <div id="wrapper">
          <ul>
            <li>...</li>
            <li>...</li>
            ...
          </ul>
          </div>
  注意点：
  - 1）div的高度一定要是固定的
  - 2）ul的高度一定要大于div的高度，否则没有滚动效果。

  js代码：
  var myScroll = new IScroll('#wrapper');


  CDN:相当于第三方资源服务器(个人理解) 就是托管静态资源服务


四种布局 （混用效果很好 less+rem效果最好）
// display:flex;       //利用伸缩盒子
// 流式布局（%布局）   //PC端 只能做到盒子,img等的缩放  文字,非%图片都是固定大小
// 响应式布局          //基于媒体查询  PC端 M端
// less+rem布局        //PC端 通常整体布局 使用流式布局 图片%自动缩放 其他的涉及font-size等带px 采用rem布局

流式布局：
百分比布局（非固定像素布局）即在页面布局时，将容器的宽度设置为100%。

视口（viewport）:

- <meta name='viewport' content='相关设置' />
  - 设置页面的字符集
  - 设置页面的关键字
  - 设置页面的描述信息
- width 设置视口的宽度：
  - 取值
    - device-width 设备宽度(常用)
    - 固定数值：1000px. 600px（不用）
- height
  - 一般不设置
- initial-scale 初始化缩放比
  - 1.0  一般设置为1.0
- user-scalable 是否允许用户缩放
  - no/yes  0/1
  - 通过会将用户是否允许缩放设置为no 
- maximum-scale 最大缩放比
  - 0~10 （不用）
- minimum-scale 最小缩放比
  - 0~10 （不用）

常用视口配置：
<meta name="viewport" content="width=device-width,initial-scale=1.0,user-scalable=no" />

二倍图:
- 在标准的viewport设置中，使用二倍图来提高图片质量，解决在高清设备模糊问题
- 二倍图的本质还是一张图片，只是在原来的基上扩大二倍，使用时再缩小两倍

如： 我在页面上需要一张宽为100\*100的图片，但是在设计图片时，将图片设计为200\*200，使用图片时再通过background-size属性来设置其图片宽高为100*100
  .box{
      /*原始图片200*200px*/
      background-size: 100px 100px;
  }


Bootstrap:
使用CDN

- <link rel="stylesheet" href="//cdn.bootcss.com/bootstrap/3.3.5/css/bootstrap.min.css">
- <script src="//cdn.bootcss.com/jquery/1.11.3/jquery.min.js"></script>
- <script src="//cdn.bootcss.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>


<sub></sub>  下标  <sup></sup> 上标

##less##

面试题：link 与 @import 的区别：

- 1.从属关系区别
  @import是 CSS 提供的语法规则，只有导入样式表的作用；link是HTML提供的标签，不仅可以加载 CSS 文件，还可以定义 RSS、rel 连接属性等。
- 2.加载顺序区别
  加载页面时，link标签引入的 CSS 被同时加载；@import引入的 CSS 将在页面加载完毕后被加载。
- 3.兼容性区别
  @import是 CSS2.1 才有的语法，故只可在 IE5+ 才能识别；link标签作为 HTML 元素，不存在兼容性问题。
- 4.DOM可控性区别
  可以通过 JS 操作 DOM ，插入link标签来改变样式；由于 DOM 方法是基于文档的，无法使用@import的方式插入样式。

  ###  less的vs插件
  如果将来想要看less语法写完后的效果，要将less文件通过CMD编译为css文件，但是每次都编译太麻烦，可以直接在vscode下载一个插件：Easy less 
  ### less基本语法

+ 注释：
  + less 支持两种注释：
    - 第一种：/* */
    - 第二种：//
  + 注意：
    - 第一种方式添加的注释会自动生成到.css文件中
    - 第二种方式添加的注释不会生成到.css 文件中

- 变量

  + 方式：
    ```
      @变量名: 值;
    ```
  + 应用途径：
    - 应用在样式中
      ```
        @color: red;
        a {
          background: @color
        }
      ```
    - 应用在类名中
      ```
        @companyClass: wjs;
        .@{companyClass}_nav {
          width: 100%;
        }
        注意：放在类名中需要将类名进行拼接，使用｛｝可以进行拼接
      ```
- 混入(mixin)
  - 样式混入：
    - 说明：如果一个元素有多个样式，我们之前为了能够让元素复用性更强，会将每个样式单独定义一次，将来在元素中直接使用引入多个类名，但是这样写太麻烦，less中为我们提供了样式的混入操作：

      ```
      .b-right {
      	border-right: 1px solid #ccc;
      }
      .mt50 {
      	margin-top: 50px;
      }
      // 样式混入
      .myMixin {
        .b-right();
        .mt50();
      }
      ```

  - 函数混入

    - 说明：上面的写法中同的样式会生成两次，对css来说，单一的属性其实将来生成以后是可以省略的，为了让生成的css样式更加简洁，我们可以使用函数：  

      ```
        .b-right() {
          border-right: 1px solid #ccc;
        }
        .mt50() {
          margin-top: 50px;
        }
        // 样式混入
        .myMixin {
          .b-right();
          .mt50();
        }
      ```
  - 函数的传参：
    + 说明：函数中的less中函数的传参与js中的传参一样
      ```
        .float(@dir) {
          float: left;
        }
        // 直接使用会报错
        .myFloat {
          .float(); // 报错
        }
        // 传入参数不会报错
        .myFloat {
          .float(1); // 正常
        }
      ```
    + 参数设置默认值：
      ```
        .float(@dir:left) {
          float: @dir;
        }
        // 直接使用会报错
        .myFloat {
          .float(); // 不报错，生成float: float: left;
        }
        // 传入参数不会报错
        .myFloat {
          .float(right); // 正常，生成float: right
        }
      ```
    + 小练习：将以下内容封装为一段函数
      ```
        .bb {
          border-bottom: 1px solid #ccc;
        }
        .bt {
          border-top: 1px solid #ccc;
        }
        .bl {
          border-left: 1px solid #ccc
        }
      ```


-    嵌套
     - 说明：为了提高代码的可读性，less中允许我们把在样式中嵌套其它样式

            div {
              width: 100%;
              background-color: red;
            }
            div ul {
              width: 100%;
              background-color: green;
            }
            div ul li {
              float: left;
              height: 30px;
              line-height: 30px;
              text-align: center;
            }
            div ul li.active {
              background-color: skyblue;
            }
          嵌套写法：
            div {
              width: 100%;
              background-color: red;
              ul {
                width: 100%;
                background-color: green;
                li {
                  float: left;
                  height: 30px;
                  line-height: 30px;
                  text-align: center;
                  &.active {
                    background-color: skyblue;
                  }
                }
              }
            }
-    导入
     - 说明：为了让css代码文件结构更加清晰，less中允许我们把一个页面的样式拆分为多个文件，从而达到模块化。将来使用时设置一个统一入口就行了。

           @import '文件名'

           ** 导入完成以后，被导入文件中的 变量/函数 可以在导入的文件中使用

     - 面试题：link 与 @import 的区别：
       + 1.从属关系区别
         @import是 CSS 提供的语法规则，只有导入样式表的作用；link是HTML提供的标签，不仅可以加载 CSS 文件，还可以定义 RSS、rel 连接属性等。

       + 2.加载顺序区别
         加载页面时，link标签引入的 CSS 被同时加载；@import引入的 CSS 将在页面加载完毕后被加载。

       + 3.兼容性区别
         @import是 CSS2.1 才有的语法，故只可在 IE5+ 才能识别；link标签作为 HTML 元素，不存在兼容性问题。

       + 4.DOM可控性区别
         可以通过 JS 操作 DOM ，插入link标签来改变样式；由于 DOM 方法是基于文档的，无法使用@import的方式插入样式。

-    运算
     - 说明：less中为我们提供了css之间的数据的运算

     ```
      // 如：
       a {
         color: red - blue;
       }
       // 或者
       @len:10;
       .jd_banner {
         width: 100%;
       }
       .jd_banner ul {
         width: 100%*@len;
         transform: translateX(-100%/@len);
       }
     ```
+ 内置函数 
  + 说明：less中默认为我们准备了大量的函数，可以方便我们将来书写代码  
    + 如：    
      + image-size   
      + image-width  
      + image-height

api地址：http://lesscss.cn/functions/#functions-overview

中文：	http://www.css88.com/doc/less/functions/#color-operations


拖动案例一些事件和方法 （04-H5C3）

// 在拖动目标上触发事件 (源元素):
// ondragstart - 用户开始拖动元素时触发
// ondrag - 元素正在拖动时触发
// ondragend - 用户完成元素拖动后触发

// 释放目标时触发的事件:
// ondragenter - 当被鼠标拖动的对象进入其容器范围内时触发此事件
// ondragover - 当某被拖动的对象在另一对象容器范围内拖动时触发此事件
// ondragleave - 当被鼠标拖动的对象离开其容器范围内时触发此事件

// ondrop - 在一个拖动过程中，释放鼠标键时触发此事件
// 注意： 在拖动元素时，每隔 350 毫秒会触发 ondragover 事件。

//传数据(ondragstart)：//设置值
ev.dataTransfer.setData("data", ev.target.id);
//获取数据(drop) //接收值
 var data = ev.dataTransfer.getData("data");

 
 文件读取

//  document.querySelector("input").onchange = function() {
//   //1. 获取文件
//   //本质是一个File对象， 不能直接使用的，需要把它读出来才能使用
//   var file = this.files[0];
//   console.log(file);

//   //2. FileReader（一个可以读取文件的类）
//   var reader = new FileReader();

//   //3. 开始读文件
//   reader.readAsDataURL(file);

//   //4. 使用文件读取的结果
//   reader.onload = function() {
//       console.log(reader.result);

//       //reader.result: 读取出来的结果
//       document.querySelector("img").src = reader.result;
//   }
// }













 
