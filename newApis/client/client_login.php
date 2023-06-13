<?php

include '../connect.php';

header( 'Access-Control-Allow-Origin: *' );
header( 'Access-Control-Allow-Headers: access' );
header( 'Access-Control-Allow-Methods: POST' );
header( 'Content-Type: application/json; charset=UTF-8' );
header( 'Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With' );

// get data in raw
$jsonReqUrl  = 'php://input';
$content = file_get_contents( $jsonReqUrl );

if ( $_SERVER[ 'REQUEST_METHOD' ] != 'POST' ) {
    $response[ 'status' ] = false;
    $response[ 'message' ] = "User doesn't exists!";
    header( 'Content-type: application/json' );
    echo json_encode( $response );
}

$contentDecode = json_decode( $content, true );
$email = $contentDecode[ 'email' ];
$password = $contentDecode[ 'password' ];

// Check user exists or not
$sql = "SELECT * FROM users WHERE email='$email'";
$result = mysqli_query( $con, $sql );

$data = mysqli_fetch_assoc( $result );
$hash = $data[ 'password' ];

$verify = password_verify( $password, $hash );

if ( $verify ) {
    $response[ 'status' ] = true;
    $response[ 'message' ] = 'User login successfully!';
    $newData[ 'user_id' ] = $data[ 'user_id' ];
    $newData[ 'full_name' ] = $data[ 'full_name' ];
    $newData[ 'user_name' ] = $data[ 'user_name' ];
    $newData[ 'email' ] = $data[ 'email' ];
    $newData[ 'mobile' ]  = $data[ 'mobile' ];
    $newData[ 'created_at' ]  = $data[ 'created_at' ];
    $newData[ 'updated_at' ]  = $data[ 'updated_at' ];
    $response[ 'data' ] = $newData;
    header( 'Content-type: application/json' );
    echo json_encode( $response );
} else {
    $response[ 'status' ] = false;
    $response[ 'message' ] = "User doesn't exists!";
    header( 'Content-type: application/json' );
    echo json_encode( $response );
}

?>