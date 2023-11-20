import { createSelector } from "@reduxjs/toolkit";

// export const getSubmitObject = (state) => state.byParameters.submitObj;
export const getAddressAndAuto = createSelector(
  (state) => state.byParameters.address,
  (state) => state.byParameters.engineCapacity,
  (address, engineCapacity) => {
    return {
      address: address.label,
      engineCapacity: engineCapacity.label,
    };
  }
);

export const getSubmitObject = createSelector(
  (state) => state.byParameters.submitObj,
  (submitObj) => submitObj
);
