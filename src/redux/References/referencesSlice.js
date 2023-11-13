import { createSlice } from "@reduxjs/toolkit";
import {
  allAutoMakers,
  allAutoModelByMaker,
  autoByMakerAndModel,
  autoByNumber,
} from "./operations";

const initialState = {
  autoMakers: [],
  autoModelByMaker: [],
  autoByNumber: [],
};

export const referencesSlice = createSlice({
  name: "references",
  initialState,
  reducers: {
    setAutoModelByMaker: (state, { payload }) => {
      state.autoModelByMaker = payload;
    },
    setAutoMakers: (state, { payload }) => {
      state.autoMakers = payload;
    },
    setAutoByNumber: (state, { payload }) => {
      state.autoByNumber = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(allAutoMakers.fulfilled, (state, { payload }) => {
        state.autoMakers = payload;
      })
      .addCase(allAutoModelByMaker.fulfilled, (state, { payload }) => {
        state.autoModelByMaker = payload;
      })
      .addCase(autoByNumber.fulfilled, (state, { payload }) => {
        // const { bodyNumber, year, modelText } = payload;
        // state.autoByNumber = [bodyNumber, year, modelText];
        state.autoByNumber = payload;
      })
      .addCase(autoByMakerAndModel.fulfilled, (state, { payload }) => {
        state.autoModelByMaker = payload;
      });
  },
});
export const { setAutoModelByMaker, setAutoMakers, setAutoByNumber } =
  referencesSlice.actions;
export const referencesReducer = referencesSlice.reducer;
