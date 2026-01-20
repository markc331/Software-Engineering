# Frontend

This folder houses the code for the frontend of the goal tracking app. The code is written with React JS.

## Set Up

Before you can run the code, you first need to perform a few installations. Follow the steps below to set things up:

1. Open Terminal, and cd to `COEN-174-Project/frontend`.
2. Run `./get_dependencies.sh`

## Running the Code

To run the code, follow the steps below:

1. Open Terminal, and cd to `COEN-174-Project/frontend`.
2. Run `npm start`.

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

## Running Tests

To run the tests for the frontend, follow the steps below:

1. Open Terminal, and cd to `COEN-174-Project/frontend`.
2. Run `npm test`.

After running this, you should see an output in Terminal that looks like:

```
 PASS  src/App.test.js
  ✓ SIGN IN TEST: Verify Sign In Page's Elements (349 ms)
  ✓ SIGN IN TEST: Verify User Can Type Into Username & Password Field & Sign In (142 ms)
  ✓ SIGN UP TEST: Verify Sign Up Page's Elements (54 ms)
  ✓ SIGN UP TEST: Verify User Can Type Into Username & Password Field & Sign In (37 ms)
  ✓ HOME PAGE TEST: Verify Home Page's Elements (31 ms)
  ✓ HOME PAGE TEST: Verify Link to To Do's (18 ms)
  ✓ HOME PAGE TEST: Verify Link to Progress Tracker (25 ms)

Test Suites: 1 passed, 1 total
Tests:       7 passed, 7 total
Snapshots:   0 total
Time:        3.169 s
Ran all test suites.

Watch Usage: Press w to show more.
```

The `PASS` indicates all of the tests have passed. If you see `FAIL`, this means some of the tests have failed. In the event of test failures, you will see logs in the test output, shedding insight into the error/failure.
