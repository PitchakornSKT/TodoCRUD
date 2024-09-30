import React, { useState } from 'react';
import { Button, TextField, Box } from '@mui/material';
import axios from 'axios';

const TaskForm = ({ onTaskCreated }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [dueDate, setDueDate] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newTask = { title, description, status: 'pending', dueDate };
        await axios.post('http://localhost:5000/api/tasks', newTask);
        onTaskCreated();
        setTitle('');
        setDescription('');
        setDueDate('');
    };

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ mb: 4 }}>
            <TextField
                fullWidth
                label="ชื่องาน"
                variant="outlined"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                sx={{ mb: 2 }}
            />
            <TextField
                fullWidth
                label="รายละเอียด"
                variant="outlined"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                sx={{ mb: 2 }}
            />
            <TextField
                fullWidth
                label="Due Date"
                type="date"
                variant="outlined"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                InputLabelProps={{
                    shrink: true,
                }}
                sx={{ mb: 2 }}
            />
            <Button type="submit" variant="contained" color="primary">
                Create Task
            </Button>
        </Box>
    );
};

export default TaskForm;
