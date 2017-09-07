<?php 
header('Content-Type:text/html;charset=utf-8');
  $filename=$_FILES['myfile']['name'];
  $tmpname=$_FILES['myfile']['tmp_name'];
  $targetname='./'.time().$filename;
  move_uploaded_file($tmpname,$targetname);
  echo '<img src="'.$targetname.'">'
?>