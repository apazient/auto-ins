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
  "calculator/autoByNumber",
  async (query, { rejectWithValue }) => {
    try {
      const { data } = await instance.get("/auto/mtibu/number", {
        params: {
          query: decodeURIComponent(query),
        },
      });

      return data;
      // return data[0];
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
