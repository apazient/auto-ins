import axios from "axios";

export const instance = axios.create({
  // baseURL: "http://localhost:4040/api",
  baseURL: "https://api.auto-ins.com.ua/api",
});
