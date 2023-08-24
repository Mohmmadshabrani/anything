<?php
require("../connectionMySqli.php");

if($_SERVER["REQUEST_METHOD"]=="POST"){
    $response=array();
    $sql="SELECT * FROM `event`";
    $result = $conn->query($sql);

    foreach ($result as $row) {
        $response[]=$row;
    }

    echo json_encode($response);
}

?>