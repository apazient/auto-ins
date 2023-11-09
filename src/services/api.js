import axios from "axios";

const xAuthUser = import.meta.env.VITE_REACT_APP_X_AUTH_USER;
const xAuthToken = import.meta.env.VITE_REACT_APP_X_AUTH_TOKEN;

export const instance = axios.create({
  baseURL: "/api",

  headers: {
    "x-auth-user": xAuthUser,
    "x-auth-token": xAuthToken,
    "Content-Type": "application/json",
  },
  mode: "cors",
});
