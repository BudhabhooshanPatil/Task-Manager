# Task-Manager
Simple Task Manager using Node.js

## Tech
- [node.js] - evented I/O for the backend
- [Express] - fast node.js network app framework [@tjholowaychuk]
- [mysql2]  - simple local sql database
## Features

|   Methods  |   Urls              |   Actions                              |
|------------|---------------------|----------------------------------------|
|   GET      |   /api/v1/tasks     |   get all tasks                        |
|   POST     |   /api/v1/tasks     |   create a single task                 |
|   PUT      |   /api/v1/tasks/:id |   update single task with given uuid   |
|   DELETE   |   /api/v1/tasks/:id |   delete a single task with given uuid |


   [express]: <http://expressjs.com>
   [mysql2]: <https://github.com/sidorares/node-mysql2#readme>
   [node.js]: <http://nodejs.org>
