export const paramsByNumberNormalize = (params) => {
  const { bodyNumber, year, modelText } = params[0];
  return [bodyNumber, year, modelText];
};

export const pramsByParamsNormalize = (params) => {
  const { address, engineCapacity } = params;
  if (address === "") {
    return [...engineCapacity.split(" - ")];
  }
  return [...engineCapacity.split(" - "), address.split(",")[0]];
};
