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
	$contentDecode = json_decode($content, true);

	// set in variable
	$full_name = $contentDecode['full_name'];
	$user_name = $contentDecode['user_name'];
	$email = $contentDecode['email'];
	$mobile = $contentDecode['mobile'];
	$password = $contentDecode['password'];

	$sql="SELECT * FROM users WHERE email='$email'";
	$result=mysqli_query($con,$sql);  		
  $count=mysqli_num_rows($result);

	function errorRes($con) {
		$response["status"]=false;
		$response["message"]="Invalid email or password!";
		header('Content-type: application/json');
		echo json_encode($response);
		mysqli_close($con);
	}

	function userExistRes($con) {
		$response["status"]=false;
		$response["message"]="User already exists!";
		header('Content-type: application/json');
    echo json_encode($response);
		mysqli_close($con);
	}

	function userId($con) {
		$user_id = md5(time() . mt_rand(1, 10000000));
		
		$sqlId="SELECT * FROM users WHERE user_id='$user_id'";

		$resultId=mysqli_query($con,$sqlId);
		$countId=mysqli_num_rows($resultId);

		$data['countId'] = $countId;
		$data['user_id'] = $user_id;

		return $data;
	}

	function addUser($con, $dataId, $full_name, $user_name, $email, $mobile, $password) {
		$user_id = $dataId['user_id'];
		$password_hash = password_hash($password, PASSWORD_DEFAULT);
		date_default_timezone_set('Asia/Kolkata');
		$created_at = date('Y-m-d H:i:s');
		$updated_at = $created_at;

		$sql="INSERT INTO users VALUES('$user_id','$full_name','$user_name','$email',$mobile,'$password_hash', '$created_at', '$updated_at');";
		if(mysqli_query($con,$sql)) {
			$data["full_name"] = $full_name;
			$data["user_name"] = $user_name;
			$data["email"] = $email;
			$data["mobile"] = $mobile;
			$response["status"]=true;
			$response["message"]="User register successfully!";
			$response["data"]=$data;
			header('Content-type: application/json');
			echo json_encode($response);
			mysqli_close($con);
		} else {
			errorRes($con);
		}
	}

	if ($count>0) {
		userExistRes($con);
	} else {
		$dataId = userId($con);

		if ($dataId['countId'] == 0) {
			addUser($con, $dataId, $full_name, $user_name, $email, $mobile, $password);
		} else {
			do {
				$dataId = userId($con);
			} while ($dataId['countId'] == 0);
		}
	}
	
?>