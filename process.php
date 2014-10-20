<?php

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

    $from = 'From: Xubliminal Contact Form';
    $to = 'magalocr@gmail.com';
    $subject = 'Hello';

    $body = "From: $name\n\n E-Mail: $email\n\n Phone: $phone\n\n Company: $company\n\n Service: $service\n\n Budget: $budget\n\n Message:\n $message";

    if (mail ($to, $subject, $body, $from)) { 
      $data['success'] = true;
      $data['message'] = 'Success!';
    }
  }

  echo json_encode($data);