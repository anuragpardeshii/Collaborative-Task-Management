// src/pages/Dashboard.jsx
import React, { useEffect, useState } from 'react';
import { getProjects } from '../api/projectApi';

const Dashboard = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const data = await getProjects();
                setProjects(data);
            } catch (error) {
                console.error('Failed to fetch projects:', error);
            }
        };

        fetchProjects();
    }, []);

    return (
        <div className="dashboard">
            <h1>Your Projects</h1>
            <ul>
                {projects.map(project => (
                    <li key={project._id}>
                        <h2>{project.name}</h2>
                        <p>{project.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Dashboard;
