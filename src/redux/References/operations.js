import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../services/api";
import { setGlobalCustomerData } from "../Global/globalSlice";

export const allAutoMakers = createAsyncThunk(
  "references/allAutoMakers",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await instance.get("/auto_model/makers");
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const allAutoModelByMaker = createAsyncThunk(
  "references/autoModelByMakers",
  async (maker, { rejectWithValue }) => {
    try {
      const { data } = await instance.get("/auto_model/models", {
        params: {
          maker,
        },
      });
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const autoByNumber = createAsyncThunk(
  "calculator/autoByNumber",
  async (query, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await instance.get("/auto/mtibu/number", {
        params: {
          query: decodeURIComponent(query),
        },
      });
      dispatch(setGlobalCustomerData({ insuranceObject: data[0] }));
      return data;
      // return data[0];
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const autoByMakerAndModel = createAsyncThunk(
  "calculator/autoByMakerAndModel",
  async (query, { rejectWithValue, getState }) => {
    try {
      const { autoByNumber } = getState().references;
      const maker = autoByNumber[0].modelText.replace(/ .*/, "");

      const model = autoByNumber[0].modelText
        .replace(/^[^\s]+\s/, "")
        .slice(0, 1);

      const { data } = await instance.get("/auto_model/maker_and_model", {
        params: {
          query: decodeURIComponent(maker + " " + model),
        },
      });

      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
