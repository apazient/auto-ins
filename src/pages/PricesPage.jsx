import { useLocation, useNavigate } from "react-router-dom";
import { CostCalculation } from "../components/CostCalculation/CostCalculation";

import { useEffect, useRef } from "react";
import OutletPageWrapper from "../components/OutletPageWrapper";
import ModalError from "../components/ModalError/ModalError";

import ProposalsFilter from "../components/ProposalsFilter/ProposalsFilter";
import CompanyList from "../components/CompanyList/CompanyList";
import { useDispatch, useSelector } from "react-redux";
import { osagoByDn, osagoByParams } from "../redux/Calculator/operations";
import { getSubmitObject } from "../redux/byParameters/selectors";
import {
  getStateCalculator,
  getStateNumber,
  getTariffPolicyChoose,
} from "../redux/Calculator/selectors";
import { getStateNumber } from "../redux/Calculator/selectors";
import { setIsLoading } from "../redux/Global/globalSlice";

import { getIsModalErrorOpen } from "../redux/Global/selectors";
import Loader from "../components/Loader/Loader";
import { LinearProgress } from "@mui/material";

const PricesPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { current } = useRef(location.state?.data);
  const userParams = useSelector(getSubmitObject);
  const stateNumber = useSelector(getStateNumber);
  const isError = useSelector(getIsModalErrorOpen);
  const isLoadingCalculator = useSelector(getStateCalculator)

  const dispatch = useDispatch();
  useEffect(() => {
    let subscribed = true;

    if (!Object.hasOwn(userParams, "dateFrom") && stateNumber === "") {
      navigate("/");
      return;
    }
    if (subscribed) {
      if (stateNumber && userParams) {        
        dispatch(osagoByDn(userParams))
      }
      if (!stateNumber && userParams) {        
        dispatch(osagoByParams(userParams))
      }
    }
    return () => {
      subscribed = false;
    };
  }, [dispatch, userParams, stateNumber]);

  return (
    <>
      <OutletPageWrapper>
        <CostCalculation />
        <ProposalsFilter />        
        {isLoadingCalculator && <LinearProgress />}        
        <CompanyList />
      </OutletPageWrapper>
      {isError && <ModalError />}
    </>
  );
};
export default PricesPage;
