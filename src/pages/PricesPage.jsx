import { Outlet, useLocation } from "react-router-dom";
import Company from "../components/Company/Company";

import OutletNavaigation from "../components/OutletNavigation/OutletNavigation";
import { ContainerSectionPage, PageContainerS } from "../style/Global.styled";

export const PricesPage = () => {
  const location = useLocation();

  return (
    <PageContainerS>
      <ContainerSectionPage component="section">
        <OutletNavaigation locationPath={location} />
        <hr />
        <Company />
      </ContainerSectionPage>
    </PageContainerS>
  );
};

export default PricesPage;
