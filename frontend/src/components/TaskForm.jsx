import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/reducers/TaskReducer';
import axios from 'axios';

const TaskForm = () => {
    const dispatch = useDispatch();
    const [task, setTask] = useState({ title: '', description: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await axios.post('/api/tasks', task);
        dispatch(addTask(response.data));
        setTask({ title: '', description: '' });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={task.title}
                onChange={(e) => setTask({ ...task, title: e.target.value })}
                placeholder="Task Title"
                required
            />
            <textarea
                value={task.description}
                onChange={(e) => setTask({ ...task, description: e.target.value })}
                placeholder="Task Description"
            />
            <button type="submit">Add Task</button>
        </form>
    );
};

export default TaskForm;
