import { Outlet, useLocation } from "react-router-dom";
import Company from "../components/Company/Company";

import OutletNavaigation from "../components/OutletNavigation/OutletNavigation";
import { ContainerSectionPage, PageContainerS } from "../style/Global.styled";
import { CostCalculation } from "../components/CostCalculation/CostCalculation";

export const PricesPage = () => {
  const location = useLocation();

  return (
    <PageContainerS>
      <ContainerSectionPage component="section">
        <OutletNavaigation locationPath={location} />
        <CostCalculation />
        <hr />
        <Company />
      </ContainerSectionPage>
    </PageContainerS>
  );
};

export default PricesPage;
