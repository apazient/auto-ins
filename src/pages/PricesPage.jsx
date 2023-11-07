import { useLocation } from "react-router-dom";

import { CostCalculation } from "../components/CostCalculation/CostCalculation";

import { useEffect, useRef } from "react";
import OutletPageWrapper from "../components/OutletPageWrapper";

import ProposalsFilter from "../components/ProposalsFilter/ProposalsFilter";
import CompanyList from "../components/CompanyList/CompanyList";
import { useDispatch, useSelector } from "react-redux";
import {
  chooseVclTariffDGO,
  osagoByParams,
} from "../redux/Calculator/operations";
import { getSubmitObject } from "../redux/byParameters/selectors";
import { getTariffPolicyChoose } from "../redux/Calculator/selectors";

const PricesPage = () => {
  const location = useLocation();
  const { current } = useRef(location.state?.data);
  const userParams = useSelector(getSubmitObject);
  const tariffPolicyChoose = useSelector(getTariffPolicyChoose);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(chooseVclTariffDGO(userParams));
    if (!tariffPolicyChoose) {
      dispatch(osagoByParams(userParams));
    }
  }, [dispatch, userParams, tariffPolicyChoose]);

  return (
    <OutletPageWrapper>
      <CostCalculation />
      {/* <ProposalsFilter companies={companies} dgos={dgo} /> */}
      {/* <CompanyList />; */}
    </OutletPageWrapper>
  );
};
export default PricesPage;
