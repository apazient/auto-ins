import { useLocation, useNavigate } from "react-router-dom";
import { CostCalculation } from "../components/CostCalculation/CostCalculation";
import { useEffect, useRef } from "react";
import OutletPageWrapper from "../components/OutletPageWrapper";
import ProposalsFilter from "../components/ProposalsFilter/ProposalsFilter";
import CompanyList from "../components/CompanyList/CompanyList";
import { useSelector } from "react-redux";
import { getSubmitObject } from "../redux/byParameters/selectors";
import {
  getError,
  getStateCalculator,
  getStateNumber,
} from "../redux/Calculator/selectors";
import { LinearProgress } from "@mui/material";
import LineSection from "../components/LineSection/LineSection";
import { useActions } from "../hooks/useActions";
import AlertMUI from "../components/Alert/AlertMUI";
// import { isError } from "lodash";

const PricesPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { current } = useRef(location.state?.from);
  const userParams = useSelector(getSubmitObject);
  const stateNumber = useSelector(getStateNumber);
  const isLoadingCalculator = useSelector(getStateCalculator);
  const isError = useSelector(getError);

  const { osagoByParams } = useActions();

  useEffect(() => {
    let subscribed = true;
    if (!Object.hasOwn(userParams, "dateFrom") && stateNumber === "") {
      navigate("/");
      return;
    }
    if (subscribed) {
      //  if (stateNumber && userParams) {
      //    osagoByDn(userParams);
      //    autoByNumber(stateNumber);
      //  }
      if (!stateNumber && userParams) {
        osagoByParams(userParams);
      }
    }
    return () => {
      subscribed = false;
    };
  }, [osagoByParams, userParams, stateNumber, navigate]);

  useEffect(() => {
    if (isError) {
      navigate("/");
    }
  }, [navigate, isError]);
  return (
    <>
      <OutletPageWrapper>
        <AlertMUI type="info" message="Будь ласка, оберіть компанію" />
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
