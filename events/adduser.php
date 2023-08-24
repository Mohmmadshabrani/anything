<?php
require("../connectionMySqli.php");

if($_SERVER["REQUEST_METHOD"]=="POST"){
    $data=json_decode(file_get_contents("php://input"),true);
    $id=$data['id'];
    $name=$data['name'];
    $response=array();
    $sql="INSERT INTO `event-participants`(`eventId`, `username`) VALUES ('$id','$name')";

    if($result = $conn->query($sql)){
        $response['message']="Inserted";
        echo json_encode($response);
    }
}

?>