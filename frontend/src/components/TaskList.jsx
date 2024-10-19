// client/src/components/TaskList.jsx
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTasks } from '../redux/reducers/TaskReducer'; // Make sure this action is defined
import TaskItem from './TaskItem';

const TaskList = () => {
    const dispatch = useDispatch();
    const tasks = useSelector((state) => state.tasks); // Adjust according to your Redux structure

    useEffect(() => {
        dispatch(fetchTasks()); // Fetch tasks when the component mounts
    }, [dispatch]);

    // Ensure tasks is an array before mapping
    if (!Array.isArray(tasks)) {
        return <div>Loading...</div>; // Handle loading state or error state
    }

    return (
        <div>
            {tasks.length === 0 ? (
                <p>No tasks available.</p>
            ) : (
                tasks.map((task) => <TaskItem key={task._id} task={task} />)
            )}
        </div>
    );
};

export default TaskList;
