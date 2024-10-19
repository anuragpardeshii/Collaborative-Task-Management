// client/src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import TaskForm from './components/TaskForm';
// Import other components like Login, Project, etc.

const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/tasks" element={<TaskForm />} />
                {/* Add other routes here */}
            </Routes>
        </div>
    );
};

export default App;
