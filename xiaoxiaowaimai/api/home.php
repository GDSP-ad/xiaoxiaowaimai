<?php
require_once './db_connect.php';


$con=Con::getInstance()->connect();

$sql="SELECT * FROM store";
$res=$con->query($sql)->fetchAll(PDO::FETCH_ASSOC);


if($res){
    $response=["code"=>1,"msg"=>"查询成功","data"=>$res];
}else{
    $response=["code"=>0,"msg"=>"查询失败"];
}


echo json_encode($response,JSON_UNESCAPED_UNICODE);