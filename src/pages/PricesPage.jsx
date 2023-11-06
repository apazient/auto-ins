import { useLocation } from "react-router-dom";

import { CostCalculation } from "../components/CostCalculation/CostCalculation";

import { useEffect, useRef } from "react";
import OutletPageWrapper from "../components/OutletPageWrapper";

import PricePageContent from "../components/PricePageContent";
import { useDispatch, useSelector } from "react-redux";
import { autoByNumber } from "../redux/Calculator/operations";
import { useSelect } from "@mui/base";
import { getStateNumber } from "../redux/Calculator/selectors";

const PricesPage = () => {
  const location = useLocation();
  const { current } = useRef(location.state?.data);

  return (
    <OutletPageWrapper>
      <CostCalculation />
      {/* <PricePageContent proposal={current} /> */}
    </OutletPageWrapper>
  );
};
export default PricesPage;
