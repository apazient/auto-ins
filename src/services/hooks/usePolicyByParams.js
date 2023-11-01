import { useQuery } from "@tanstack/react-query";
import { responseOSAGONormalize } from "../../helpers/dataNormalize/responseOSAGONormalize";
import { mergeObjectsById } from "../../helpers/mergeObjectsById";

import { instance } from "../api";
// повертає масив об'єктів в яких заборонені кросс-продажі
const getPolicyByParams = async (params) => {
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
  const newData = data
    .filter((el) => el.crossSell === false)
    .filter((el) => el.discountedPayment !== 0);
  return mergeObjectsById(newData, responseOSAGONormalize);
};

export const usePolicyByParams = (policyParams) => {
  return useQuery({
    queryKey: ["calculatorOSAGOByParams"],
    queryFn: () => getPolicyByParams(policyParams),

    policyParams,
    select: (data) => data,
    enabled: !!policyParams,
  });
};
