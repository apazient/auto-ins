import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  isModalErrorOpen: false,
  globalCustomerData: null,
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setIsLoading: (state, { payload }) => {
      state.isLoading = payload;
    },
    setGlobalCustomerData: (state, { payload }) => {
      state.globalCustomerData = { ...state.globalCustomerData, ...payload };
    },
    setIsModalErrorOpen: (state, { payload }) => {
      state.isModalErrorOpen = payload;
    },
  },
});

export const { setIsModalErrorOpen, setIsLoading, setGlobalCustomerData } =
  globalSlice.actions;
export const globalReducer = globalSlice.reducer;
