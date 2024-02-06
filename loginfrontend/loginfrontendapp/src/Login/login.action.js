import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const fetchLoginUser = createAsyncThunk(
    "get-login-users",
    async ({ body }, thunkArgs) => {
        console.log(body,'ggggggg');
        try {
            const response = await axios.get(
                `https://localhost:44300/api/FirstPage/login?userName=${body.Username}&password=${body.Password}`,
                body,
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );

            return response.data;
        } catch (error) {
            throw error.response.data;
        }
    }
);

export default fetchLoginUser;
