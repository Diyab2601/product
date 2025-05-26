import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./product/productSlice";
import dashboardReducer from "./dashboard/dashboardSlice";
import userReducer from "./user/userSlice";

import { combineReducers } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";

let persistConfig = {
  key: "root",
  storage,
};

let rootReducer = combineReducers({
  product: productReducer,
  dashboard: dashboardReducer,
  user: userReducer,
});

let persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});
