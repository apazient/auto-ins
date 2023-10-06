export const findById = (id, dataList) => {
  return dataList.find((item) => item.id === id);
};
