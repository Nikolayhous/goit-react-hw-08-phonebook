import { createSlice } from '@reduxjs/toolkit';
import { fetchRegister, fetchLogin, fetchLogOut } from './auth-operations';

const initialState = {
    user: { name: '', email: '' },
    token: '',
    isGetCurrentUser: false,
    isAuth: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
        [fetchRegister.fulfilled](state, { payload }) {
            state.user = payload.user;
            state.token = payload.token;
            state.isAuth = true;
        },
        [fetchLogin.fulfilled](state, { payload }) {
            state.user = payload.user;
            state.token = payload.token;
            state.isAuth = true;
        },
        [fetchLogOut.fulfilled](state, { payload }) {
            state.user = { name: '', email: '' };
            state.token = '';
            state.isAuth = false;
        },
    },
});

export default authSlice.reducer;
