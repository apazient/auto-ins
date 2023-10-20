export const setDateInOneYear = (date) => {
  const dateFrom = new Date(date);
  dateFrom.setFullYear(dateFrom.getFullYear() + 1);
  return dateFrom.toISOString().split("T")[0];
};
