export const addYearToDate = (date) => {
  const d = new Date(date);
  d.setFullYear(d.getFullYear() + 1);
  d.setDate(d.getDate() - 1);
  const dateTo = d.toISOString().substring(0, 10);
  return dateTo;
};
