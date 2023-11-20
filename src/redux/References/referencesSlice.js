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
  autoByMakerAndModel: [],
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
    setAutoByMakerAndModel: (state, { payload }) => {
      state.autoByMakerAndModel = payload;
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
        state.autoByNumber = payload;
      })
      .addCase(autoByMakerAndModel.fulfilled, (state, { payload }) => {
        state.autoByMakerAndModel = payload;
      });
  },
});
export const {
  setAutoModelByMaker,
  setAutoMakers,
  setAutoByNumber,
  setAutoByMakerAndModel,
} = referencesSlice.actions;
export const referencesReducer = referencesSlice.reducer;
