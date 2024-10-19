// src/components/TaskActions.jsx
import React, { useState } from 'react';
import { createTask, updateTask, deleteTask } from '../api/taskApi'; // Import your API functions

const TaskActions = ({ projectId }) => {
    const [taskName, setTaskName] = useState('');
    const [taskDescription, setTaskDescription] = useState('');

    const handleCreateTask = async () => {
        if (!taskName) return;
        await createTask(projectId, { name: taskName, description: taskDescription });
        setTaskName('');
        setTaskDescription('');
    };

    const handleDeleteTask = async (taskId) => {
        await deleteTask(taskId);
    };

    return (
        <div className="task-actions">
            <h2>Manage Tasks</h2>
            <input 
                type="text" 
                placeholder="Task Name" 
                value={taskName} 
                onChange={(e) => setTaskName(e.target.value)} 
            />
            <textarea 
                placeholder="Task Description" 
                value={taskDescription} 
                onChange={(e) => setTaskDescription(e.target.value)} 
            />
            <button onClick={handleCreateTask}>Add Task</button>
            {/* You can map existing tasks and provide an update/delete functionality here */}
        </div>
    );
};

export default TaskActions;
