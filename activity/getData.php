
<?php

include_once '../connection.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

  $stmt = $conn->prepare('select * from activity');

  $stmt->execute();
  $res = $stmt->fetchAll(PDO::FETCH_ASSOC);

  echo json_encode($res);
}
