<?php
require_once('functions.php');
set_exception_handler('handleError');
require_once('config.php');
require_once('mysqlconnect.php');

$output = [
  'success'=> false
];

if(empty($_SESSION['user_data']['token'])) {
  $output['success'] = true;
  $output['message'] = "You weren't logged in";
  print(json_encode($output));
  exit();
}

$user = $_SESSION['user_data']['username'];
$token = $_SESSION['user_data']['token'];


$query = "DELETE FROM `user_connections` WHERE
            `token` = '$token'

";

$result = mysqli_query($conn, $query); //The mysqli_query() function performs a query against the database.

if(!$result) {
  throw new Exception(mysqli_error($conn));
}

if(mysqli_affected_rows($conn) !== 1) {
  throw new Exception('unable to remove user from current login');
}

unset($_SESSION['user_data']);

$output['success'] = true;

$json_output = json_encode($output);

print($json_output);





 ?>
