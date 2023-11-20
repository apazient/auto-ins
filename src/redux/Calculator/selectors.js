import { createSelector } from "@reduxjs/toolkit";

export const getUser = (state) => state.calculator.user;
export const getTariffPolicyChoose = (state) =>
  state.calculator.tariffPolicyChoose;
export const getFilteredCompanies = (state) =>
  state.calculator.filteredCompanies;
export const getTariffVcl = (state) => state.calculator.tariffVcl;
export const getStateNumber = (state) => state.calculator.stateNumber;
export const getError = (state) => state.calculator.error;
export const getPolicyStatus = (state) => state.calculator.policyStatus;
export const getVclStatus = (state) => state.calculator.vclStatus;
export const getTariffsStatus = createSelector(
  getPolicyStatus,
  getVclStatus,
  (policyStatus, vclStatus) => {
    return policyStatus === 1 && vclStatus === 1;
  }
);
export const getStateCalculator = (state) => state.calculator.isLoading;