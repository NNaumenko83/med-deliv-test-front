import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialState = { shop: '' };

export const shopSlice = createSlice({
    name: 'shop',
    initialState,
    reducers: {
        addShop: (state, action) => {
            console.log('action.payload:', action.payload);
            state.shop = action.payload;
            return state;
        },
        deleteShop: state => {
            state = initialState;
            return state;
        },
    },
});

const persistConfig = {
    key: 'shop',
    storage,
};

export const { addShop, deleteShop } = shopSlice.actions;

export const selectShop = state => {
    return state.shop;
};

const shopReducer = shopSlice.reducer;

export const persistedShopReducer = persistReducer(persistConfig, shopReducer);
