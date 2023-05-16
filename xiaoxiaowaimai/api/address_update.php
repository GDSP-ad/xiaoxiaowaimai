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
$name=$data['name'];
$tel=$data['tel'];
$isDefault=$data['isDefault'];
$province=$data['province'];
$city=$data['city'];
$county=$data['county'];
$addressDetail=$data['addressDetail'];
$areaCode=$data['areaCode'];
}else{
   $username=$_REQUEST['username'];

$id=$_REQUEST['id'];
$name=$_REQUEST['name'];
$tel=$_REQUEST['tel'];
$isDefault=$_REQUEST['isDefault'];
$province=$_REQUEST['province'];
$city=$_REQUEST['city'];
$county=$_REQUEST['county'];
$addressDetail=$_REQUEST['addressDetail'];
$areaCode=$_REQUEST['areaCode'];
}



$con=Con::getInstance()->connect();

if($isDefault){
    $con->query('UPDATE address SET isDefault=0 WHERE isDefault=1');
}


$sql="UPDATE address SET name='$name',tel='$tel',isDefault='$isDefault',province='$province',city='$city',county='$county',addressDetail='$addressDetail',areaCode='$areaCode'  WHERE username='$username' AND id='$id'";

$stmt=$con->prepare($sql);
$stmt->execute();


if($stmt->rowCount()>0){
     $response=["code"=>1,"msg"=>"修改成功"];
}else{
     $response=["code"=>0,"msg"=>"修改失败",];
}

echo json_encode($response,JSON_UNESCAPED_UNICODE);