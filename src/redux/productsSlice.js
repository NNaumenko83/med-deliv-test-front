import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialState = { products: [] };

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products.push({ ...action.payload, qty: 1 });
    },

    deleteProduct: (state, action) => {
      const productIndex = state.products.findIndex(product => {
        return product.id === action.payload;
      });

      state.products.splice(productIndex, 1);
    },

    changeAmount: (state, action) => {
      const productIndex = state.products.findIndex(product => {
        return product.id === action.payload.id;
      });

      if (productIndex >= 0) {
        state.products[productIndex].qty = Number(action.payload.qty);
      }
    },

    resetProducts: (state, action) => {
      state = initialState;
      return state;
    },
  },
});

const persistConfig = {
  key: 'products',
  storage,
};

export const { addProduct, deleteProduct, changeAmount, resetProducts } =
  productsSlice.actions;

export const selectProducts = state => state.products.products;

export const selectTotalValue = state => {
  const total = state.products.products.reduce(
    (acc, product) => (acc += product.qty * product.price),
    0
  );
  return total;
};

const productsReducer = productsSlice.reducer;

export const persistedProductsReducer = persistReducer(
  persistConfig,
  productsReducer
);
