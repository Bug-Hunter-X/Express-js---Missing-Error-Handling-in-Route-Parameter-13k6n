# Express.js Route Parameter Error Handling

This repository demonstrates a common error in Express.js route parameter handling and its solution.  The bug involves assuming the existence of user data fetched based on an ID without proper error handling. This can result in application crashes or unexpected behavior when the user data is not found.

## Bug

The `bug.js` file contains code that fetches user data using an ID from the route parameters. However, it doesn't handle the case where the user data is not found, potentially leading to errors.

## Solution

The `bugSolution.js` file provides a corrected version of the code.  It includes error handling to check for the existence of `userData` before sending a response. If the data is not found, it returns a 404 status code and an appropriate message.