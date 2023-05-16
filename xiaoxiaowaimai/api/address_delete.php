<?php
require_once './db_connect.php';

$method = $_SERVER['REQUEST_METHOD'];

// 如果是 POST 请求
if ($method == 'POST') {
    $json = file_get_contents('php://input');

    // 将 JSON 数据转换为 PHP 数组
    $data = json_decode($json, true);


    $username=$data['username'];
    $id=$data['id'];
}else{
   $username=$_REQUEST['username'];
   $id=$_REQUEST['id'];
}



$con=Con::getInstance()->connect();

$sql="DELETE FROM address WHERE username='$username' AND id='$id'";
$stmt=$con->prepare($sql);
$stmt->execute();

if($stmt->rowCount()>0){
     $response=["code"=>1,"msg"=>"删除成功"];
}else{
     $response=["code"=>0,"msg"=>"删除失败",];
}

echo json_encode($response,JSON_UNESCAPED_UNICODE);