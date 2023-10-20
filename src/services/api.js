import axios from "axios";
import { useQueryClient } from "react-query";
import { userNormalize } from "../helpers/dataNormalize/userNormalize";

// const xBaseURL = import.meta.env.VITE_REACT_APP_BaseURL
// const xAuthUser = import.meta.env.VITE_REACT_APP_X_AUTH_USER;
// const xAuthToken = import.meta.env.VITE_REACT_APP_X_AUTH_TOKEN;
// console.log(xAuthUser)

const instance = axios.create({  
  baseURL: "https://web.eua.in.ua/eua/api/v15",
  headers: {
    "x-auth-user": "persichek5@gmail.com",
    "x-auth-token": "8a87f6e8-55e5-4448-ba5d-f9466667aca1",
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
  return data;
};
