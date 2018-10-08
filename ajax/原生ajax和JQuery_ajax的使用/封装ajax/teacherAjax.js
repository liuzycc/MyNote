//按照老师的思路封装的ajax


// method   提交方式
// url      提交路径
// params   提交参数
// callback 回调函数

function ajax(method,url,params,callback){
  method = method.toUpperCase();
  var xhr = new XMLHttpRequest();
  if(method == "GET")
  {
    url += '?' + params;
    params = null;
  }
  xhr.open(method,url);
  if(method == 'POST')
  {
    xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
  }
  xhr.send(params);
  xhr.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200)
    {
      //执行回调函数
      callback(this.responseText);
    }
  }
}