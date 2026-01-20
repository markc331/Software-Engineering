<?php 

include 'config.php';

// error would be empty submissions
function create_account($json_hash) {
	GLOBAL $db;
	$valid = true; //set to false if new account cannot be added
	$username = "";
	$password = "";
	$queries = [];

	// list of fields that must not be null
	$fields = [
		"username",
		"password"
	];

	// check validity of json
	foreach($fields as $f) {
		if(!$json_hash[$f]) {
			print "Error: $f cannot be null <br>";
			$valid = false;
		}
	}
	if(!$valid) {
		print "Query body has one or more errors <br>";
		return;
	}

	$username = mysqli_real_escape_string($db, $json_hash['username']);
	$password = mysqli_real_escape_string($db, $json_hash['password']);

	array_push(
		$queries,
		"INSERT INTO Accounts(username,password) VALUES('$username', '$password')" 
	);

	return $queries;
}

function create_task($json_hash){
	GLOBAL $db;
	$valid = true;
	$account_id = "";
	$task_name = "";
	$category = "";
	$deadline = "";
	$priority = "";
	$queries = [];

	// list of fields that must not be null
	$fields = [
		"account_id",
		"task_name",
		"category",
		"deadline",
		"priority"
	];

	// check validity of json
	foreach($fields as $f) {
		if(!$json_hash[$f]) {
			print "Error: $f cannot be null <br>";
			$valid = false;
		}
	}
	if(!$valid) {
		print "Query body has one or more errors <br>";
		return;
	}
		
	$account_id = mysqli_real_escape_string($db, $json_hash['account_id']);
	$task_name = mysqli_real_escape_string($db, $json_hash['task_name']);
	$category = mysqli_real_escape_string($db, $json_hash['category']);
	$deadline = mysqli_real_escape_string($db, $json_hash['deadline']);
	$priority = mysqli_real_escape_string($db, $json_hash['priority']);

	array_push(
		$queries,
		"INSERT INTO Tasks(account_id, task_name,category,deadline,priority) Values('$account_id','$task_name', '$category', '$deadline', '$priority')" //TODO cleanup redundancy with $fields loop
	);

	return $queries;
}

?>
