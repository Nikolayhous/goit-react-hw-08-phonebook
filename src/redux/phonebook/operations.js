import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// axios.defaults.baseURl = 'https://619402530b39a70017b156c1.mockapi.io/api/v1';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const addContact = createAsyncThunk(
    'contacts/add',
    async (contact, { rejectWidthValue }) => {
        try {
            const { data } = await axios.post('/contacts', contact);
            return data;
        } catch (error) {
            rejectWidthValue(error.message);
        }
    },
);

export const fetchContacts = createAsyncThunk(
    'contacts/fetch',
    async (_, { rejectWidthValue }) => {
        try {
            const { data } = await axios.get('/contacts');
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
            const response = await axios.delete(`/contacts/${contactId}`);
            if (response.status === 200) {
                return contactId;
            } else {
                throw new Error({ message: 'error' });
            }
        } catch (error) {
            rejectWidthValue(error.message);
        }
    },
);
