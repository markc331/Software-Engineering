<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method,Access-Control-Request-Headers, Authorization");

$hostname = "localhost"; #Change to IP if connecting to remote database
$username = 'USERNAME';
$password = '';          #Leave blank for no password
$database = 'DATABASE';

$db = mysqli_connect(
	"$hostname",
	"$username",
	"$password",
	"$database"
)

?>
