import { createSlice } from "@reduxjs/toolkit";
import { errorMessage } from "../../helpers/errorMessage";

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
  error: "",
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
    setRefError: (state, { payload }) => {
      state.error = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(allAutoMakers.fulfilled, (state, { payload }) => {
        state.autoMakers = payload;
      })
      .addCase(allAutoMakers.rejected, (state, { payload }) => {
        state.error = errorMessage(payload);
      })
      .addCase(allAutoModelByMaker.fulfilled, (state, { payload }) => {
        state.autoModelByMaker = payload;
      })
      .addCase(allAutoModelByMaker.rejected, (state, { payload }) => {
        state.autoModelByMaker = errorMessage(payload);
      })
      .addCase(autoByNumber.fulfilled, (state, { payload }) => {
        if (payload.length === 0) {
          state.error = "Aвтомобіль зa таким номером не знайдено";
        } else {
          state.autoByNumber = payload;
        }
      })
      .addCase(autoByNumber.rejected, (state, { payload }) => {
        state.error = errorMessage(payload);
      })
      .addCase(autoByMakerAndModel.fulfilled, (state, { payload }) => {
        state.autoByMakerAndModel = payload;
      })
      .addCase(autoByMakerAndModel.rejected, (state, { payload }) => {
        state.autoByMakerAndModel = errorMessage(payload);
      });
  },
});
export const {
  setAutoModelByMaker,
  setAutoMakers,
  setAutoByNumber,
  setAutoByMakerAndModel,
  setRefError,
} = referencesSlice.actions;
export const referencesReducer = referencesSlice.reducer;
