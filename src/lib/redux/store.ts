import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cartSlice";

// 1. Import Redux Persist
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

// 2. Configuration
const persistConfig = {
  key: "pharmacare-cart",
  storage,
};

// 3. Create the "Persisted" Reducer
const persistedCartReducer = persistReducer(persistConfig, cartReducer);

export const store = configureStore({
  reducer: {
    // 4. Use the persisted reducer instead of the normal one
    cart: persistedCartReducer,
  },
  // 5. Ignore specific warnings that Redux Persist creates
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }),
});

// 6. Export the "Persistor" (The tool that pauses the app until data loads)
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
