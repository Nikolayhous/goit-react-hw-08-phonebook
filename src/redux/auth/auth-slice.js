import { createSlice } from '@reduxjs/toolkit';
import { register } from './auth-operations';

const initialState = {
    user: { name: null, email: null },
    token: null,
    isAuth: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,

    extraReducers: {
        [register.fulfilled](state, action) {
            state.user = action.payload.name;
            state.token = action.payload.token;
            state.isAuth = true;
        },
    },
});

export default authSlice.reducer;
