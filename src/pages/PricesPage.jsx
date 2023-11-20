import { useLocation, useNavigate } from "react-router-dom";
import { CostCalculation } from "../components/CostCalculation/CostCalculation";
import { useEffect, useRef } from "react";
import OutletPageWrapper from "../components/OutletPageWrapper";
import ProposalsFilter from "../components/ProposalsFilter/ProposalsFilter";
import CompanyList from "../components/CompanyList/CompanyList";
import { useSelector } from "react-redux";
import { getSubmitObject } from "../redux/byParameters/selectors";
import {
  getStateCalculator,
  getStateNumber,
} from "../redux/Calculator/selectors";
import { LinearProgress } from "@mui/material";
import LineSection from "../components/LineSection/LineSection";
import { useActions } from "../hooks/useActions";

const PricesPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { current } = useRef(location.state?.from);
  const userParams = useSelector(getSubmitObject);
  const stateNumber = useSelector(getStateNumber);
  const isLoadingCalculator = useSelector(getStateCalculator);

  const { osagoByDn, autoByNumber, osagoByParams } = useActions();

  useEffect(() => {
    let subscribed = true;

    if (!Object.hasOwn(userParams, "dateFrom") && stateNumber === "") {
      navigate("/");
      return;
    }

    if (subscribed) {
      if (stateNumber && userParams) {
        osagoByDn(userParams);
        autoByNumber(stateNumber);
      }
      if (!stateNumber && userParams) {
        osagoByParams(userParams);
      }
    }
    return () => {
      subscribed = false;
    };
  }, [
    osagoByDn,
    osagoByParams,
    autoByNumber,
    userParams,
    stateNumber,
    navigate,
  ]);

  return (
    <>
      <OutletPageWrapper>
        <CostCalculation />
        <ProposalsFilter />
        <LineSection />
        {isLoadingCalculator && <LinearProgress />}
        <CompanyList />
      </OutletPageWrapper>
    </>
  );
};
export default PricesPage;
