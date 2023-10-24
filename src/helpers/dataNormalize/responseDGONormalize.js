export const responseDGONormalize = (data) => {
  return {
    insurerId: data.tariff.insurer.id,
    insurerName: data.tariff.insurer.name,
    tariff: {
      ...data.tariff,
      discountedPayment: data.discountedPayment,
      limit: data.limit,
    },
  };
};
