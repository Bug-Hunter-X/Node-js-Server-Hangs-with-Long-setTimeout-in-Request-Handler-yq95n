# Node.js Server Hang with setTimeout

This repository demonstrates a common issue in Node.js where a server can hang or become unresponsive when using `setTimeout` within a request handler with a long delay.  The provided `bug.js` file showcases the problem. The `bugSolution.js` demonstrates the solution.

## Problem
The server in `bug.js` simulates a 5-second delay using `setTimeout`. During this time, the server is unable to respond to any further requests, leading to unresponsive behavior.

## Solution
The `bugSolution.js` addresses the issue by using asynchronous operations and promises to handle the long-running task concurrently, preventing the server from becoming blocked and ensuring responsiveness.