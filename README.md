# nodemon-json-server

This repo was created by the necessity of creating a mock api, not based on a json file but on js files which might have logic and with the need of a live reload for js files.

Simple implementation of a json-server (https://github.com/typicode/json-server) using multiple js files to build a fake api.
An approach to easily allow watching changes on js files containing the api data.

Run `npm install` to install json-server dependency

Install nodemon globally so you can watch js files `npm install -g nodemon`

Run the server `nodemon server.js`

Check the terminal logs to see what resources you can access.
`ex:

JSON Server is running

Resources:

http://localhost:3000/posts

http://localhost:3000/profile

http://localhost:3000/comments
`

Server is now watching every change you make on your api files.
