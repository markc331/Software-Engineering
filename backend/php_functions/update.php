<?php

include "config.php";

function update_account($json_hash) {
	GLOBAL $db;
	$queries = [];
	$need_update = false; //set to true if at least one of the fields is set
	$update_query = "";

	// list of fields (excluding id)
	$fields = [
		"username",
		"password"
	];

	// Quit out if id is not passed
	if(!$json_hash['account_id']) {
		print "Error: Missing account_id to update<br>";
		return "";
	}

	// Check if anything is passed to update
	foreach($fields as $f) {
		if(array_key_exists($f, $json_hash)) {
			$need_update = true;
			break;
		}
	}
	if(!$need_update) {
		print "Error: Missing field(s) to update<br>";
		return;
	}

	// Build query
	$update_query .= "UPDATE Accounts SET";
	foreach($fields as $f) {
		if(array_key_exists($f, $json_hash)) {
			$json_hash[$f] = mysqli_real_escape_string($db, $json_hash[$f]);
			$update_query .= " $f = '" . $json_hash[$f] . "',";
		}
	}
	$update_query = rtrim($update_query, ","); //remove trailing comma
	$update_query .= " WHERE account_id = " . $json_hash['account_id'];

	// Push query
	array_push($queries, $update_query);

	return $queries;
}

function update_task($json_hash) {
	GLOBAL $db;
	$need_update = false; //set to true if at least one of the fields is set
	$update_query = "";
	$queries = [];

	// list of fields (excluding task_id)
	$fields = [
		"account_id",
		"task_name",
		"category",
		"deadline",
		"priority",
		"completed"
	];


	// Quit out if task id is not passed
	if(!$json_hash['task_id']) {
		print "Error: Missing task_id to update<br>";
		return;
	}

	// Check if anything is passed to update
	foreach($fields as $f) {
		if(array_key_exists($f, $json_hash)) {
			$need_update = true;
			break;
		}
	}
	if(!$need_update) {
		print "Error: Missing field(s) to update<br>";
		return;
	}

	// Build query
	$update_query .= "UPDATE Tasks SET";
	foreach($fields as $f) {
		if(array_key_exists($f, $json_hash)) {
			$json_hash[$f] = mysqli_real_escape_string($db, $json_hash[$f]);
			$update_query .= " $f = '" . $json_hash[$f] . "',";
		}
	}
	$update_query = rtrim($update_query, ","); //remove trailing comma
	$update_query .= " WHERE task_id = " . $json_hash['task_id'];

	// Push query
	array_push($queries, $update_query);

	return $queries;
}

?>
