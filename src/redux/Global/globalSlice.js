import { createSlice } from "@reduxjs/toolkit";
import { contractSave } from "./operations";

const initialState = {
  isLoading: false,
  isModalErrorOpen: false,
  isContractOSAGO: false,
  isContractDGO: false,
  globalCustomerData: {},
  paramsFromUrl: null,
  homeAddress: { label: "", value: "" },
  error: "",
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
    setParamsFromUrl: (state, { payload }) => {
      state.paramsFromUrl = { ...state.payload, ...payload };
    },
    setHomeAddress: (state, { payload }) => {
      state.homeAddress = payload;
    },
    setIsContractOSAGO: (state, { payload }) => {
      state.isContractOSAGO = payload;
    },
    setIsContractDGO: (state, { payload }) => {
      state.isContractDGO = payload;
    },
    setGlobError: (state, { payload }) => {
      state.error = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(contractSave.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(contractSave.rejected, (state, { payload }) => {
        state.error = payload?.message;
        state.isLoading = false;
      })
      .addCase(contractSave.pending, (state) => {
        state.isLoading = true;
      });
  },
});

export const {
  setIsModalErrorOpen,
  setIsLoading,
  setGlobalCustomerData,
  setParamsFromUrl,
  setGlobalCustomerDataCustomer,
  setFormData,
  setHomeAddress,
  setIsContractOSAGO,
  setIsContractDGO,
  setGlobError,
} = globalSlice.actions;
export const globalReducer = globalSlice.reducer;
