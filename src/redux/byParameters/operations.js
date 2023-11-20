import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../services/api";
import { selectAddressOptions } from "../../helpers/ByParameters/selectOptions";

export const fetchAddress = async (cityName) => {
   try {
    const { data } = await instance.get("/place", {
        params: {
          query: cityName,
          cdbMtibu: false,
          country: "UA",
    },
  });
    return selectAddressOptions(data);
   } catch (error) {
      console.log(error.massage);
   }
}

export const getAddress = createAsyncThunk(
  "byParameters/getAddress",
  async (cityName, { rejectWithValue }) => {
    try {
    return await fetchAddress(cityName);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
