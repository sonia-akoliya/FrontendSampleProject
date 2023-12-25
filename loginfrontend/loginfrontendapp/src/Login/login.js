import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { selectLoginUser } from './login.selector';
import { fetchLoginUser } from './login.action';
import { actions as loginActions } from './login.reducer';

const { setLoginUser } =
    loginActions;

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const selectedLoginUser = useSelector(selectLoginUser);
    console.log(selectedLoginUser, 'selectedLoginUserselectedLoginUser');
    const handleLogin = async () => {
        try {
            const queryFilter = {
                "Username": username,
                "Password": password
            }
            dispatch(fetchLoginUser({ body: queryFilter }));  // api calling
            //dispatch(setLoginUser(queryFilter));  // setting value by reducer
             navigate('/welcome');
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
