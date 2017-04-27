<?php
	if (!isset($_POST['submit'])) {
		echo "error; you need to actually submit the form -.-";
		header('Refresh: 4; URL=http://www.noelnegusse.com/#contact');
		exit;
	}

	// form the 'form'
	$name = trim(strip_tags($_POST['name']));
	$visitor_email = trim(strip_tags($_POST['email']));
	$email_from = 'noel.negusse@gmail.com';
	$message = htmlentities($_POST['message']);
	$captcha = trim(strip_tags($_POST['captcha']));

	if (empty($name) || empty($visitor_email) || empty($captcha) ) {
		echo "You forgot your name and/or email. Message was not sent.
			You will be redirected shortly...";
		header('Refresh: 4; URL=http://www.noelnegusse.com/#contact');
		exit;
	}

	// set here
	$subject = "Contact Form Submitted By $name";
	$to = 'noel.negusse@utexas.edu';
	$body = "$name with email, $visitor_email, says: \n $message";

	$headers = "From: $email_from \r\n";
	$headers .= "Replay-To: $visitor_email \r\n";
	$headers .= "Content-type: text/html \r\n";

	// send the email
	if ($captcha === "2") {
		mail($to, $subject, $body, $headers);
		echo "Your message was sent successfully, thank you!
			You will be redireted shortly...";
		header('Refresh: 4; URL=http://www.noelnegusse.com/');
		exit;
	} else {
		echo "Sorry, you captcha response was incorrect. Message was not sent.
			You will be redirected shortly...";
		header('Refresh: 4; URL=http://www.noelnegusse.com/#contact');
		exit;
	}

?>


