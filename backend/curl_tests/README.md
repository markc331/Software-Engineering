### Curl Tests

This repository is for quick and dirty curl scripts for testing that the backend is giving the appropriate responses. After setting credentials in `../config.php` and starting a php server at `backend/`, the scripts should be run in the following order.

#### Create/Delete Test

```
$ ./create_account.sh
$ ./create_task.sh
$ ./delete_account.sh
```

#### Delete Task Test

```
$ ./create_account.sh
$ ./create_task.sh
$ ./delete_task.sh
$ ./delete_account.sh
```

#### Get Test

```
$ ./create_account.sh
$ ./create_task.sh
$ ./get_user_id.sh
$ ./get_tasks_from_user_id.sh
$ ./delete_account.sh
```

#### Update Test

```
$ ./create_account.sh
$ ./create_task.sh
$ ./update_task.sh
$ ./update_account.sh
```
