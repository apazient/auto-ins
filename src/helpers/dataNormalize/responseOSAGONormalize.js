export const responseOSAGONormalize = (data) => {
  return {
    insurerId: data.tariff.insurer?.id,
    insurerName: data.tariff.insurer?.name,
    tariff: { ...data.tariff, discountedPayment: data.discountedPayment },
    registrationPlace: data.registrationPlace,
    autoCategory: data.autoCategory,
  };
};
