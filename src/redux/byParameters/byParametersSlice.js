import { createSlice } from "@reduxjs/toolkit";
import { getAddress } from "./operations";


const initialState = {
    queryText: '',
    address: { label: "", value: "" },
    vehicle: {},
    engineCapacity:{},
    addressOptions: [],
    submitObj:{}
};
export const byParameters = createSlice({
  name: "byParameters",
  initialState,
  reducers: {
    setQueryText: (state, { payload }) => {
        state.queryText = payload;
        },
    setSubmitObj: (state, { payload }) => {
        state.submitObj = payload;
        },
    setAddress: (state, { payload }) => {
        state.address = payload;
        }
    },
  extraReducers: (builder) => {
      builder
          .addCase(getAddress.fulfilled, (state, { payload }) => { 
              state.addressOptions = payload;    
            });
    
  },
});

export const byParametersReducer = byParameters.reducer;
export const { setQueryText, setSubmitObj, setAddress } = byParameters.actions;