a:link {color:#999} //未访问的链接
a:visited {color:#999} //已访问的链接
a:hover {color:#999} //当鼠标悬停在连接上
a:active {color:#999} //被选择的链接

CSS三大特性 ：  继承性，层叠性，优先级


//css中让文字在垂直和水平方向上重叠的两个属性
垂直：line-height
水平: letter-spacing  //设置文字之间的距离  //还可以设置inline-block元素间的换行符空格间隙问题

//垂直居中一个img
img {
  display:table-cell;
  text-align:center;
  vertical-align:middle;
}

//居中一个浮动的元素  
div {
  //确定容器高度
  width:500px;
  height:300px;
  margin-left:-250px;
  margin-top:-150px;
  postition:relative;
  left:50%;
  top:50%;
}

取消input默认提示框
autocomplete="off"  //这是H5的一个属性。
//可以加载input  取消默认提示框   也可以添加到 form 表单中  取消form下面所有input 的 默认提示框
<form autocomplete="off"></form>