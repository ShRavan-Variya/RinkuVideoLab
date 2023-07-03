<?php

include '../connect.php';

header( 'Access-Control-Allow-Origin: *' );
header( 'Access-Control-Allow-Headers: access' );
header( 'Access-Control-Allow-Methods: GET' );
header( 'Content-Type: application/json; charset=UTF-8' );
header( 'Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With' );

// Include the Stripe PHP library
require_once( '../stripePayments/init.php' );

// Retrieve the amount and currency from the GET request parameters
$amount = $_GET['amount'];
$currency = $_GET['currency'];

// Set your Stripe API key
$stripeApiKey = 'sk_test_51NPn1YSGEQWw7sigQWq1j8E5QbFKCVBtsbyG4dFEIiwZrrx9D8PlaOJ0CosslTvJEgguvHqcNQaO0U7AqMsZjQFA00O4RarMkC';
\Stripe\Stripe::setApiKey( $stripeApiKey );

// Create a new PaymentIntent
try {
    $paymentIntent = \Stripe\PaymentIntent::create([
		'amount' => $amount,
		'currency' => $currency,
	]);

    // Send the client secret back to the frontend
    echo json_encode( [ 'clientSecret' => $paymentIntent->client_secret ] );
} catch ( \Stripe\Exception\ApiErrorException $e ) {
    // Handle any errors that occurred during PaymentIntent creation
    http_response_code( 500 );
    echo json_encode( [ 'error' => $e->getMessage() ] );
}

?>