### Setup

Create Tables:

```
$ mysql -u USERNAME --password=PASSWORD DATABASE < sql/create_account_table.sql
$ mysql -u USERNAME --password=PASSWORD DATABASE < sql/create_task_table.sql
```

### Initialization

1. Insert appropriate login information in `config.php`
2. If not running a web server, start a PHP server (example port number: 9001):

```
$ php -S localhost:<port number>
```

---

## Documentation

### Database Schema

The SQL database consists of the following tables:

#### Accounts

| Field    | Type             | Null | Key | Default | Extra          |
|----------|------------------|------|-----|---------|----------------|
| account_id       | int(10) unsigned | NO   | PRI | NULL    | auto_increment |
| username     | varchar(256)     | NO   | UNI | NULL    |                |
| password | varchar(32)      | NO   |     | NULL    |                |

#### Tasks

| Field      | Type             | Null | Key | Default | Extra          |
|------------|------------------|------|-----|---------|----------------|
| task_id    | int(10) unsigned | NO   | PRI | NULL    | auto_increment |
| account_id | int(10) unsigned | NO   | MUL | NULL    |                |
| task_name | varchar(256)     | NO   |     | NULL    |                |
| category   | varchar(256)     | NO   |     | NULL    |                |
| deadline   | date             | NO   |     | NULL    |                |
| priority   | varchar(32)          | NO   |     | NULL    |               |
| completed   | tinyint(1)          | NO   |     | 0    |               |

### Endpoint Body Guide

- This documentation is to give frontend a good idea of the JSON body that should be passed to different endpoint functions
- All frontend functions will return a JSON, whose format is also documented
- Legend
	- Replace `BOOL` with an approrpiate boolean value
		- **Important**: this should be an integer value (0 -> false, 1 -> true)
	- Replace `DATE` with an appropriate date value
	- Replace `INT` with an appropriate integer value
	- Replace `STRING` with an appropriate string value
	- If a line starts with `OPTIONAL`, it means that the value declared there is optional

### `create_account`

```JSON
{
	"type": "create_account",
	"params": {
		"username": STRING,
		"password": STRING
	}
}
```

- Create an account with the following credentials:
	- username = value of field `username`
	- password = value of field `password`

#### return object

```JSON
[
	{
		"query": "INSERT INTO Accounts(username,password) VALUES('USERNAME', 'PASSWORD')",
		"success": BOOL,
		"id": INT
	}
]
```

- `USERNAME` is replaced with the value of field `username`
- `PASSWORD` is replaced with the value of field `password`

### `create_task`

```JSON
{
	"type": "create_task",
	"params": {
		"account_id": INT
		"task_name": STRING,
		"category": STRING,
		"deadline": DATE,
		"priority": STRING
	}
}
```

- Create a task with the following values:
	- account_id = value of field `account_id`
	- task_name = value of field `task_name`
	- category = value of field `category`
	- deadline = value of field `deadline`
	- priority = value of field `priority`

#### return object

```JSON
[
	{
		"query": "INSERT INTO Tasks(account_id, task_name, category, deadline, priority) Values('ACCOUNT_ID', 'TASK_NAME', 'CATEGORY', 'DEADLINE', 'PRIORITY')",
		"success": BOOL,
		"id": INT
	}
]
```

- `ACCOUNT_ID` is replaced with the value of field `account_id`
- `TASK_NAME` is replaced with the value of field `task_name`
- `CATEGORY` is replaced with the value of field `category`
- `DEADLINE` is replaced with the value of field `deadline`
- `PRIORITY` is replaced with the value of field `priority`

### `delete_account`

```JSON
{
	"type": "delete_account",
	"params": {
		"account_id": INT
	}
}
```

- Delete the account in the database where:
	- account_id = value of field `account_id`
- (This also deletes all of this user's tasks)

#### return object

```JSON
[
	{
		"query": "DELETE FROM Tasks WHERE account_id = ACCOUNT_ID",
		"success": BOOL
	},
	{
		"query": "DELETE FROM Accounts WHERE account_id = ACCOUNT_ID",
		"success": BOOL
	}
]
```

- `ACCOUNT_ID` is replaced with the value of field `account_id`

### `delete_task`

```JSON
{
	"type": "delete_task",
	"params": {
		"task_id": INT
	}
}
```

- Delete the task in the database where:
	- task_id = value of field `task_id`

#### return object

```JSON
[
	{
		"query": "DELETE FROM Tasks WHERE task_id = TASK_ID",
		"success": BOOL
	}
]
```

- `TASK_ID` is replaced with the value of field `task_id`

### `get_tasks_from_user_id`

```JSON
{
	"type": "get_tasks_from_user_id",
	"params": {
		"account_id": INT
	}
}
```

#### return object

```JSON
[
	{
		"query": "SELECT * FROM Tasks WHERE account_id = ACCOUNT_ID",
		"success": BOOL,
		"get": [
			{
				"task_id": INT,
				"account_id": INT,
				"task_name": STRING,
				"category": STRING,
				"deadline": DATE,
				"priority": STRING,
				"completed": BOOL
			},
			...
		]
	}
]
```

- `ACCOUNT_ID` is replaced with the value of field `account_id`
- The `get` field is an array which may contain 0 or more tasks. Each task contains all relevant information about the task (value of all columns)

### `get_user_id`

```JSON
{
	"type": "get_user_id",
	"params": {
		"username": STRING,
		"password": STRING
	}
}
```

#### return object

```JSON
[
	{
		"query": "SELECT account_id FROM Accounts WHERE username = USERNAME AND password = PASSWORD",
		"success": BOOL,
		"get": [
			{
				"account_id": INT
			}
		]
	}
]
```

- `USERNAME` is replaced with the value of field `username`
- `PASSWORD` is replaced with the value of field `password`

### `update_account`

- One or more of the `OPTIONAL` fields must be included

```JSON
{
	"type": "update_account",
	"params": {
		"account_id": INT,
		OPTIONAL "username": STRING,
		OPTIONAL "password": STRING
	}
}
```

- Update the account of the user identified by account_id = value of field `account_id`
	- Update this user's username to the value of field `username`
	- Update this user's password to the value of field `password`

#### return object

```JSON
[
	{
		"query": "UPDATE Accounts SET ... WHERE account_id = ACCOUNT_ID",
		"success": BOOL
	}
]
```

- `...` is replaced by the included OPTIONALs
- `ACCOUNT_ID` is replaced with the value of field `account_id`

### `update_task`

- One or more of the `OPTIONAL` fields must be included

```JSON
{
	"type": "update_task",
	"params": {
		"task_id": INT,
		OPTIONAL "account_id": INT,
		OPTIONAL "task_name": STRING,
		OPTIONAL "category": STRING,
		OPTIONAL "deadline": DATE,
		OPTIONAL "priority": STRING,
		OPTIONAL "completed": BOOL
	}
}
```

- Update the task identified by task_id = value of field `task_id`
	- Update this task's account_id to the value of field `account_id`
	- Update this task's tasks_name to the value of field `tasks_name`
	- Update this task's category to the value of field `category`
	- Update this task's deadline to the value of field `deadline`
	- Update this task's priority to the value of field `priority`
	- Update this task's completed to the value of field `completed`

#### return object

```JSON
[
	{
		"query": "UPDATE Tasks SET ... WHERE task_id = TASK_ID",
		"success": BOOL
	}
]
```

- `...` is replaced by the included OPTIONALs
- `TASK_ID` is replaced with the value of field `task_id`
