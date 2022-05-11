# Task-Manager
Simple Task Manager using Node.js

## Tech
- [node.js] - evented I/O for the backend
- [Express] - fast node.js network app framework [@tjholowaychuk]
- [mysql2]  - simple local sql database
## Features

- Get All Tasks:
    ```bash 
        curl --location --request GET 'http://localhost:3000/api/v1/tasks'
    ```
- Create a Single task :
    ```bash 
        curl --location --request POST 'http://localhost:3000/api/v1/tasks' \
        --header 'Content-Type: application/json' \
        --data-raw '{
            "description": "create a new task with description"
        }'
    ```
- Update single task with given uuid:
    ```bash 
        curl --location --request PUT 'http://localhost:3000/api/v1/tasks/38843980-a9bf-11ec-a424-7304f152d108' \
        --header 'Content-Type: application/json' \
        --data-raw '{
            "description": "this is awesome",
            "uuid": "38843980-a9bf-11ec-a424-7304f152d108",
            "complete": true
        }'
    ```
- Delete a single task with given uuid:
    ```bash 
        curl --location --request DELETE 'http://localhost:3000/api/v1/tasks/38843980-a9bf-11ec-a424-7304f152d108'
    ```

   [express]: <http://expressjs.com>
   [mysql2]: <https://github.com/sidorares/node-mysql2#readme>
   [node.js]: <http://nodejs.org>
