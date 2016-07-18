<?php
$connection = mysql_connect("localhost", "root", "root");
$db = mysql_select_db("college", $connection); 
$name=$_POST['name1']; 
$email=$_POST['email1'];
$password= sha1($_POST['password1']);

if (!filter_var($email, FILTER_VALIDATE_EMAIL)){
echo "Invalid Email.......";
}else{
$result = mysql_query("SELECT * FROM registration WHERE email='$email'");
$data = mysql_num_rows($result);
if(($data)==0){
$query = mysql_query("insert into registration(name, email, password) values ('$name', '$email', '$password')"); // Insert query
if($query){
echo " Successfully Registered.....";
}else
{
echo "Error....!!";
}
}else{
echo "This email is already registered";
}
}

?>