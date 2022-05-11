const express = require("express")
const logger = require('morgan');
const tasks = require("./app/routes/tasks")
const connectDB = require("./app/config/db_connection").connect

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
const start = async () => {
    try {
        await connectDB()
        // set port, listen for requests
        app.listen(port, () => {
            console.log(`server is running on port ${port}.`);
        });
    } catch (error) {
        console.log(`error ${error}...`)
    }
}

start();