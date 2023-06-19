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
$userId = $contentDecode[ 'userId' ];
$password = $contentDecode[ 'password' ];

// Check user exists or not
$sql = "SELECT * FROM admin WHERE userId='$userId'";
$result = mysqli_query( $con, $sql );

$data = mysqli_fetch_assoc( $result );

if ($data !== NULL) {
    $hash = $data[ 'password' ];
    
    // $verify = password_verify(  );
    
    if ( $password == $hash ) {
        $response[ 'status' ] = true;
        $response[ 'message' ] = 'Admin login successfully!';
        $newData[ 'id' ] = $data[ 'id' ];
        $newData[ 'userId' ] = $data[ 'userId' ];
        $response[ 'data' ] = $newData;
        header( 'Content-type: application/json' );
        echo json_encode( $response );
    } else {
        $response[ 'status' ] = false;
        $response[ 'message' ] = "User doesn't exists!";
        header( 'Content-type: application/json' );
        echo json_encode( $response );
    }
} else {
    $response[ 'status' ] = false;
    $response[ 'message' ] = "User doesn't exists!";
    header( 'Content-type: application/json' );
    echo json_encode( $response );
}

?>