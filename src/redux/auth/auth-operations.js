import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';
import authActions from './auth-action';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
        axios.defaults.headers.common.Authorization = '';
    },
};

export const fetchRegister = userData => dispatch => {
    dispatch(authActions.logInRequest());

    axios
        .post('/users/signup', userData)
        .then(response => {
            token.set(response.data.token);
            dispatch(authActions.registerSuccess(response.data));
        })
        .catch(error => {
            dispatch(authActions.registerError(error.message));
            toast.error(error.message);
        });
};

// export const fetchRegister = createAsyncThunk(
//     'auth/register',
//     async (credentials, { rejectWithValue }) => {
//         try {
//             const { data } = await axios.post('/users/signup', credentials);
//             token.set(data.token);
//             return data;
//         } catch (error) {
//             rejectWithValue(error.message);
//         }
//     },
// );

// export const fetchLogin = createAsyncThunk(
//     'auth/login',
//     async (credentials, { rejectWidthValue }) => {
//         try {
//             const { data } = await axios.post('/users/login', credentials);
//             token.set(data.token);
//             return data;
//         } catch (error) {
//             rejectWidthValue(error.message);
//         }
//     },
// );

export const fetchLogin = userData => dispatch => {
    dispatch(authActions.logInRequest());

    axios
        .post('/users/login', userData)
        .then(response => {
            token.set(response.data.token);
            dispatch(authActions.logInSuccess(response.data));
        })
        .catch(error => {
            dispatch(authActions.logInError(error.message));
            toast.error(error.message);
        });
};

export const fetchLogOut = createAsyncThunk(
    'auth/logout',
    async (_, { rejectWithValue }) => {
        try {
            await axios.post('/users/logout');
            token.unset();
        } catch (error) {
            rejectWithValue(error.message);
        }
    },
);

export const fetchCurrentUser = createAsyncThunk(
    'auth/refresh',
    async (_, { rejectWithValue, getState }) => {
        const state = getState();
        const persistToken = state.auth.token;
        if (!persistToken) {
            return rejectWithValue();
        }
        token.set(persistToken);
        try {
            const { data } = await axios.get('/users/current');
            return data;
        } catch (error) {
            rejectWithValue(error.message);
        }
    },
);
