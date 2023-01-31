<?php
	
	include "../connect.php";

	header('Access-Control-Allow-Origin: *');
	header("Access-Control-Allow-Headers: access");
	header("Access-Control-Allow-Methods: POST");
	header("Content-Type: application/json; charset=UTF-8");
	header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
	
	// get data in raw
	$jsonReqUrl  = "php://input";
	$content = file_get_contents($jsonReqUrl);

	if ($_SERVER["REQUEST_METHOD"] != "POST") {
		$response["status"]=false;
		$response["message"]="User doesn't exists!";
		header('Content-type: application/json');
		echo json_encode($response);
	}
	
	$contentDecode = json_decode($content, true);
	$project_name = $contentDecode['projectName'];
	$title = $contentDecode['title'];
	$notes = $contentDecode['notes'];
	$song = $contentDecode['song'];
	$data_list = json_encode($contentDecode['dataList']);
	$user_id = $contentDecode['userId'];
	$user_name = $contentDecode['userName'];
	$amount = $contentDecode['amount'];

	function errorRes($con) {
		$response["status"]=false;
		$response["message"]="Data not uploaded try after some time!";
		header('Content-type: application/json');
		echo json_encode($response);
		mysqli_close($con);
	}

	function orderId($con) {
		$order_id = md5(time() . mt_rand(1, 10000000));
		
		$sqlId="SELECT * FROM userorder WHERE order_id='$order_id'";

		$resultId=mysqli_query($con,$sqlId);
		$countId=mysqli_num_rows($resultId);

		$dataNew['countId'] = $countId;
		$dataNew['order_id'] = $order_id;

		return $dataNew;
	}

	function addProject($con, $dataId, $proj_name, $title, $notes, $song, $data_list, $user_id, $user_name, $amount) {
		$order_id = $dataId['order_id'];

		date_default_timezone_set('Asia/Kolkata');
		$created_at = date('Y-m-d H:i:s');
		$updated_at = $created_at;

		$paymentId = '';
		$image = '';
		$downloadLink = '';
		$downloadTime = date("Y-m-d H:i:s", strtotime('+2 hours'));

		$sql="INSERT INTO userorder VALUES('$order_id', '$proj_name', '$title', '$notes', '$song', '$data_list', '$user_id', '$user_name', $amount, '$paymentId', '$image', '$downloadLink', '$downloadTime', '$created_at', '$updated_at');";
		
		// echo 'DONE';
		if(mysqli_query($con,$sql)) {

			$data["order_id"] = $order_id;
			$data["project_name"] = $proj_name;
			$data["title"] = $title;
			$data["notes"] = $notes;
			$data["song"] = $song;
			$data["data_list"] = json_decode($data_list);
			$data["user_id"] = $user_id;
			$data["user_name"] = $user_name;
			$data["amount"] = $amount;
			$data["paymentId"] = $paymentId;
			$data["image"] = $image;
			$data["downloadLink"] = $downloadLink;
			$data["downloadTime"] = $downloadTime;
			$data["created_at"] = $created_at;
			$data["updated_at"] = $updated_at;

			$response["status"]=true;
			$response["message"]="Data uploaded successfully!";
			$response["data"]=$data;
			header('Content-type: application/json');
			echo json_encode($response);
			mysqli_close($con);
		} else {
			errorRes($con);
		}
	}
	
	$dataId = orderId($con);

	if ($dataId['countId'] == 0) {
		addProject($con, $dataId, $project_name, $title, $notes, $song, $data_list, $user_id, $user_name, $amount);
	} else {
		do {
			$dataId = orderId($con);
		} while ($dataId['countId'] == 0);
	}
?>
