const express = require("express");
const taskController = require("../controllers/taskController");

const router = express.Router();

router.route("/")
    .get(taskController.getAllTasks)
    .post(taskController.createTask);

router.route("/:id")
    .get(taskController.getOneTask)
    .patch(taskController.updateTask)
    .delete(taskController.deleteTask);

module.exports = router;
