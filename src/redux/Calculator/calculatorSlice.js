import { createSlice } from "@reduxjs/toolkit";
import {
  autoByNumber,
  chooseVclTariffDGO,
  osagoByDn,
  osagoByParams,
} from "./operations";

const initialState = {
  tariffPolicyChoose: null,
  tariffVcl: null,
  autoByNumber: [],
  allAutoByNumber:{},
  stateNumber: "",
};

export const globalSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    setStateNumber: (state, { payload }) => {
      state.stateNumber = payload;
    },
    setAutoByNumber: (state, { payload }) => {
      state.autoByNumber = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(osagoByParams.fulfilled, (state, { payload }) => {
        state.tariffPolicyChoose = payload;
      })
      .addCase(osagoByDn.fulfilled, (state, { payload }) => {
        state.tariffPolicyChoose = payload;
      })
      .addCase(autoByNumber.fulfilled, (state, { payload }) => {
        const { bodyNumber, year, modelText } = payload;
        state.autoByNumber = [bodyNumber, year, modelText];
        state.allAutoByNumber = payload;
      })
      .addCase(chooseVclTariffDGO.fulfilled, (state, { payload }) => {
        state.tariffVcl = payload;
      });
  },
});

export const { setStateNumber, setAutoByNumber } = globalSlice.actions;
export const calculatorReducer = globalSlice.reducer;
