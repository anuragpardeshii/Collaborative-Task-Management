import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSocket } from '../context/SocketContext';
import { setTasks, addTask, updateTask, deleteTask } from '../redux/reducers/TaskReducer';
import axios from 'axios';
import TaskForm from './TaskForm';

const TaskBoard = () => {
    const dispatch = useDispatch();
    const socket = useSocket();
    const tasks = useSelector((state) => state.tasks.tasks);

    useEffect(() => {
        const fetchTasks = async () => {
            const response = await axios.get('/api/tasks');
            dispatch(setTasks(response.data));
        };

        fetchTasks();

        socket.on('taskUpdate', (updatedTask) => {
            dispatch(updateTask(updatedTask));
        });

        return () => {
            socket.off('taskUpdate');
        };
    }, [dispatch, socket]);

    const handleTaskUpdate = async (task) => {
        const response = await axios.put(`/api/tasks/${task._id}`, task);
        socket.emit('taskUpdate', response.data);
    };

    const handleTaskDelete = async (taskId) => {
        await axios.delete(`/api/tasks/${taskId}`);
        dispatch(deleteTask(taskId));
    };

    return (
        <div>
            <h2>Task Board</h2>
            <TaskForm />
            <div>
                {tasks.map((task) => (
                    <div key={task._id}>
                        <h3>{task.title}</h3>
                        <p>{task.description}</p>
                        <button onClick={() => handleTaskUpdate(task)}>Update</button>
                        <button onClick={() => handleTaskDelete(task._id)}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TaskBoard;
