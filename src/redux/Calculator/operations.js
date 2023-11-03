import { createAsyncThunk } from "@reduxjs/toolkit";
import { responseOSAGONormalize } from "../../helpers/dataNormalize/responseOSAGONormalize";
import { mergeObjectsById } from "../../helpers/mergeObjectsById";
import { instance } from "../../services/api";

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
