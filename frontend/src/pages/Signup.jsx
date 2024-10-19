import React, { useState } from 'react';
import axios from 'axios';

const Signup = () => {
    const [user, setUser] = useState({ username: '', password: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('/api/users/signup', user);
        // Redirect to login
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={user.username}
                onChange={(e) => setUser({ ...user, username: e.target.value })}
                placeholder="Username"
                required
            />
            <input
                type="password"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                placeholder="Password"
                required
            />
            <button type="submit">Signup</button>
        </form>
    );
};

export default Signup;
