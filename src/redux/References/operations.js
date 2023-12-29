import { createAsyncThunk } from "@reduxjs/toolkit";
import { CATEGORY, CATEGORY_ERROR, mainRoutes } from "../../constants";

import { instance } from "../../services/api";
import { setIsModalErrorOpen } from "../Global/globalSlice";
import { setRefError } from "./referencesSlice";

export const allAutoMakers = createAsyncThunk(
  "references/allAutoMakers",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await instance.get(
        mainRoutes.AUTO_MODEL + "/auto_model/makers"
      );
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
      const { data } = await instance.get(
        mainRoutes.AUTO_MODEL + "/auto_model/models",
        {
          params: {
            maker,
          },
        }
      );
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
      const { data } = await instance.get(
        mainRoutes.AUTO_MODEL + "/auto/mtibu/number",
        {
          params: {
            query,
          },
        }
      );
      if (data.length === 0) {
        dispatch(setIsModalErrorOpen(true));
        return data;
      } else {
        const [auto] = data;
        const a = CATEGORY.find((item) => item === auto.category);
        if (a) {
          return data;
        } else {
          dispatch(setRefError(CATEGORY_ERROR));
          dispatch(setIsModalErrorOpen(true));
          return [];
        }
      }
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const autoByMakerAndModel = createAsyncThunk(
  "references/autoByMakerAndModel",
  async (query, { rejectWithValue }) => {
    try {
      const { data } = await instance.get(
        mainRoutes.AUTO_MODEL + "/auto_model/maker_and_model",
        {
          params: {
            query,
          },
        }
      );

      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
