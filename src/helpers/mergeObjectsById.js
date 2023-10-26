export const mergeObjectsById = (inputArray, normalizeFnc) => {
  if (!inputArray) return;
  const dataNormalize = inputArray?.map((proposition) =>
    normalizeFnc(proposition)
  );

  const groupedById = {};
  dataNormalize.forEach((obj) => {
    const insurerId = obj.insurerId;
    if (!groupedById[insurerId]) {
      groupedById[insurerId] = { ...obj };
      groupedById[insurerId].tariff = [obj.tariff];
    } else {
      groupedById[insurerId].tariff.push(obj.tariff);
    }
  });
  const mergedArray = Object.values(groupedById);
  return mergedArray;
};
