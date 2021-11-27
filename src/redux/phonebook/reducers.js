import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { addContact, fetchContacts, deleteContact } from './operations';
import filterContact from './actions';

const contactList = createReducer([], {
    [fetchContacts.fulfilled]: (_, { payload }) => payload,
    [addContact.fulfilled]: (state, { payload }) => [...state, payload],
    [deleteContact.fulfilled]: (state, action) => {
        console.log(action);
        return state.filter(contact => contact.id !== action.payload);
    },
});

const filter = createReducer('', {
    [filterContact]: (_, { payload }) => payload,
});

export default combineReducers({ contactList, filter });
