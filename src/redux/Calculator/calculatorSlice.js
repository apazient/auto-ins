import { createSlice } from "@reduxjs/toolkit";
import {
  autoByNumber,
  chooseVclTariffDGO,
  loginThunk,
  osagoByDn,
  osagoByParams,
} from "./operations";

const initialState = {
  tariffPolicyChoose: null,
  tariffVcl: null,
  autoByNumber: [],
  allAutoByNumber: {},
  stateNumber: "",
  error: "",
  user: null,
};

export const calculatorSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    setStateNumber: (state, { payload }) => {
      state.stateNumber = payload;
    },
    setAutoByNumber: (state, { payload }) => {
      state.autoByNumber = payload;
    },
    setTariffPolicyDn: (state, { payload }) => {
      state.tariffPolicyDn = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginThunk.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoading = false;
      })
      .addCase(osagoByParams.fulfilled, (state, { payload }) => {
        state.tariffPolicyChoose = payload;
      })
      .addCase(osagoByParams.rejected, (state, { payload }) => {
        state.error = payload;
      })
      .addCase(osagoByParams.pending, (state, { payload }) => {
        state.error = payload;
      })

      .addCase(osagoByDn.fulfilled, (state, { payload }) => {
        state.tariffPolicyChoose = payload;
      })
      .addCase(osagoByDn.rejected, (state, { payload }) => {
        state.error = payload;
      })
      .addCase(osagoByDn.pending, (state, { payload }) => {
        state.error = payload;
      })
      .addCase(autoByNumber.fulfilled, (state, { payload }) => {
        const { bodyNumber, year, modelText } = payload;
        state.autoByNumber = [bodyNumber, year, modelText];
        state.allAutoByNumber = payload;
      })

      .addCase(chooseVclTariffDGO.fulfilled, (state, { payload }) => {
        state.tariffVcl = payload;
      })
      .addCase(chooseVclTariffDGO.rejected, (state, { payload }) => {
        state.error = payload;
      })
      .addCase(chooseVclTariffDGO.pending, (state, { payload }) => {
        state.error = payload;
      });
  },
});

export const { setStateNumber, setAutoByNumber, setTariffPolicyDn } =
  calculatorSlice.actions;
export const calculatorReducer = calculatorSlice.reducer;
