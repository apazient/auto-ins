export const priceSortOptionsGeneral = [
  {
    value: "",
    label: "Не важливо",
  },
  {
    value: "fromLowToHigh",
    label: "Від низької до високої",
  },
  {
    value: "fromHighToLow",
    label: "Від високої до низької",
  },
];

export const createSelectOptionsByCompaniName = (arr) => {
  const companiesNames = [
    ...new Set(
      arr.map((compani) => compani.insurerName.replace(/,[^,]+$/, ""))
    ),
  ];

  return companiesNames;
};
export const filteredByPrice = (arr, sortFrom) => {
  switch (sortFrom) {
    case "fromLowToHigh":
      arr.sort(
        (companiA, companiB) =>
          companiA.tariff[0].discountedPayment -
          companiB.tariff[0].discountedPayment
      );
      break;
    case "fromHighToLow":
      arr.sort(
        (companiA, companiB) =>
          companiB.tariff[0].discountedPayment -
          companiA.tariff[0].discountedPayment
      );
      break;

    default:
      console.log("Oops we have some problem!!!");
      break;
  }
};
