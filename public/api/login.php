<?php

require_once('functions.php');
set_exception_handler('handleError');
require_once('config.php');
require_once('mysqlconnect.php');

$output = [
  'success'=> false
];

$json_input = file_get_contents("php://input"); //raw input source(body) for request.  It gets the raw string for the body

$input = json_decode($json_input, true); //true turns all objects into associative arrays

// if(empty($_POST['email'])) {
//   throw new Exception('email is a required value');
// }
//
// if(empty($_POST['password'])) {
//   throw new Exception('password is a required value');
// }
if(empty($input['email'])) {
  throw new Exception('email is a required value');
}

if(empty($input['password'])) {
  throw new Exception('password is a required value');
}


$email = $input['email'];
$password = $input['password'];

$email = addslashes($email); //escape out all quote characters in the string. Protects from SLQ injection

$hashedPassword = sha1($password);

unset($input['password']);

$query = "SELECT `id`, `name` FROM `users`
            WHERE `email` = ? AND `password` = ?
";

//1)send the safe query to the db
$statement = mysqli_prepare($conn, $query);
//2)send the dangerous data to the DB
mysqli_stmt_bind_param($statement, 'ss', $email, $hashedPassword);
//3)tell the DB to mix the query and the data
mysqli_stmt_execute($statement);
//4)get the result pointer for the prepared query statement's data
$result = mysqli_stmt_get_result($statement);
//now you can use the result var as normal
//not needed anymore because of prepared statement
// $result = mysqli_query($conn, $query); //mysqli object: the reference to the dataset for that query

if(!$result) {
  throw new Exception(mysqli_error($conn));
}

if(mysqli_num_rows($result) !== 1) {
  throw new Exception('invalid username or password');
}

//no error:

$data = mysqli_fetch_assoc($result);

$token = $email . $data['id'] . microtime(); //microtime gives you number of milliseconds since epoch
$token = sha1($token);

$connect_query = "INSERT INTO `user_connections` SET
  `token` = '$token',
  `users_id` = {$data['id']},
  `created` = NOW(),
  `ip_address` = '{$_SERVER['REMOTE_ADDR']}'

";


$connect_result = mysqli_query($conn, $connect_query);

if(!$connect_result) {
  throw new Exception(mysqli_error($conn));
}

if(mysqli_affected_rows($conn) !==1) {
  throw new Exception('could not log you in: connection not saved');
}

$_SESSION['user_data'] = [
  'id' => $data['id'],
  'username'=>$data['name'],
  'token'=>$token

];

$output['success'] = true;
$output['username'] = $data['name'];
$output['token'] = $token;

$json_output = json_encode($output);

print($json_output);


 ?>
