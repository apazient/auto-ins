import format from "date-fns/format";

export const contractSaveDGONormalize = (
  userParams,
  user,
  tariffDGO,
  customerInsuriensObject
) => {
  const { customer, insuranceObject } = customerInsuriensObject;
  return {
    type: "vcl",
    ...user,
    customer,
    tariffDGO,
    insuranceObject: {
      ...insuranceObject,
      engineVolume: tariffDGO.engineVolume,
    },
    dateFrom: format(
      new Date(userParams?.dateFrom),
      "yyyy-MM-dd'T'HH:mm:ss.SSSxxxx"
    ),
    date: format(new Date(), "yyyy-MM-dd'T'HH:mm:ss.SSSxxxx"),
    state: "DRAFT",

    limit: tariffDGO.limit,
  };
};
