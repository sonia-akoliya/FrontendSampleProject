import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { selectRegisterUser } from './register.selector';
import { fetchRegisterUser } from './register.action';
import { actions as registerActions } from './register.reducer';

const { setRegisterUser } =
    registerActions;

const Register = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async () => {
        try {
            const queryFilter = {
                "Username": username,
                "Password": password
            }
            dispatch(fetchRegisterUser({ body: queryFilter }));  // api calling
            //dispatch(setRegisterUser(queryFilter));  // setting value by reducer
        } catch (error) {
            console.error('POST request failed', error);
        }
    };

    const handleLogin = () => {
        navigate('/');
    };

    return (
        <div>
            <h2>Register</h2>
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
            <button onClick={handleRegister}>Submit</button>
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default Register;
