# COEN-174-Project: Goal Tracking App

<!--
## Introduction
-->

## Prerequisites

This project has the following dependenies:

- `git` <!-- git -->
- `mysql` <!-- mariadb-server -->
- `npm` <!-- npm -->
- `php` <!-- php, php-db, php-mysql -->

On a Debian system, all dependencies can be installed in a single command:

```
# apt install git mariadb-server npm php php-db php-mysql
```

## Setup

The following instructions can be used to locally deploy this project.

### Backend

- Set MySQL credentials in `backend/config.php`
- Run the following to create tables in the MySQL database
	- Replace `USERNAME`, `PASSWORD`, and `DATABASE` with the appropriate values

```
$ mysql -u USERNAME --password=PASSWORD DATABASE < backend/sql/create_account_table.sql
$ mysql -u USERNAME --password=PASSWORD DATABASE < backend/sql/create_task_table.sql
```

- Navigate from the project root to `backend/`
- Start a PHP server in this directory. The below example uses port 8000. 
	- If using a different port, be sure to have this reflected in the frontend configuration `frontend/src/config.js`

```
$ php -S localhost:8000
```

### Frontend

- Navigate from the project root to `frontend/`
- Run the following to start the React server

```
$ ./get_dependencies.sh
$ npm start
```

After running this, you should see an output in Terminal that looks like:

```
Compiled successfully!

You can now view frontend in the browser.

Local:            http://localhost:3000
On Your Network:  http://123.45.67.89:3000

Note that the development build is not optimized.
To create a production build, use npm run build.
```

Once the code has compiled and you see this message, a page in your web browser should open to the webpage for the goal tracking app. If a page doesn't open, you can enter the local or network URL listed in the output message into your web browser to open it.
