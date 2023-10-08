export const priceSortOptionsGeneral = [
  {
    value: "",
    label: "Не важливо",
  },
  {
    value: "Від низької до високої",
    label: "Від низької до високої",
  },
  {
    value: "Від високої до низької",
    label: "Від високої до низької",
  },
];

export const createSelectOptionsByCompaniName = (arr) => {
  const companiesNames = [
    ...new Set(arr.map((compani) => compani.nameCompany)),
  ];

  const newArr = companiesNames.map((el) => ({
    value: el,
    label: el,
  }));

  newArr.unshift({
    value: "",
    label: "Усі компанії",
  });

  return newArr;
};
