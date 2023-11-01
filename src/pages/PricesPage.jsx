import { useLocation } from "react-router-dom";

import OutletNavigation from "../components/OutletNavigation/OutletNavigation";
import { CostCalculation } from "../components/CostCalculation/CostCalculation";

import { useRef } from "react";
import OutletPageWrapper from "../components/OutletPageWrapper";

import PricePageContent from "../components/PricePageContent";

const PricesPage = () => {
  const location = useLocation();
  const { current } = useRef(location.state?.data);

  return (
    <OutletPageWrapper>
      <CostCalculation />
      <PricePageContent proposal={current} />
    </OutletPageWrapper>
  );
};
export default PricesPage;
