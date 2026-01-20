CREATE TABLE Tasks(
	task_id INT UNSIGNED NOT NULL AUTO_INCREMENT,
	account_id INT UNSIGNED NOT NULL,
	task_name VARCHAR(256) NOT NULL,
	category VARCHAR(256) NOT NULL,
	deadline DATE NOT NULL,
	priority VARCHAR(32) NOT NULL,
	completed BOOL DEFAULT 0 NOT NULL,
	FOREIGN KEY (account_id) REFERENCES Accounts(account_id),
	PRIMARY KEY(task_id)
);
