<?php
require_once './db_connect.php';
$method = $_SERVER['REQUEST_METHOD'];

// 如果是 POST 请求
if ($method == 'POST') {
    $json = file_get_contents('php://input');

    // 将 JSON 数据转换为 PHP 数组
    $data = json_decode($json, true);


    $username=$data['username'];
}else{
   $username=$_REQUEST['username'];
}



$con=Con::getInstance()->connect();


$sql="SELECT username,nickname,sign FROM user WHERE username='$username'";
$res=$con->query($sql)->fetch(PDO::FETCH_OBJ);

if($res){
    $response=["code"=>1,"msg"=>"查询成功","data"=>$res];
}else{
    $response=["code"=>0,"msg"=>"查询失败"];
}

echo json_encode($response,JSON_UNESCAPED_UNICODE);