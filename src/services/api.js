import axios from "axios";

import { userNormalize } from "../helpers/dataNormalize/userNormalize";

const baseURL = import.meta.env.VITE_REACT_APP_API_URL;
const xAuthUser = import.meta.env.VITE_REACT_APP_X_AUTH_USER;
const xAuthToken = import.meta.env.VITE_REACT_APP_X_AUTH_TOKEN;

export const instance = axios.create({
  // baseURL: baseURL,
  baseURL: "/api",

  headers: {
    "x-auth-user": xAuthUser,
    "x-auth-token": xAuthToken,
    "Content-Type": "application/json",
  },
  mode: "cors",
});

export const getUserByEmail = async () => {
  const { data } = await instance.get("/user/getByEmail", {
    params: { email: "persichek5@gmail.com" },
    // params: { email: xAuthUser },
  });
  return userNormalize(data);
};

export const getCityByName = async (cityName) => {
  const { data } = await instance.get("/place", {
    params: {
      query: cityName,
      cdbMtibu: false,
      country: "UA",
    },
  });
  return data;
};
export const getCarModel = async (carModel) => {
  const { data } = await instance.get("/auto_model/maker_and_model", {
    params: {
      query: carModel,
    },
  });
  console.log(data);
  // return data;
};
