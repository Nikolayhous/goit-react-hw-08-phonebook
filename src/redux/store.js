import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
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

const middleware = [
    ...getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
];

export const store = configureStore({
    reducer: {
        contacts: contactReducer,
        auth: persistReducer(authPersistConfig, authSlice),
    },
    middleware,
    devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
