import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchProducts = () => async (dispatch) => {
  try {
    const response = await axios.get(
      "https://api.freeapi.app/api/v1/public/randomproducts?page=1&limit=10&inc=category%252Cprice% 252Cthumbnail%252Cimages%252Ctitle%252Cid&query=mens-watches"
    );
    const products = response.data.data.data;
    dispatch(setProducts(products)); // <-- Dispatch the data to Redux store
  } catch (error) {
    console.error("Failed to fetch products:", error);
  }
};


const initialState = {
  productss: [],
  selectedProduct: null,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  selectedProduct: {},
  reducers: {
    setProducts: (state, action) => {
      state.productss = action.payload;
    },
    setSelectedProduct: (state, action) => {
      state.selectedProduct = action.payload;
    },
  },
});




// Action creators are generated for each case reducer function
export const { setProducts, setSelectedProduct } = productSlice.actions;

export default productSlice.reducer;
