import { useLocation } from "react-router-dom";

import OutletNavigation from "../components/OutletNavigation/OutletNavigation";
import { CostCalculation } from "../components/CostCalculation/CostCalculation";

import { useRef } from "react";
import PricePageWrapper from "../components/PricePageWrapper/PricePageWrapper";

import PricePageContent from "../components/PricePageContent";

const PricesPage = () => {
  const location = useLocation();
  const { current } = useRef(location.state?.data);
  console.log(location);

  return (
    <>
      <PricePageWrapper>
        <OutletNavigation locationPath={location} />
        <CostCalculation />
        <PricePageContent proposal={current} />
      </PricePageWrapper>
    </>
  );
};
export default PricesPage;
