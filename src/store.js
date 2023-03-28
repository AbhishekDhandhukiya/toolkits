import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./pages/slices/userSlice";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";

const persistConfig = {
  key: "root",
  storage,
};

const persist = persistReducer(persistConfig, userSlice);

const store = configureStore({
  reducer: {
    users: persist,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
