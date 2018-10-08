<?php
include_once "../fn.php";
$ajax = "";
if(!empty($_GET["username"]))
{
  $ajax = $_GET["username"];
}

$data = query("select * from users where username like '$ajax%'");

header("Content-Type:application/json;charset=utf-8");

echo json_encode($data);


?>