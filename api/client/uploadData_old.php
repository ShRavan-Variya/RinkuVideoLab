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

  function dataId( $con ) {
    $data_id = md5(time().mt_rand(1, 10000000));
    $sqlId = "SELECT * FROM datatable WHERE data_id='$data_id'";
    $resultId = mysqli_query($con, $sqlId);
    $countId = mysqli_num_rows($resultId);
    $dataNew["countId"] = $countId;
    $dataNew["data_id"] = $data_id;
    return $dataNew;
  }

  function addProject($con, $dataId) {
    $data_id = $dataId["data_id"];

    date_default_timezone_set("Asia/Kolkata");
    $created_at = date("Y-m-d H:i:s");
    $updated_at = $created_at;

    $filename = $_FILES["file"]["name"];
    $file_ext = pathinfo($filename, PATHINFO_EXTENSION);
    $filenamenew = "reels-video-maker_".$data_id."_".date("h_i_s").".".$file_ext;
    $tempname = $_FILES["file"]["tmp_name"];
    $folder = "../Reels/Row/".$filenamenew;
    

    $sql = "INSERT INTO datatable VALUES('$data_id', '$filenamenew', '$folder', '$created_at', '$updated_at');";

    if (mysqli_query($con, $sql)) {
      if (move_uploaded_file($tempname, $folder)) {
        $data["data_id"] = $data_id;
        $data["filename"] = $filenamenew;
        $data["folder"] = "/Reels/Row/".$filenamenew;
        $data["created_at"] = $created_at;
        $data["updated_at"] = $updated_at;
  
        $response["status"] = true;
        $response["message"] = "Successfully uploaded Data!";
        $response["data"] = $data;
        header("Content-type: application/json");
        echo json_encode($response);
        mysqli_close($con);
      }
    } else {
      errorRes($con);
    }
  }

  $dataId = dataId($con);
  if ($dataId["countId"] == 0 ) {
    addProject($con, $dataId);
  } else {
    do {
      $dataId = dataId($con);
    }
    while ($dataId["countId"] == 0);
  }
?>
