import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const fetchRegisterUser = createAsyncThunk(
    "get-register-users",
    async ({ body }, thunkArgs) => {
        try {
            const response = await axios.post(
                'https://localhost:44300/api/FirstPage/create',
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

export default fetchRegisterUser;
