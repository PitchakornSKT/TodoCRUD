const Task = require('../models/task');

// Create new task
const createTask = async (req, res) => {
    const { title, description, status, dueDate } = req.body;
    try {
        const newTask = new Task({ title, description, status, dueDate });
        await newTask.save();
        res.status(201).json(newTask);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all tasks
const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update task status
const updateTask = async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;
    try {
        const updatedTask = await Task.findByIdAndUpdate(id, { status }, { new: true });
        res.status(200).json(updatedTask);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete task
const deleteTask = async (req, res) => {
    const { id } = req.params;
    try {
        await Task.findByIdAndDelete(id);
        res.status(200).json({ message: 'Task deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { createTask, getTasks, updateTask, deleteTask };
