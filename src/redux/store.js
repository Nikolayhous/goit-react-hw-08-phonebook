import { configureStore } from '@reduxjs/toolkit';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import contactReducer from './phonebook/reducers';
import authSlice from './auth/auth-slice';

const authPersistConfig = {
    key: 'auth',
    storage,
    // blacklist: ['token'], не допускать в локалсторедж
    whitelist: ['token'], //--допускать в локалторедж
};

export const store = configureStore({
    reducer: {
        contacts: contactReducer,
        auth: persistReducer(authPersistConfig, authSlice),
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                ],
            },
        }),
    devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
