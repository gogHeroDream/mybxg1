<?php

   $dir='main';//默认目录名称
   $filename='index';//默认文件
  //路径
  //$path=$_SERVER['PATH_INFO'];
  //判断数组中是否包含指定的属性
  if(array_key_exists('PATH_INFO',$_SERVER)){
  //获取url中的路径
     $path=$_SERVER['PATH_INFO'];

     //去掉路径中的第一个斜杠
     $str=substr($path,1);
     //分割路径和文件名称
     $arr=explode('/',$str);
     if(count($arr) == 2){
       $dir=$arr[0];    //覆盖目录名称
       $filename=$arr[1]; //覆盖文件名称
  }else{
     //如果不是两层路径就跳转到登录页面
     $filename='login';
   }
  }


  include('./views/'.$dir.'/'.$filename.'.html');

?>