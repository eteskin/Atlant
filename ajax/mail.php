<?php
  $name = $_POST['name'];
  $phone = $_POST['phone'];

  $subject = "=?utf-8?B?".base64_encode("Сообщение с сайта по кухням")."?=";
  $headers = "From: $name\r\nReply-to: $name\r\nContent-type: text/html; charset=uts-8\r\n";
  $message = "Имя: $name \nТелефон: $phone";

  $success = mail("chaynikov91@gmail.com", $subject, $message, $headers);
  echo $success;
?>
