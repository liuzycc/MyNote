<?php

// 接收文件
$file_info = $_FILES[ "file" ];
// 需要使用的 tmp_name, name
// 获得文件名
$md5name = md5_file( $file_info[ "tmp_name" ] );
// 获得后缀
$tmp = $file_info[ "name" ];
$tmp_array = explode( ".", $tmp );
$ext = array_pop( $tmp_array );

$path = "./uploads/" . $md5name . "." . $ext;


move_uploaded_file( $file_info[ "tmp_name" ], $path );


echo "ok";

?>