<?php

  include "../connect.php";

  header("Access-Control-Allow-Origin: *");
  header("Access-Control-Allow-Headers: access");
  header("Access-Control-Allow-Methods: GET");
  header("Content-Type: application/json; charset=UTF-8");
  header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

  if ($_SERVER["REQUEST_METHOD"] != "POST") {
    $response["status"] = false;
    $response["message"] = "No Data Found!";
    header("Content-type: application/json");
    echo json_encode($response);
  }

  function errorRes($con) {
		$response["status"]=false;
		$response["message"]="Data not uploaded try after some time!";
		header("Content-type: application/json");
		echo json_encode($response);
		mysqli_close($con);
	}

  date_default_timezone_set("Asia/Kolkata");
  $order_id = $_POST['id'];
  $status = $_POST['status'];

  $filename = $_FILES["video"]["name"];
  $file_ext = pathinfo($filename, PATHINFO_EXTENSION);
  $filenamenew = "reels-video-maker_".date("d_m_y_h_i_s_a").".".$file_ext;
  $tempname = $_FILES["video"]["tmp_name"];
  $folder = "../Reels/Row/".$filenamenew;

  if (move_uploaded_file($tempname, $folder)) {
    $sql = "UPDATE userorder SET status = '$status', downloadLink = '$filenamenew' WHERE order_id = '$order_id'";

    if (mysqli_query($con, $sql)) {
      $response['status'] = true;
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

?>
