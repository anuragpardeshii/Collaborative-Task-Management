import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/reducers/userReducer';

const Login = () => {
    const dispatch = useDispatch();
    const [credentials, setCredentials] = useState({ username: '', password: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await axios.post('/api/users/login', credentials);
        localStorage.setItem('token', response.data.token);
        dispatch(setUser(response.data));
        // Redirect to dashboard
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={credentials.username}
                onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                placeholder="Username"
                required
            />
            <input
                type="password"
                value={credentials.password}
                onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                placeholder="Password"
                required
            />
            <button type="submit">Login</button>
        </form>
    );
};

export default Login;
