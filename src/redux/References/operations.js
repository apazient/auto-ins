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
  async (query, { rejectWithValue }) => {
    try {
      const { data } = await instance.get("/auto/mtibu/number", {
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

export const autoByMakerAndModel = createAsyncThunk(
  "references/autoByMakerAndModel",
  async (query, { rejectWithValue }) => {
    try {
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
