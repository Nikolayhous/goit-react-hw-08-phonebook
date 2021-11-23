import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herouapp.com';

export const register = createAsyncThunk('auth/register', async credentials => {
    try {
        const { data } = await axios.post('users/signup', credentials);
        console.log(data);
        return data;
    } catch (error) {
        console.log(error.message);
    }
});

export const login = createAsyncThunk('auth/login', async credentials => {
    try {
        const { data } = await axios.post('users/login', credentials);
        console.log(data);
        return data;
    } catch (error) {
        console.log(error.message);
    }
});
