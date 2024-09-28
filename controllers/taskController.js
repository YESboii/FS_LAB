const Task = require("../models/taskModel");

exports.getAllTasks = async (req, res, next) => {
    try {
        const tasks = await Task.find();
        res.status(200).json({
            status: "success",
            count: tasks.length,
            data: {
                tasks
            }
        });
    } catch (e) {
        res.status(400).json({
            status: "error",
            message: "Unable to retrieve the task list. Please try again later."
        });
    }
};

exports.getOneTask = async (req, res, next) => {
    try {
        const tasks = await Task.findById(req.params.id);
        res.status(200).json({
            status: "success",
            data: {
                tasks
            }
        });
    } catch (e) {
        res.status(404).json({
            status: "error",
            message: `Task with ID ${req.params.id} not found.`
        });
    }
};

exports.createTask = async (req, res, next) => {
    try {
        const tasks = await Task.create(req.body);
        res.status(201).json({
            status: "success",
            data: {
                tasks
            }
        });
    } catch (e) {
        res.status(400).json({
            status: "error",
            message: "Failed to create the task. Ensure the data is valid and try again."
        });
    }
};

exports.updateTask = async (req, res, next) => {
    try {
        const tasks = await Task.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        if (!tasks) {
            return res.status(404).json({
                status: "error",
                message: `Task with ID ${req.params.id} not found.`
            });
        }
        res.status(200).json({
            status: "success",
            data: {
                tasks
            }
        });
    } catch (e) {
        res.status(400).json({
            status: "error",
            message: "Failed to update the task. Ensure the data is valid."
        });
    }
};

exports.deleteTask = async (req, res, next) => {
    try {
        const tasks = await Task.findByIdAndDelete(req.params.id);
        if (!tasks) {
            return res.status(404).json({
                status: "error",
                message: `Task with ID ${req.params.id} not found.`
            });
        }
        res.status(204).json({
            status: "success",
            message: "Task deleted successfully."
        });
    } catch (e) {
        res.status(400).json({
            status: "error",
            message: "Failed to delete the task."
        });
    }
};
