import { createAction } from '@reduxjs/toolkit';

const registerRequest = createAction('auth/registerRequest');
const registerSuccess = createAction('auth/registerSuccess');
const registerError = createAction('auth/registerError');

const logInRequest = createAction('auth/logInRequest');
const logInSuccess = createAction('auth/logInSuccess');
const logInError = createAction('auth/logInError');

const authActions = {
    registerRequest,
    registerSuccess,
    registerError,
    logInRequest,
    logInSuccess,
    logInError,
};

export default authActions;
