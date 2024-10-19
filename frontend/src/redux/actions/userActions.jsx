// src/components/UserActions.jsx
import React, { useState, useEffect } from 'react';
import { getUsers, tagUserToTask, removeUserFromTask } from '../api/userApi'; // Import your API functions

const UserActions = ({ taskId }) => {
    const [users, setUsers] = useState([]);
    const [selectedUserId, setSelectedUserId] = useState('');

    useEffect(() => {
        const fetchUsers = async () => {
            const fetchedUsers = await getUsers(); // Fetch users from API
            setUsers(fetchedUsers);
        };

        fetchUsers();
    }, []);

    const handleTagUser = async () => {
        if (!selectedUserId) return;
        await tagUserToTask(taskId, selectedUserId);
        setSelectedUserId('');
    };

    const handleRemoveUser = async (userId) => {
        await removeUserFromTask(taskId, userId);
    };

    return (
        <div className="user-actions">
            <h2>Manage Users</h2>
            <select value={selectedUserId} onChange={(e) => setSelectedUserId(e.target.value)}>
                <option value="">Select User</option>
                {users.map((user) => (
                    <option key={user._id} value={user._id}>
                        {user.name}
                    </option>
                ))}
            </select>
            <button onClick={handleTagUser}>Tag User</button>
            {/* List users assigned to the task and provide a remove button */}
        </div>
    );
};

export default UserActions;
