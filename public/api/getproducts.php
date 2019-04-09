<?php


require_once('mysqlconnect.php');
require_once('functions.php');

set_exception_handler('handleError'); //handles the accidental errors
require_once('config.php');


$query = "SELECT p.`id`, p.`name`, p.`price`,
    i.`url` AS `images`
  FROM `products` AS p
  JOIN `images` AS i
    ON p.`id` = i.`products_id`
  ORDER BY p.`id`
";


$result = mysqli_query($conn, $query);

if(!$result) {
  throw new Exception('invalid query: '. mysqli_error($conn));
}

$data = [];

while($row = mysqli_fetch_assoc($result)) {
  $currentID = $row['id'];

  //if currentID already exists in data associative array:
  //set the image to $image
  //add it to the images array
  if( isset( $data[$currentID] ) ) {
    $image = $row['images'];
    $data[$currentID]['images'][] = $image;

  } else {
    $image = $row['images'];
    unset($row['images']);
    $row['images'] = [];
    $row['images'][] = $image;
    $row['price'] = intval($row['price']);
    //set the row as the value to the new currentID key in $data
    $data[$currentID] = $row;
  }
}

$pureData = [];
foreach($data as $value){
  $pureData[] = $value;
}

$output = [
  'success'=>true,
  'products'=> $pureData
];

$json_output = json_encode($output);

print($json_output);



?>
