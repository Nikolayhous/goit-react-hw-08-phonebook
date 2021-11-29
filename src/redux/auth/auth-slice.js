import { createSlice } from '@reduxjs/toolkit';
import {
    fetchRegister,
    fetchLogin,
    fetchLogOut,
    fetchCurrentUser,
} from './auth-operations';
import authAction from './auth-action';

const initialState = {
    user: { name: '', email: '' },
    token: '',
    isAuth: false,
    error: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
        [authAction.registerSuccess](state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isAuth = true;
        },

        [authAction.registerError](state, action) {
            state.error = action.payload.message;
        },
        [fetchLogin.fulfilled](state, { payload }) {
            state.user = payload.user;
            state.token = payload.token;
            state.isAuth = true;
        },
        [fetchLogOut.fulfilled](state, _) {
            state.user = { name: '', email: '' };
            state.token = '';
            state.isAuth = false;
        },
        [fetchCurrentUser.fulfilled](state, action) {
            state.user = action.payload;
            state.isAuth = true;
        },

        [authAction.logInSuccess]: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isAuth = true;
        },
        [authAction.logInError]: (state, action) => {
            state.error = action.payload;
        },
    },
});

export default authSlice.reducer;
