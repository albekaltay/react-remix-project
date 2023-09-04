import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "https://mocki.io/v1";

export const getProductsAsync = createAsyncThunk(
  "products/getProducts",
  async () => {
    const response = await axios(
      `${BASE_URL}/59906f35-d5d5-40f7-8d44-53fd26eb3a05`
    );
    return response.data;
  }
);

export const getSingleProductAsync = createAsyncThunk(
  "product/getSingleProduct",
  async (productId) => {
    const response = await axios(
      `${BASE_URL}/1a1fb542-22d1-4919-914a-750114879775?code=${productId}`
    );
    return response.data;
  }
);

export const getNextPageProductsAsync = createAsyncThunk(
  "nextPageProducts/getNextPageProducts",
  async (nextUrl) => {
    const response = await axios(nextUrl);
    return response.data;
  }
);

const initialState = {
  products: [],
  horizontalProducts: [],
  singleProduct: {},
  getProductsIsLoading: true,
  getSingleProductIsLoading: true,
  nextUrl: "",
  currentPage: 1,
};

const productsSlice = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {
    updateCurrentPage(state, action) {
      const { type } = action.payload;
      if (type === "INCREASE") {
        state.currentPage = state.currentPage + 1;
      } else {
        state.currentPage = state.currentPage - 1;
      }
    },
  },
  extraReducers: {
    [getProductsAsync.pending]: (state) => {
      state.getProductsIsLoading = true;
    },
    [getProductsAsync.fulfilled]: (state, action) => {
      const { products, horizontalProducts, nextUrl } = action.payload.result;
      state.products = [products];
      state.horizontalProducts = horizontalProducts;
      state.getProductsIsLoading = false;
      state.nextUrl = nextUrl;
    },
    [getSingleProductAsync.pending]: (state) => {
      state.getSingleProductIsLoading = true;
    },
    [getSingleProductAsync.fulfilled]: (state, action) => {
      const { result } = action.payload;
      state.singleProduct = result;
      state.getSingleProductIsLoading = false;
    },
    [getNextPageProductsAsync.pending]: (state) => {
      state.getProductsIsLoading = true;
    },
    [getNextPageProductsAsync.fulfilled]: (state, action) => {
      const { products, nextUrl } = action.payload.result;
      state.products = [...state.products, products];
      state.getProductsIsLoading = false;
      if (nextUrl) {
        state.nextUrl = nextUrl;
      } else {
        state.nextUrl = "";
      }
    },
  },
});

export const { updateCurrentPage } = productsSlice.actions;
export default productsSlice.reducer;
