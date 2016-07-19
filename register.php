<?php
$connection = mysql_connect("localhost", "root", "root");
if (mysqli_connect_errno())
  {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
  }


$db         = mysql_select_db("college", $connection);
$name       = $_POST['name1'];
$email      = $_POST['email1'];
$password   = $_POST['password1'];
echo $name;

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo "Invalid Email.......";
} else {
    $result = mysql_query("SELECT * FROM registration WHERE email='$email'");
    $data   = mysql_num_rows($result);
    if (($data) == 0) {
        $query = mysql_query("insert into registration(name, email, password) values ('$name', '$email', '$password')"); 
        if ($query) {
            echo " Successfully Registered.....";
        } else {
            echo "Error....!!";
        }
    } else {
        echo "This email is already registered";
    }
}

?>