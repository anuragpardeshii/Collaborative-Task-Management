import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSocket } from '../context/SocketContext';
import { setTasks, addTask, updateTask, deleteTask } from '../redux/reducers/TaskReducer';
import axios from 'axios';
import TaskForm from './TaskForm';

const TaskBoard = () => {
    const dispatch = useDispatch();
    const socket = useSocket(); // Get the socket from context
    const tasks = useSelector((state) => state.tasks.tasks);

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const response = await axios.get('/api/tasks');
                dispatch(setTasks(response.data));
            } catch (error) {
                console.error('Error fetching tasks:', error);
            }
        };

        fetchTasks();

        // Ensure socket is defined before adding the listener
        if (socket) {
            socket.on('taskUpdate', (updatedTask) => {
                dispatch(updateTask(updatedTask));
            });
        } else {
            console.error('Socket is not initialized');
        }

        return () => {
            // Clean up listener on unmount
            if (socket) {
                socket.off('taskUpdate');
            }
        };
    }, [dispatch, socket]);

    const handleTaskUpdate = async (task) => {
        try {
            const response = await axios.put(`/api/tasks/${task._id}`, task);
            socket.emit('taskUpdate', response.data);
        } catch (error) {
            console.error('Error updating task:', error);
        }
    };

    const handleTaskDelete = async (taskId) => {
        try {
            await axios.delete(`/api/tasks/${taskId}`);
            dispatch(deleteTask(taskId));
        } catch (error) {
            console.error('Error deleting task:', error);
        }
    };

    return (
        <div>
            <h2>Task Board</h2>
            <TaskForm />
            <div>
                {Array.isArray(tasks) && tasks.length > 0 ? (
                    tasks.map((task) => (
                        <div key={task._id}>
                            <h3>{task.title}</h3>
                            <p>{task.description}</p>
                            <button onClick={() => handleTaskUpdate(task)}>Update</button>
                            <button onClick={() => handleTaskDelete(task._id)}>Delete</button>
                        </div>
                    ))
                ) : (
                    <p>No tasks available</p> // Optional message for no tasks
                )}
            </div>
        </div>
    );    
};

export default TaskBoard;
