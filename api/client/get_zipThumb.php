<?php

	include "../connect.php";

	header('Access-Control-Allow-Origin: *');
	header("Access-Control-Allow-Headers: access");
	header("Access-Control-Allow-Methods: POST");
	header("Content-Type: application/json; charset=UTF-8");
	header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

	// get data in raw
	$jsonReqUrl  = 'php://input';
	$content = file_get_contents( $jsonReqUrl );

	if ( $_SERVER[ 'REQUEST_METHOD' ] != 'POST' ) {
		$response[ 'status' ] = false;
		$response[ 'message' ] = "User doesn't exists!";
		header( 'Content-type: application/json' );
		echo json_encode( $response );
		exit;
	}

	function errorRes($con, $zipFileName) {
		$response["status"] = false;
		$response["message"] = "Failed to open the zipFile!";
		$response["zipFileName"] = $zipFileName . '.jpg';
		header('Content-type: application/json');
		echo json_encode($response);
		mysqli_close($con);
		exit;
	}

	$contentDecode = json_decode( $content, true );
	$zipPath = $contentDecode[ 'zipPath' ];

	$zipFileName = basename($zipPath, '.zip');
	$targetDirectory = '../Reels/Cache/';
	$targetPath = $targetDirectory . $zipFileName . '.jpg';

    $zip = new ZipArchive;
	if ($zip->open($zipPath) === TRUE) {
		$thumbnailIndex = $zip->locateName('thumbnail.jpg');
		$videoThumbnailIndex = $zip->locateName('video-thumbnail.jpg');
	
		$thumbnailData = null;
		$thumbnailName = null;

		if ($thumbnailIndex !== false) {
			$thumbnailData = $zip->getFromIndex($thumbnailIndex);
			$thumbnailName = 'thumbnail.jpg';
		} elseif ($videoThumbnailIndex !== false) {
			$thumbnailData = $zip->getFromIndex($videoThumbnailIndex);
			$thumbnailName = 'video-thumbnail.jpg';
		}

		if ($thumbnailData !== null) {
			if (file_put_contents($targetPath, $thumbnailData) !== false) {
				$response["status"] = true;
				$response["message"] = "Successfully extracted and saved the thumbnail!";
				$response["zipFileName"] = $zipFileName . '.jpg';
				header('Content-type: application/json');
				echo json_encode($response);
			} else {
				$response["zipFileName"] = $zipFileName . '.jpg';
				$response["status"] = false;
				$response["message"] = "Failed to save the thumbnail.";
				header('Content-type: application/json');
				echo json_encode($response);
			}
		} else {
			$response["zipFileName"] = $zipFileName . '.jpg';
			$response["status"] = false;
			$response["message"] = "Thumbnail not found in the zip file.";
			header('Content-type: application/json');
			echo json_encode($response);
		}
		$zip->close();
	} else {
		errorRes($con, $zipFileName);
	}

?>
