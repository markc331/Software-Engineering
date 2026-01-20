<?php

#---------------testing for database connection----------------- #
include 'config.php';
GLOBAL $db;
print $db;

#-----------------------account creation check ---------------------#
include 'create.php';

#case1: normal user
$create_usr1 = array($name = "Bob", $password = "123abc");
$_REQUEST['body'] = $json_encode($create_usr1);
$_REQUEST['type'] = "create_account";

#case2: unexpected field
$create_usr2 = array($name = "#fn4%&", $password = "234hbbtg");
$_REQUEST['body'] = $json_encode($create_usr2);
$_REQUEST['type'] = "create_account";

#case3: missing field
$create_usr3 = array($name = "", $password = "234hbbtg");
$_REQUEST['body'] = $json_encode($create_usr3);
$_REQUEST['type'] = "create_account";

$create_usr4 = array($name = "Karl", $password = "");
$_REQUEST['body'] = $json_encode($create_usr4);
$_REQUEST['type'] = "create_account";

#empty case
$create_usr5 = array($name = "", $password = "");
$_REQUEST['body'] = $json_encode($create_usr5);
$_REQUEST['type'] = "create_account";

#-----------------------tasks creation check -----------------------#

#case1: normal task
$create_tsk1 = array($account_id = 'SELECT id FROM accounts WHERE name= $name, password= $password',$task_name = "test", $category = "homework", $deadline = "2022-31-10", $priority = 3);
$_REQUEST['body'] = $json_encode($create_tsk1);
$_REQUEST['type'] = "create_task";

#case2:unexpected field
$create_tsk2 = array($account_id = 'SELECT id FROM accounts WHERE name= $name, password= $password',$task_name = "1245345g#", $category = "homework", $deadline = "2022-31-10", $priority = 3);
$_REQUEST['body'] = $json_encode($create_tsk2);
$_REQUEST['type'] = "create_task";

$create_tsk3 = array($account_id = 'SELECT id FROM accounts WHERE name= $name, password= $password',$task_name = "test", $category = "214124#12", $deadline = "2022-31-10", $priority = 3);
$_REQUEST['body'] = $json_encode($create_tsk3);
$_REQUEST['type'] = "create_task";

$create_tsk4 = array($account_id = 'SELECT id FROM accounts WHERE name= $name, password= $password',$task_name = "test", $category = "homework", $deadline = "2021-31-10", $priority = 3);
$_REQUEST['body'] = $json_encode($create_tsk4);
$_REQUEST['type'] = "create_task";

$create_tsk5 = array($account_id = 'SELECT id FROM accounts WHERE name= $name, password= $password',$task_name = "test", $category = "homework", $deadline = "2022-31-10", $priority = "d");
$_REQUEST['body'] = $json_encode($create_tsk5);
$_REQUEST['type'] = "create_task";

#case3: missing field
$create_tsk6 = array($account_id = 'SELECT id FROM accounts WHERE name= $name, password= $password',$task_name = "", $category = "homework", $deadline = "2022-31-10", $priority = 3);
$_REQUEST['body'] = $json_encode($create_tsk6);
$_REQUEST['type'] = "create_task";

$create_tsk7 = array($account_id = 'SELECT id FROM accounts WHERE name= $name, password= $password',$task_name = "test", $category = "", $deadline = "2022-31-10", $priority = 3);
$_REQUEST['body'] = $json_encode($create_tsk7);
$_REQUEST['type'] = "create_task";

$create_tsk8 = array($account_id = 'SELECT id FROM accounts WHERE name= $name, password= $password',$task_name = "test", $category = "homework", $deadline = "", $priority = 3);
$_REQUEST['body'] = $json_encode($create_tsk8);
$_REQUEST['type'] = "create_task";

$create_tsk9 = array($account_id = 'SELECT id FROM accounts WHERE name= $name, password= $password',$task_name = "test", $category = "homework", $deadline = "2022-31-10");
$_REQUEST['body'] = $json_encode($create_tsk9);
$_REQUEST['type'] = "create_task";

# empty case
$create_tsk10= array($account_id = 'SELECT id FROM accounts WHERE name= $name, password= $password',$task_name = "", $category = "", $deadline = "");
$_REQUEST['body'] = $json_encode($create_tsk10);
$_REQUEST['type'] = "create_task";

#---------------------printing account/task table---------------------#

$account_sql = 'SELECT * FROM accounts';

$result = mysqli_query($db, $account_sql);
$usr = mysqli_fetch_all($result, MYSQLI_ASSOC);
print $usr;

$task_sql = 'SELECT * FROM tasks';

$result = mysqli_query($db, $task_sql);
$task = mysqli_fetch_all($result, MYSQLI_ASSOC);
print $task;

#-----------------------task deletion check----------------------#

$del_task= array($task_id = 'SELECT * FROM tasks WHERE id= 1');
$_REQUEST['body'] = $json_encode($del_task);
$_REQUEST['type'] = "delete_task";

$task_sql = 'SELECT * FROM tasks';

$result = mysqli_query($db, $task_sql);
$task = mysqli_fetch_all($result, MYSQLI_ASSOC);
print $task;

#---------------------account deletion check---------------------#
include 'delete.php';

#password casecheck
$del_usr= array($id = 'SELECT * FROM accounts WHERE name="Bob", password="123ABC" ');
$_REQUEST['body'] = $json_encode($del_usr);
$_REQUEST['type'] = "delete_account";

$account_sql = 'SELECT * FROM accounts';

$result = mysqli_query($db, $account_sql);
$usr = mysqli_fetch_all($result, MYSQLI_ASSOC);
print $usr;

#properly delete
$del_usr= array($id = 'SELECT * FROM accounts WHERE name="Bob", password="123abc" ');
$_REQUEST['body'] = $json_encode($del_usr);
$_REQUEST['type'] = "delete_account";

$account_sql = 'SELECT * FROM accounts';

$result = mysqli_query($db, $account_sql);
$usr = mysqli_fetch_all($result, MYSQLI_ASSOC);
print $usr;

?>