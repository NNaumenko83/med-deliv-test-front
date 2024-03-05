import { configureStore } from "@reduxjs/toolkit";
import { persistedShopReducer } from "./shopSlice";
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { persistedProductsReducer } from "./productsSlice";

export const store = configureStore({
  reducer: {
    products: persistedProductsReducer,
    shop: persistedShopReducer,
  },

  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  ],
});

export const persistor = persistStore(store);
