function timeKill(){
  //获取当前时间的差值
  var time = 10 * 60 * 60 + 10 * 60 + 1;
  var timer = setInterval(function(){
    time --;
    ttime();
    if(time <= 0)
    {
      clearInterval(timer);
    }
  },1000);
  ttime();
  function ttime(){
    var h = Math.floor(time/3600);
    var m = Math.floor(time % 3600 / 60);
    var s = Math.floor(time % 60);
    // console.log(h+','+m+','+s);
    var h1 = Math.floor(h / 10);
    var h2 = h % 10;
    var m1 = Math.floor(m / 10);
    var m2 = m % 10;
    var s1 = Math.floor(s / 10);
    var s2 = s % 10;
    console.log(h1+''+h2+':'+m1+''+m2+':'+s1+''+s2);
    var spanlist = document.querySelectorAll('.time span');
    spanlist[0].innerText = h1;
    spanlist[1].innerText = h2;
    spanlist[3].innerText = m1;
    spanlist[4].innerText = m2;
    spanlist[6].innerText = s1;
    spanlist[7].innerText = s2;
  }
 
}