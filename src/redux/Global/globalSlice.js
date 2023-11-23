import { createSlice } from "@reduxjs/toolkit";
import { contractSave } from "./operations";

const initialState = {
  isLoading: false,
  isModalErrorOpen: false,

  // globalCustomerData: null,
  // forms: {},
  isContractOSAGO: false,
  isContractDGO: false,
  globalCustomerData: {},
  paramsFromUrl: null,
  homeAddress: { label: "", value: "" },
  error: null,
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
    // setGlobalCustomerDataCustomer: (state, { payload }) => {
    //   state.globalCustomerData.customer = {
    //     ...state.globalCustomerData.customer,
    //     ...payload,
    //   };
    // },
    // setFormData: (state, { payload }) => {
    //   state.forms = { ...state.forms, ...payload };
    // },

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
  },
  extraReducers: (builder) => {
    builder
      .addCase(contractSave.fulfilled, (state, _) => {
        state.isLoading = false;
      })
      .addCase(contractSave.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      })
      .addCase(contractSave.pending, (state, _) => {
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
} = globalSlice.actions;
export const globalReducer = globalSlice.reducer;
