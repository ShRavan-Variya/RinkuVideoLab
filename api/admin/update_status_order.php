<?php

include '../connect.php';

header( 'Access-Control-Allow-Origin: *' );
header( 'Access-Control-Allow-Headers: access' );
header( 'Access-Control-Allow-Methods: POST' );
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


// get data in raw
$jsonReqUrl = 'php://input';
$content = file_get_contents($jsonReqUrl);
$contentDecode = json_decode($content, true);

// set in variable
$order_id = $contentDecode['id'];
$status = $contentDecode['status'];

// Retrieve the image name and existing data from the database based on the provided ID
$sql = "UPDATE userorder SET status = '$status' WHERE order_id = '$order_id'";
if (mysqli_query($con, $sql)) {
    $response['status'] = true;
    $response['id'] = $order_id;
    $response['message'] = 'Data uploaded successfully!';
    header('Content-type: application/json');
    echo json_encode($response);
    mysqli_close($con);
} else {
    errorRes($con);
}
?>