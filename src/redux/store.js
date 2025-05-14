import { configureStore } from '@reduxjs/toolkit'
import productReducer from "./product/productSlice"
import userReducer from "./user/userSlice"



export const store = configureStore({
   reducer: {
    product: productReducer,
    user: userReducer
  },
})