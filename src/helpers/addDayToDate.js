export const addDayToDate = () => {
  const dateF = new Date(Date.now() + 86400000);
  const dateFrom = dateF.toISOString().substring(0, 10);
  return new Date(dateFrom);
};
