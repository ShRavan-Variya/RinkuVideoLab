<?php

	include "../connect.php";

	header('Access-Control-Allow-Origin: *');
	header("Access-Control-Allow-Headers: access");
	header("Access-Control-Allow-Methods: GET");
	header("Content-Type: application/json; charset=UTF-8");
	header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

	if ($_SERVER["REQUEST_METHOD"] != "GET") {
		$response["status"] = false;
		$response["message"] = "No Data Found!";
		header('Content-type: application/json');
		echo json_encode($response);
	}

	function errorRes($con) {
		$response["status"] = false;
		$response["message"] = "No Data Found!";
		header('Content-type: application/json');
		echo json_encode($response);
		mysqli_close($con);
	}

	$sql = "SELECT * FROM `userorder` ORDER BY `userorder`.`downloadTime` DESC";
		
	$query = mysqli_query($con, $sql);
	$res_array = array();

	while ($row = mysqli_fetch_assoc($query)) {
		$zipId = $row['zipId'];

		$sqlData = "SELECT * FROM `datatable` WHERE data_id='$zipId' ORDER BY `datatable`.`created_at` DESC";
		$queryData = mysqli_query($con, $sqlData);
		$res_data_array = mysqli_fetch_assoc($queryData);

		$dataItem = $row;
		$dataItem['data_list'] = $res_data_array;
		$res_array[] = $dataItem;
	};

	$data = $res_array;

	if ($data) {
		$response["status"] = true;
		$response["message"] = "Successfully get user projects!";
		$response["data"] = $data;
		header('Content-type: application/json');
		echo json_encode($response);
		mysqli_close($con);
	} else {
		errorRes($con);
	}
?>