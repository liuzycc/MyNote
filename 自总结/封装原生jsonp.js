var create = document.createElement('script');
create.src = 'http://jsonp.com/jsonp.php?callback=fnccc';
$('body').append($(create));
window['fnccc'] = function(data)
{
  console.log(data);
}