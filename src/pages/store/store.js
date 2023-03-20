import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
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
});

export default store;
