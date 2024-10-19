// client/src/components/TaskItem.jsx
import React from 'react';

const TaskItem = ({ task }) => {
    return (
        <div className="task-item">
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            {/* Additional task details and actions (like edit, delete) can go here */}
        </div>
    );
};

export default TaskItem;
