import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { calculatorSlice } from "../redux/Calculator/calculatorSlice";
import { byParameters } from "../redux/byParameters/byParametersSlice";
import * as byParametersOperations from "../redux/byParameters/operations";
import * as calculatorOperations from "../redux/Calculator/operations";
import * as globalOperations from "../redux/Global/operations";
import * as referencesOperations from "../redux/References/operations";
import { globalSlice } from "../redux/Global/globalSlice";
import { referencesSlice } from "../redux/References/referencesSlice";

const rootActions = {
  ...calculatorSlice.actions,
  ...calculatorOperations,
  ...globalSlice.actions,
  ...globalOperations,
  ...referencesSlice.actions,
  ...referencesOperations,
  ...byParametersOperations,
  ...byParameters.actions,
};

export const useActions = () => {
  const dispatch = useDispatch();
  return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch]);
};

console.log(rootActions);
