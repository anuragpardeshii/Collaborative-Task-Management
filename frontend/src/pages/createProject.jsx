// src/pages/CreateProject.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createProject } from '../api/projectApi'; // Import your API function

const CreateProject = () => {
    const [projectName, setProjectName] = useState('');
    const [projectDescription, setProjectDescription] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createProject({ name: projectName, description: projectDescription });
            navigate('/dashboard'); // Redirect to dashboard after successful creation
        } catch (error) {
            console.error("Error creating project:", error);
            // Handle error (e.g., show notification)
        }
    };

    return (
        <div className="create-project">
            <h1>Create New Project</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="projectName">Project Name</label>
                    <input
                        type="text"
                        id="projectName"
                        value={projectName}
                        onChange={(e) => setProjectName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="projectDescription">Project Description</label>
                    <textarea
                        id="projectDescription"
                        value={projectDescription}
                        onChange={(e) => setProjectDescription(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Create Project</button>
            </form>
        </div>
    );
};

export default CreateProject;
