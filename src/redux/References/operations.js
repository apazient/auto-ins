import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../services/api";

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
  "references/autoByNumber",
  async (query, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await instance.get("/auto/mtibu/number", {
        params: {
          query,
        },
      });
      //dispatch(setGlobalCustomerData({ insuranceObject: data[0] }));

      return data;
      // return data[0];
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const autoByMakerAndModel = createAsyncThunk(
  "references/autoByMakerAndModel",
  async (query, { rejectWithValue, getState }) => {
    try {
      //  const { autoByNumber } = getState().references;
      // const maker = autoByNumber[0].modelText.replace(/ .*/, "");

      // const model = autoByNumber[0].modelText
      //   .replace(/^[^\s]+\s/, "")
      //   .slice(0, 1);

      // const maker = query?.replace(/ .*/, "");
      // console.log(maker);
      // const model = query?.replace(/^[^\s]+\s/, "").slice(0, 1);

      // console.log(model);

      // const { data } = await instance.get("/auto_model/maker_and_model", {
      //   params: {
      //     query: maker + " " + model,
      //   },
      // });
      const { data } = await instance.get("/auto_model/maker_and_model", {
        params: {
          query,
        },
      });

      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
