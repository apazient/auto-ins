import { createAsyncThunk } from "@reduxjs/toolkit";
import { userNormalize } from "../../helpers/dataNormalize/userNormalize";
import { instance } from "../../services/api";

const setSalePoint = (salePoint) => {
  instance.defaults.params = { ...instance.defaults.params, salePoint };
};

export const loginThunk = createAsyncThunk("auth/login", async (thunkAPI) => {
  try {
    const { data } = await instance.get("/user/getByEmail", {
      params: { email: "persichek5@gmail.com" },
    });
    setSalePoint(data.salePoint.id);
    return userNormalize(data);
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});
