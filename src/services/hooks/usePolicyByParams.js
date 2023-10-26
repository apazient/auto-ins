import { useQuery } from "@tanstack/react-query";
import { QueryClient } from "react-query";
import { instance } from "../api";
// повертає масив об'єктів в яких заборонені кросс-продажі
export const getPolicyByParams = async (params) => {
  //об'єкт, який має поиходити від користувача
  // params = {
  //   autoCategory: "B1",
  //   registrationPlace: "22",
  //   customerCategory: "NATURAL",
  //   outsideUkraine: false,
  //   dateFrom: "2023-10-20",
  //   dateTo: "2024-10-20",
  // };

  const { data } = await instance.get("/tariff/choose/policy", {
    params: {
      ...params,
      // usageMonths: 0,
      // taxi: false,
      // salePoint: "40629",
      // customerCategory: "NATURAL",
    },
  });

  return data.filter((el) => {
    return el.crossSell === false;
  });
};

export const usePolicyByParams = (policyParams) => {
  return useQuery({
    queryKey: ["calculatorOSAGOByParams"],
    queryFn: () => getPolicyByParams(policyParams),

    policyParams,
  });
};
