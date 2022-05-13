const connection = require("../config/db.connection").connection;
const uuid = require('uuid');
const Task = require('../models/task.model');

// get all task
const getAllTasks = async function (request, response) {
    connection.query(Task.select, function (error, results, fields) {
        if (error) {
            return response.status(400).send({ 'error': error.message })
        } else {
            const tasks = results.map(function (element) {
                const task = new Task(element.task_uuid, element.task_description, element.task_timestamp, element.task_complete);
                return task
            });
            return response.status(200).send({ 'data': { 'tasks': tasks } })
        }
    });
}

// create new task
const createNewTask = async function (request, response) {
    if (request.body.description) {
        // time for task
        let date = new Date();
        let timestamp = date.getTime();

        // obj task
        const task = new Task(uuid.v1(), request.body.description, timestamp, false);

        // sql plain text query
        let sql = Task.create

        // data to bind
        let data = [task]

        connection.query(sql, data, function (error, results, fields) {
            if (error) {
                return response.status(400).send({ 'error': error.message })
            } else {
                if (results.affectedRows > 0) {
                    return response.status(201).send({ 'data': { 'task': task } })
                } else {
                    return response.status(400).send({ 'error': 'something went wrong...!' })
                }
            }
        });

    } else {
        return response.status(400).send({ 'error': 'task description not found' })
    }
}

// // get one task
const getOneTasks = function (request, response) {
    if (request.params.id) {
        const uuid = request.params.id
        connection.query(Task.find, [uuid], async function (error, results, fields) {
            if (error) {
                return response.status(400).send({ 'error': error.message })
            } else {
                if (results.length > 0) {
                    const tasks = results.map(function (element) {
                        const task = new Task(element.task_uuid, element.task_description, element.task_timestamp, element.task_complete);
                        return task
                    });
                    return response.status(200).send({ 'data': { 'tasks': tasks } })
                } else {
                    return response.status(400).send({ 'data': { 'tasks': [] } })
                }
            }
        });
    } else {
        return response.status(400).send({ 'error': 'task uuid not found' })
    }
}

// //update one task
const updateTask = function (request, response) {
    if (request.params.id) {
        const uuid = request.params.id
        const description = request.body.description
        const complete = request.body.complete

        let sql = Task.update
        let data = [description, complete, uuid];
        connection.query(sql, data, async function (error, results, fields) {
            if (error) {
                return response.status(400).send({ 'error': error.message })
            } else {
                if (results.affectedRows > 0) {
                    connection.query(Task.find, [uuid], async function (error, results, fields) {
                        if (error) {
                            return response.status(400).send(`${error.code}`)
                        }
                        if (results.length > 0) {
                            const tasks = results.map(function (element) {
                                const task = new Task(element.task_uuid, element.task_description, element.task_timestamp, element.task_complete);
                                return task
                            });
                            return response.status(200).send({ 'data': { 'tasks': tasks } })
                        } else {
                            return response.status(400).send({ 'data': { 'tasks': [] } })
                        }
                    });
                }
            }
        });
    } else {
        return response.status(400).send({ 'error': 'task uuid not found' })
    }
}

// // delete one task
const deleteTask = function (request, response) {
    if (request.params.id) {
        const uuid = request.params.id
        let sql = Task.delete
        connection.query(sql, [uuid], async function (error, results, fields) {
            if (error) {
                return response.status(400).send(`${error.message}`)
            } else {
                if (results.affectedRows != 0) {
                    const task = new Task(uuid);
                    return response.status(201).send({ 'data': { 'task': task } })
                } else {
                    return response.status(400).send({ 'error': 'something went wrong...!' })
                }
            }
        });
    }
}

module.exports = {
    getAllTasks,
    createNewTask,
    getOneTasks,
    updateTask,
    deleteTask,
}