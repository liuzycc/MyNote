//封装一个发送请求的ajax
function ajax(method,url,params,callback){
  method = method.toUpperCase();
  var xhr = new XMLHttpRequest();
  if(method == "POST")
  {
    xhr.open(method,url);
    xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
    xhr.send(params);
  }
  else {
    xhr.open(method,url + '?' + params);
    xhr.send();
  }
  xhr.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200)
    {
      //执行回调函数
      callback(this.responseText);
    }
  }
}