import { createAsyncThunk } from "@reduxjs/toolkit";
import { forEach } from "lodash";
import { responseDGONormalize } from "../../helpers/dataNormalize/responseDGONormalize";
import { responseOSAGONormalize } from "../../helpers/dataNormalize/responseOSAGONormalize";
import { getAutoKindAndLimit } from "../../helpers/getautoKindAndLimit";
import { mergeObjectsById } from "../../helpers/mergeObjectsById";
import { instance } from "../../services/api";
import { setIsModalErrorOpen } from "../Global/globalSlice";

export const osagoByParams = createAsyncThunk(
  "calculator/osagoByParams",
  async (body, { rejectWithValue }) => {
    try {
      const { data } = await instance.get("/tariff/choose/policy", {
        params: {
          ...body,
          usageMonths: 0,
          taxi: false,
        },
      });
      const newData = data
        .filter((el) => el.crossSell === false)
        .filter((el) => el.discountedPayment !== 0);
      return mergeObjectsById(newData, responseOSAGONormalize);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const osagoByDn = createAsyncThunk(
  "calculator/osagoByDn",
  async (body, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await instance.get("/tariff/choose/policy/statenumber", {
        params: {
          ...body,
          taxi: false,
          registrationType: "PERMANENT_WITHOUT_OTK",
        },
      });
      const newData = data
        .filter((el) => el.crossSell === false)
        .filter((el) => el.discountedPayment !== 0);
      return mergeObjectsById(newData, responseOSAGONormalize);
    } catch (error) {
      return rejectWithValue(dispatch(setIsModalErrorOpen(true)));
    }
  }
);

export const chooseVclTariffDGO = createAsyncThunk(
  "calculator/tariffDGO",
  async (body, { rejectWithValue }) => {
    try {
      const { autoCategory, ...rest } = body;
      const cat = getAutoKindAndLimit(autoCategory);
      const { data } = await instance.post("/tariff/choose/vcl", {
        ...rest,
        ...cat,
      });
      const newData = data.filter((el) => el.crossSell === false);
      return mergeObjectsById(newData, responseDGONormalize);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const autoByNumber = createAsyncThunk(
  "calculator/autoByNumber",
  async (body, { rejectWithValue }) => {
    try {
      const { data } = await instance.get("/auto/mtibu/number", {
        params: {
          query: body,
        },
      });
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
