export const getIsModalErrorOpen = (state) => state.global.isModalErrorOpen;
export const getIsLoading = (state) => state.global.isLoading;
export const getGlobalCustomerData = (state) => state.global.globalCustomerData;
export const selectGlobalCustomerDataCustomer = (state) =>
  state.global.globalCustomerData.customer;
export const getParamsFromUrl = (state) => state.global.paramsFromUrl;
