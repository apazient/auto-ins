import { useLocation, useNavigate } from "react-router-dom";
import { CostCalculation } from "../components/CostCalculation/CostCalculation";

import { useEffect, useRef } from "react";
import OutletPageWrapper from "../components/OutletPageWrapper";
import ModalError from "../components/ModalError/ModalError";

import ProposalsFilter from "../components/ProposalsFilter/ProposalsFilter";
import CompanyList from "../components/CompanyList/CompanyList";
import { useDispatch, useSelector } from "react-redux";
import {
  chooseVclTariffDGO,
  osagoByDn,
  osagoByParams,
} from "../redux/Calculator/operations";
import { getSubmitObject } from "../redux/byParameters/selectors";
import {
  getStateNumber,
  getTariffPolicyChoose,
} from "../redux/Calculator/selectors";
import { setIsLoading } from "../redux/Global/globalSlice";
import { ThemeContext } from "@emotion/react";
import { getIsModalErrorOpen } from "../redux/Global/selectors";

const PricesPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { current } = useRef(location.state?.data);
  const userParams = useSelector(getSubmitObject);
  const stateNumber = useSelector(getStateNumber);
  const isError = useSelector(getIsModalErrorOpen);

  const dispatch = useDispatch();
  useEffect(() => {
    let subscribed = true;
    if (!Object.hasOwn(userParams, "dateFrom") && stateNumber) {
      navigate("/");
      return;
    }
    if (subscribed) {
      if (stateNumber && userParams) {
        dispatch(setIsLoading(true));
        dispatch(osagoByDn(userParams)).then(() =>
          dispatch(setIsLoading(false))
        );
      }
      if (!stateNumber && userParams) {
        dispatch(setIsLoading(true));
        dispatch(osagoByParams(userParams)).then(() =>
          dispatch(setIsLoading(false))
        );
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
        <CompanyList />
      </OutletPageWrapper>
      {isError && <ModalError />}
    </>
  );
};
export default PricesPage;
