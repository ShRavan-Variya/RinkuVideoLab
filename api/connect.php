<?php
session_start();

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET,PUT,POST,DELETE,PATCH,OPTIONS');


$con = mysqli_connect('localhost', 'u397080406_reelsUser','Reels@123!','u397080406_reelsvideomake');

if(mysqli_connect_errno()){
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
} else {
  // echo "Connection Success";
}

?>