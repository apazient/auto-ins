export const insuranceObjectNormalize = (carDataFormik, insurObject) => {
  const insuranceObject = {
    type: "auto",
    model: {
      id: carDataFormik.values.model.id,
      autoMaker: { id: carDataFormik.values.maker.id },
    },
    modelText: carDataFormik.values.brand,
    category: carDataFormik.values.category,
    bodyNumber: carDataFormik.values.bodyNumber,
    stateNumber: carDataFormik.values.stateNumber,
    registrationPlace: { id: insurObject?.registrationPlace?.id },
    registrationType: "PERMANENT_WITHOUT_OTK",
    year: carDataFormik.values.year,
  };
  return insuranceObject;
};
