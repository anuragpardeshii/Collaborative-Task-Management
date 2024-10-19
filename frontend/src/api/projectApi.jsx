// src/api/projectApi.js
import axios from 'axios';

// Create a new project
export const createProject = async (projectData) => {
    try {
        const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/projects`, projectData);
        return response.data;
    } catch (error) {
        console.error('Error creating project:', error);
        throw error; // Propagate the error
    }
};

// Get all projects
export const getProjects = async () => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/projects`);
        return response.data;
    } catch (error) {
        console.error('Error fetching projects:', error);
        throw error; // Propagate the error
    }
};
