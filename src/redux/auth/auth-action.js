import { createAction } from '@reduxjs/toolkit';

const logInRequest = createAction('auth/logInRequest');
const logInSuccess = createAction('auth/logInSuccess');
const logInError = createAction('auth/logInError');

const authActions = { logInRequest, logInSuccess, logInError };

export default authActions;
