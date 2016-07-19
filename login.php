<?php
$connection = mysql_connect("localhost", "root", "root");
if(!$connection)
        {
            die ("Could not Connect".mysql_error());
        }
        
$db         = mysql_select_db("college", $connection);
$email      = $_POST['email1'];
$password   = $_POST['password1'];
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo "Invalid Email.......";
} else {
    $result = mysql_query("SELECT * FROM registration WHERE email='$email' AND password='$password'");
    $data   = mysql_num_rows($result);
    if ($data == 1) {
        echo "Successfully Logged in..." . $email;

    } else {
        echo "Email or Password is wrong...!!!!";
    }
}

?>
