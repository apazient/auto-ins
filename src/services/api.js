import axios from "axios";

import { userNormalize } from "../helpers/dataNormalize/userNormalize";
import { setDateInOneYear } from "../helpers/setDateInOneYear";
const baseURL = import.meta.env.VITE_REACT_APP_API_URL;
const xAuthUser = import.meta.env.VITE_REACT_APP_X_AUTH_USER;
const xAuthToken = import.meta.env.VITE_REACT_APP_X_AUTH_TOKEN;

const instance = axios.create({
  // baseURL: baseURL,
  baseURL: "/api",

  headers: {

    "x-auth-user": xAuthUser,
    "x-auth-token": xAuthToken,
    "Content-Type": "application/json",

  },
  mode: 'cors',
});

// const instance = axios.create({  
//   baseURL: xBaseURL,
//   headers: {
//     "x-auth-user": xAuthUser,
//     "x-auth-token": xAuthToken,
//   },
//   mode: 'cors',
// });

export const getUserByEmail = async () => {
  const { data } = await instance.get("/user/getByEmail", {
    params: { email: "persichek5@gmail.com" },
    // params: { email: xAuthUser },
  });
  console.log(data);
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

export const getPolicyByParamsInUa = async (params) => {
  const { data } = await instance.get("/tariff/choose/policy", {
    params: {
      ...params,
      customerCategory: "NATURAL",
      usageMonths: 0,
      taxi: false,
      dateFrom: "2023-10-20",
      dateTo: "2024-10-19",
      salePoint: "40629",
    },
  });
  // console.log("api", data);  

  //об'єкт, який має поиходити від користувача
  // params = {
  //   autoCategory: "B1",
  //   registrationPlace: "22",
  //   customerCategory: "NATURAL",
  //   outsideUkraine: false,
  //   dateFrom: "2023-10-20",
  //   dateTo: "2024-10-20",
  // };

  // const { data } = await instance.get("/tariff/choose/policy", {
  //   params: {
  //     ...params,
  //     usageMonths: 0,
  //     taxi: false,
  //     salePoint: "40629",
  //   },
  // });
  return data;
};
