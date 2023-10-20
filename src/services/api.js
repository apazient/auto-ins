import axios from "axios";
// import { useQueryClient } from "react-query";
import { userNormalize } from "../helpers/dataNormalize/userNormalize";

const instance = axios.create({
  baseURL: "https://web.eua.in.ua/eua/api/v15",
  headers: {
    "x-auth-user": "persichek5@gmail.com",
    "x-auth-token": "8a87f6e8-55e5-4448-ba5d-f9466667aca1",
    "content-type": "application/json",
  },
});

export const getUserByEmail = async () => {
  const { data } = await instance.get("/user/getByEmail", {
    params: { email: "persichek5@gmail.com" },
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
