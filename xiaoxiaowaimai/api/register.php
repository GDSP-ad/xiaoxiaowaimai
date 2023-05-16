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
}else{
    $username=$_REQUEST['username'];
    $password=$_REQUEST['password'];
}




$con=Con::getInstance()->connect();

$isUsernameExist="SELECT * FROM user WHERE username='$username' LIMIT 1";
$res=$con->query($isUsernameExist)->fetch(PDO::FETCH_OBJ);

if($res){
    $data=["code"=>0,"msg"=>"账号已存在"];
}else{
    $stmt=$con->prepare("INSERT INTO user(username,password) VALUES('$username','$password')");
    $stmt->execute();
    if($stmt->rowCount()>0){
        $data=["code"=>1,"msg"=>"注册成功"];
    }else{
        $data=["code"=>2,"msg"=>"注册失败"];
    }
}

echo json_encode($data,JSON_UNESCAPED_UNICODE);