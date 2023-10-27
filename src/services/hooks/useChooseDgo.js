import { useQuery } from "@tanstack/react-query";
import { instance } from "../api";

const chooseVclTariffDGO = async (body) => {
  const {
    customerCategory,
    dateFrom,
    dateTo,
    registrationPlace,
    outsideUkraine,
    salePoint,
    taxi,
  } = body;

  const { data } = await instance.post("/tariff/choose/vcl", {
    autoKind: "CAR",
    autoKindLimit: 1900,
    customerCategory,
    dateFrom,
    dateTo,
    outsideUkraine,
    registrationPlace,
    salePoint,
    taxi,
    //salePoint: 40629,
    // taxi: false,
    // customerCategory: "NATURAL",
  });
  return data.filter((el) => {
    return el.crossSell === false;
  });
};

export const useChooseDgo = (policyParams) => {
  return useQuery({
    queryKey: ["calculatorDgo"],
    queryFn: () => chooseVclTariffDGO(policyParams),
    policyParams,
  });
};
