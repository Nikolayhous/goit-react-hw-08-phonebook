import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// axios.defaults.baseURl = 'https://619402530b39a70017b156c1.mockapi.io/api/v1';
// const BASE_URl = 'https://619402530b39a70017b156c1.mockapi.io/api/v1';
axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
        axios.defaults.headers.common.Authorization = '';
    },
};

export const addContact = createAsyncThunk(
    'contacts/add',
    async (contact, { rejectWidthValue }) => {
        try {
            const { data } = await axios.post('/contacts', contact);
            token.set(data.token);
            return data;
        } catch (error) {
            rejectWidthValue(error.message);
        }
    },
);

export const fetchContact = createAsyncThunk(
    'contacts/fetch',
    async (_, { rejectWidthValue }) => {
        try {
            const { data } = await axios.get('/contacts');
            token.set(data.token);
            return data;
        } catch (error) {
            rejectWidthValue(error.message);
        }
    },
);

export const deleteContact = createAsyncThunk(
    'contacts/delete',
    async (contactId, { rejectWidthValue }) => {
        try {
            const {
                data: { id },
            } = await axios.delete(`/contacts/${contactId}`);
            token.unset();
            return id;
        } catch (error) {
            rejectWidthValue(error.message);
        }
    },
);
