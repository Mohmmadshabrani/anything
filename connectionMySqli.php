<?php

$server="localhost";
$username="root";
$password="";
$dbname="summerjam";

$conn=new mysqli($server, $username, $password, $dbname);
if($conn->connect_error){
    die("Connection Faild: ".$conn->connect_error);
}

?>