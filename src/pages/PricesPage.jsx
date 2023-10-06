import { Outlet, useLocation } from "react-router-dom";
import CompanyList from "../components/CompanyList/CompanyList";
import OutletNavaigation from "../components/OutletNavigation/OutletNavigation";
import { ContainerSectionPage, PageContainerS } from "../style/Global.styled";

import companiesData from "../assets/mocapi/companyDataList.json";
import { useState } from "react";

export const PricesPage = () => {
  const location = useLocation();
  const [companies, _] = useState(companiesData);

  return (
    <PageContainerS>
      <ContainerSectionPage component="section">
        <OutletNavaigation locationPath={location} />
        <hr />
        <CompanyList companies={companies} />
      </ContainerSectionPage>
    </PageContainerS>
  );
};

export default PricesPage;
