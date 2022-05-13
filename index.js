const express = require("express")
const logger = require('morgan');
const tasks = require("./app/routes/task.route")
const dbConnection = require("./app/config/db.connection").connect

// app
const app = express();

//middleware
app.use(express.json());

// logs requests to the console.
app.use(logger('dev'));

// routes
app.use("/api/v1/tasks", tasks);

// port number
const port = 3000;

// start
const start = () => {
    dbConnection(error => {
        if (error) {
            console.log(`database connection error => ${error}`)
        } else {
            app.listen(port, () => {
                console.log(`server is running on port => ${port}.`);
            });
        }
    })
}

start();