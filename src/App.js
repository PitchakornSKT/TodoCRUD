import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { Container, Typography } from '@mui/material';

const App = () => {
    const [tasks, setTasks] = useState([]);

    const fetchTasks = async () => {
        const response = await axios.get('http://localhost:5000/api/tasks');
        setTasks(response.data);
    };

    const handleTaskCreated = () => {
        fetchTasks();
    };

    const handleUpdateTask = async (id, status) => {
        await axios.patch(`http://localhost:5000/api/tasks/${id}`, { status });
        fetchTasks();
    };

    const handleDeleteTask = async (id) => {
        await axios.delete(`http://localhost:5000/api/tasks/${id}`);
        fetchTasks();
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    return (
        <Container maxWidth="sm">
            <Typography variant="h4" align="center" sx={{ my: 4 }}>
              Work recording app
            </Typography>
            <TaskForm onTaskCreated={handleTaskCreated} />
            <TaskList tasks={tasks} onUpdate={handleUpdateTask} onDelete={handleDeleteTask} />
        </Container>
    );
};

export default App;
