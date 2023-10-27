import { useQuery } from "@tanstack/react-query";
import { instance } from "../api";

const getCityByName = async (cityName) => {
  const { data } = await instance.get("/place", {
    params: {
      query: cityName,
      cdbMtibu: false,
      country: "UA",
    },
  });
  return data;
};
export const useCityByName = (cityName) => {
  return useQuery({
    queryKey: ["cityByName"],
    queryFn: () => getCityByName(cityName),
    enabled: !!cityName,
  });
};
