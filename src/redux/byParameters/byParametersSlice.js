import { createSlice } from "@reduxjs/toolkit";
import { getAddress } from "./operations";
import {
  selectAutoCategory,
  selectCategoryOptions,
} from "../../helpers/ByParameters/selectOptions";

const initialState = {
  queryText: "",
  address: { label: "", value: "" },
  vehicle: selectCategoryOptions[0],
  engineCapacity: selectAutoCategory(selectCategoryOptions[0].value)[0],
  addressOptions: [],
  benefits: false,
  foreignNumber: false,
  submitObj: {},
};
export const byParameters = createSlice({
  name: "byParameters",
  initialState,
  reducers: {
    setQueryText: (state, { payload }) => {
      state.queryText = payload;
    },
    setSubmitObj: (state, { payload }) => {
      // const { dateFrom } = payload;
      // const d = new Date(dateFrom);
      // payload.dateTo = d.getFullYear() + 1 + d.toISOString().substring(4, 10);

      state.submitObj = payload;
      state.benefits = payload.customerCategory === "PRIVILEGED" ? true : false;
      state.foreignNumber = payload.outsideUkraine;
    },
    setAddress: (state, { payload }) => {
      state.address = payload;
    },
    setVehicle: (state, { payload }) => {
      state.vehicle = payload;
    },
    setEngineCapacity: (state, { payload }) => {
      state.engineCapacity = payload;
    },
    setAddressOptions: (state, { payload }) => {
      state.addressOptions = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAddress.fulfilled, (state, { payload }) => {
      state.addressOptions = payload;
    });
  },
});

export const byParametersReducer = byParameters.reducer;
export const {
  setAddressOptions,
  setQueryText,
  setSubmitObj,
  setAddress,
  setVehicle,
  setEngineCapacity,
} = byParameters.actions;
