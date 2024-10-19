// client/src/components/CreateProject.jsx
import React, { useState } from 'react';
import axios from 'axios';

const CreateProject = () => {
    const [projectName, setProjectName] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Handle project creation logic here
        console.log("Project Created: ", projectName);
        setProjectName('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
                placeholder="Project Name"
                required
            />
            <button type="submit">Create Project</button>
        </form>
    );
};

export default CreateProject;
