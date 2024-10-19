// client/src/components/Dashboard.jsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks } from '../redux/reducers/TaskReducer';
import TaskList from './TaskList';
import CreateProject from './CreateProject';
import './Dashboard.css';

const Dashboard = () => {
    const dispatch = useDispatch();
    const tasks = useSelector((state) => state.tasks);

    useEffect(() => {
        dispatch(fetchTasks());
    }, [dispatch]);

    return (
        <div className="dashboard">
            <h1>Dashboard</h1>
            <CreateProject />
            <h2>Your Tasks</h2>
            <TaskList tasks={tasks} />
        </div>
    );
};

export default Dashboard;
