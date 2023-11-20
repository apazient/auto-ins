export const sortAndFilterTariff = (tariff) => {
  const f = tariff.reduce((acc, value) => {
    if (acc.some((el) => el.franchise === value.franchise)) {
      const f = acc.find((el) => el.franchise === value.franchise);
      if (f.discountedPayment > value.discountedPayment) {
        acc.splice(acc.indexOf(f), 1, value);
      }
      return acc;
    } else {
      acc.push(value);
      return acc;
    }
  }, []);

  const uniqFranchise = f.sort((a, b) => a.franchise - b.franchise);

  return uniqFranchise;
};
