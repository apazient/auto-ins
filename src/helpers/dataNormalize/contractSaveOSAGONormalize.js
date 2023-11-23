import format from "date-fns/format";

export const contractSaveOSAGONormalize = (
  userParams,

  user,
  tariff,
  customerInsuriensObject
) => {
  const { customer, insuranceObject } = customerInsuriensObject;
  return {
    type: "epolicy",
    ...user,
    customer,
    tariff,
    insuranceObject,
    dateFrom: format(
      new Date(userParams?.dateFrom),
      "yyyy-MM-dd'T'HH:mm:ss.SSSxxxx"
    ),
    state: "DRAFT",
  };
};
