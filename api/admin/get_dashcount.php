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

function errorRes($con)
{
	$response["status"] = false;
	$response["message"] = "No Data Found!";
	header('Content-type: application/json');
	echo json_encode($response);
	mysqli_close($con);
}

$countType = $_GET['countType'];

if ($countType) {

	$sql_totalProj = "";
	$sql_pendingProj = "";
	$sql_workingProj = "";
	$sql_completeProj = "";
	date_default_timezone_set("Asia/Kolkata");

	if ($countType == 1) {
		$currentDate = date("Y-m-d");
		$sql_totalProj = "SELECT * FROM `userorder` WHERE DATE(created_at) = CURDATE()";
		$sql_pendingProj = "SELECT * FROM `userorder` WHERE status=1 AND DATE(created_at) = CURDATE()";
		$sql_workingProj = "SELECT * FROM `userorder` WHERE status=2 AND DATE(created_at) = CURDATE()";
		$sql_completeProj = "SELECT * FROM `userorder` WHERE status=3 AND DATE(created_at) = CURDATE()";
	} else if ($countType == 2) {
		$sql_totalProj = "SELECT * FROM userorder WHERE YEARWEEK(`created_at`, 1) = YEARWEEK(CURDATE(), 1)";
		$sql_pendingProj = "SELECT * FROM `userorder` WHERE status=1 AND YEARWEEK(`created_at`, 1) = YEARWEEK(CURDATE(), 1)";
		$sql_workingProj = "SELECT * FROM `userorder` WHERE status=2 AND YEARWEEK(`created_at`, 1) = YEARWEEK(CURDATE(), 1)";
		$sql_completeProj = "SELECT * FROM `userorder` WHERE status=3 AND YEARWEEK(`created_at`, 1) = YEARWEEK(CURDATE(), 1)";
	} else if ($countType == 3) {
		$currentDate = date("Y-m-d");
		$sql_totalProj = "SELECT * FROM userorder WHERE MONTH(`created_at`) = MONTH(CURDATE()) AND YEAR(`created_at`) = YEAR(CURDATE())";
		$sql_pendingProj = "SELECT * FROM `userorder` WHERE status=1 AND MONTH(`created_at`) = MONTH(CURDATE()) AND YEAR(`created_at`) = YEAR(CURDATE())";
		$sql_workingProj = "SELECT * FROM `userorder` WHERE status=2 AND MONTH(`created_at`) = MONTH(CURDATE()) AND YEAR(`created_at`) = YEAR(CURDATE())";
		$sql_completeProj = "SELECT * FROM `userorder` WHERE status=3 AND MONTH(`created_at`) = MONTH(CURDATE()) AND YEAR(`created_at`) = YEAR(CURDATE())";
	} else if ($countType == 4) {
		$currentDate = date("Y-m-d");
		$sql_totalProj = "SELECT * FROM userorder WHERE YEAR(`created_at`) = YEAR(CURDATE())";
		$sql_pendingProj = "SELECT * FROM `userorder` WHERE status=1 AND YEAR(`created_at`) = YEAR(CURDATE())";
		$sql_workingProj = "SELECT * FROM `userorder` WHERE status=2 AND YEAR(`created_at`) = YEAR(CURDATE())";
		$sql_completeProj = "SELECT * FROM `userorder` WHERE status=3 AND YEAR(`created_at`) = YEAR(CURDATE())";
	}

	$totalProj = null;
	$pendingProj = null;
	$workingProj = null;
	$completeProj = null;

	if ($result = mysqli_query($con, $sql_totalProj)) {
		$totalProj = mysqli_num_rows($result);
	}
	if ($result = mysqli_query($con, $sql_pendingProj)) {
		$pendingProj = mysqli_num_rows($result);
	}
	if ($result = mysqli_query($con, $sql_workingProj)) {
		$workingProj = mysqli_num_rows($result);
	}
	if ($result = mysqli_query($con, $sql_completeProj)) {
		$completeProj = mysqli_num_rows($result);
	}


	// $data['sql_totalProj'] = $sql_totalProj;
	$data['total'] = $totalProj;
	$data['pending'] = $pendingProj;
	$data['working'] = $workingProj;
	$data['complete'] = $completeProj;


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
} else {
	errorRes($con);
}
?>