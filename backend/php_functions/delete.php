<?php

include "config.php";

function delete_account($json_hash) {
	GLOBAL $db;
	$account_id = "";
	$queries = [];

	// Quit out if account_id is not passed
	if(!$json_hash['account_id']) {
		print "Error: Missing account_id for deletion<br>";
		return "";
	}

	$account_id = mysqli_real_escape_string($db, $json_hash['account_id']);

	// Create queries
	array_push($queries, "DELETE FROM Tasks WHERE account_id = '$account_id'"); //delete all the tasks this account had created
	array_push($queries, "DELETE FROM Accounts WHERE account_id = '$account_id'");

	return $queries;
}

function delete_task($json_hash) {
	GLOBAL $db;
	$task_id = "";
	$queries = [];

	// Quit out if task id is not passed
	if(!$json_hash['task_id']) {
		print "Error: Missing task_id for deletion<br>";
		return;
	}

	$task_id = mysqli_real_escape_string($db, $json_hash['task_id']);

	// Create query
	array_push($queries, "DELETE FROM Tasks WHERE task_id = '$task_id'");

	return $queries;
}

?>
