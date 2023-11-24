import axios from "axios";

// const xAuthUser = import.meta.env.VITE_REACT_APP_X_AUTH_USER;
// const xAuthToken = import.meta.env.VITE_REACT_APP_X_AUTH_TOKEN;
const xAuthUser = "persichek5@gmail.com";
const xAuthToken = "8a87f6e8-55e5-4448-ba5d-f9466667aca1";

export const instance = axios.create({
  baseURL: "/api",
  //baseURL: "https://web.eua.in.ua/eua/api/v15",

  headers: {
    "x-auth-user": xAuthUser,
    "x-auth-token": xAuthToken,
    "Content-Type": "application/json",
  },
  //mode: "cors",
});
