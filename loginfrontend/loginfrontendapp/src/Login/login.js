import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import fetchLoginUser from './login.action';

const Login = () => {
    const dispatch = useDispatch();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const queryFilter = {
                "Username": username,
                "Password": password
            }
            dispatch(fetchLoginUser({ body: queryFilter }));
        } catch (error) {
            console.error('POST request failed', error);
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default Login;
