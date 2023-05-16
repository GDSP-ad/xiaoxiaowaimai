<?php
require_once './db_connect.php';



$method = $_SERVER['REQUEST_METHOD'];

// 如果是 POST 请求
if ($method == 'POST') {
    $json = file_get_contents('php://input');

    // 将 JSON 数据转换为 PHP 数组
    $data = json_decode($json, true);

    $username=$data['username'];
    $password=$data['password'];
    $nickname=$data['nickname'];
    $sign=$data['sign'];
}else{
    $username=$_REQUEST['username'];
    $password=$_REQUEST['password'];
    $nickname=$_REQUEST['nickname'];
    $sign=$_REQUEST['sign'];
}



$con=Con::getInstance()->connect();


$sql="UPDATE user SET password='$password',nickname='$nickname',sign='$sign' WHERE username='$username' ";
$stmt=$con->prepare($sql);
$stmt->execute();


if($stmt->rowCount()>0){
     $response=["code"=>1,"msg"=>"修改成功"];
}else{
     $response=["code"=>0,"msg"=>"修改失败",];
}

echo json_encode($response,JSON_UNESCAPED_UNICODE);