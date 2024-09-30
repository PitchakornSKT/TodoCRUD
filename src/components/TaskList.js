import React from 'react';
import { List, ListItem, ListItemText, ListItemSecondaryAction, Button } from '@mui/material';

const TaskList = ({ tasks, onUpdate, onDelete }) => {
    return (
        <List>
            {tasks.map((task) => (
                <ListItem key={task._id} divider>
                    <ListItemText
                        primary={task.title}
                        secondary={task.description}
                        sx={{ textDecoration: task.status === 'completed' ? 'line-through' : 'none' }}
                    />
                    <ListItemSecondaryAction>
                        <Button
                            variant="outlined"
                            color={task.status === 'completed' ? 'secondary' : 'primary'}
                            onClick={() => onUpdate(task._id, task.status === 'completed' ? 'pending' : 'completed')}
                        >
                            {task.status === 'completed' ? 'ยกเลิกการส่ง' : 'ทำงานเสร็จแล้ว'}
                        </Button>
                        <Button
                            variant="outlined"
                            color="error"
                            onClick={() => onDelete(task._id)}
                        >
                            ลบ
                        </Button>
                    </ListItemSecondaryAction>
                </ListItem>
            ))}
        </List>
    );
};

export default TaskList;
