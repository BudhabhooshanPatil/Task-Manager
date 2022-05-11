const express = require("express")
const router = express.Router()
const tasks = require("../controllers/tasks")

router.route("/").get(tasks.getAllTasks).post(tasks.createNewTask)
router.route("/:id").get(tasks.getOneTasks).put(tasks.updateTask).delete(tasks.deleteTask)

module.exports = router