<?php

include '../connect.php';

header( 'Access-Control-Allow-Origin: *' );
header( 'Access-Control-Allow-Headers: access' );
header( 'Access-Control-Allow-Methods: GET' );
header( 'Content-Type: application/json; charset=UTF-8' );
header( 'Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With' );

if ( $_SERVER[ 'REQUEST_METHOD' ] != 'POST' ) {
    $response[ 'status' ] = false;
    $response[ 'message' ] = 'No Data Found!';
    header( 'Content-type: application/json' );
    echo json_encode( $response );
}

function errorRes( $con ) {
    $response[ 'status' ] = false;
    $response[ 'message' ] = 'Data not uploaded try after some time!';
    header( 'Content-type: application/json' );
    echo json_encode( $response );
    mysqli_close( $con );
}

$id = $_POST['id'];

// Retrieve the image name and existing data from the database based on the provided ID
$sql = "SELECT * FROM dashimages WHERE id='$id'";
$result = mysqli_query($con, $sql);

$row = mysqli_fetch_assoc($result);
$imageName = $row['imageName'];
$targetFile = '../Reels/DashData/'.$imageName.'.jpg';
$file = $_FILES['image'];

if (isset($file) && $file['error'] === UPLOAD_ERR_OK) {
  if (move_uploaded_file($file['tmp_name'], $targetFile)) {
    $updated_at = date('Y-m-d H:i:s') . '.000000';
    $sql = "UPDATE dashimages SET updated_at = '$updated_at' WHERE id = '$id'";

    if (mysqli_query($con, $sql)) {
      $response['status'] = true;
      $response['id'] = $id;
      $response['message'] = 'Data uploaded successfully!';
      header('Content-type: application/json');
      echo json_encode($response);
      mysqli_close($con);
    } else {
      errorRes($con);
    }
  } else {
    errorRes($con);
  }
} else {
  errorRes($con);
}
?>