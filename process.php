<?php

  require "bower_components/PHPMailer/PHPMailerAutoload.php";

  $errors = array();
  $data = array();

  // validate the variables ======================================================
  
  if (empty($_POST['name']))
    $errors['name'] = 'Name is required.';

  if (empty($_POST['email']))
    $errors['superheroAlias'] = 'Email is required.';

  // return a response ===========================================================

  if ( ! empty($errors)) {
    $data['success'] = false;
    $data['errors']  = $errors;
  } else {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = isset($_POST['phone']) ? $_POST['phone'] : 'Phone not provided.';
    $company = isset($_POST['company']) ? $_POST['company'] : 'Company not provided.';
    $service = isset($_POST['service']) ? $_POST['service'] : 'Service not provided.';
    $budget = isset($_POST['budget']) ? $_POST['budget'] : 'Budget not provided.';
    $message = $_POST['message'];

    $body = "From: $name\n\n E-Mail: $email\n\n Phone: $phone\n\n Company: $company\n\n Service: $service\n\n Budget: $budget\n\n Message:\n $message";

    $mail = new PHPMailer;
    // SMTP Settings
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = "mauricio@xubliminal.com";
    $mail->Password = "Qwerty1123581321";
    $mail->SMTPSecure = 'tls';
    $mail->Port = 587;

    // Configure email
    $mail->From = 'hello@xubliminal.com';
    $mail->FromName = "Xubliminal Contact Form";
    $mail->addAddress('hello@xubliminal.com');
    $mail->Subject = "New Quote Request from Xubliminal";
    $mail->Body = $body;

    if ($mail->send()) { 
      $data['success'] = true;
      $data['message'] = 'Success!';
    }
  }

  header('Content-type: application/json');
  echo json_encode($data); die;