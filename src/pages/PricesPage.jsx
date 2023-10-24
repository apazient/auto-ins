import { useLocation } from "react-router-dom";
import CompanyList from "../components/CompanyList/CompanyList";
import OutletNavaigation from "../components/OutletNavigation/OutletNavigation";
import { ContainerSectionPage, PageContainerS } from "../style/Global.styled";
import { CostCalculation } from "../components/CostCalculation/CostCalculation";
import ProposalsFilter from "../components/ProposalsFilter/ProposalsFilter";

import companiesData from "../assets/mocapi/companyDataList.json";
import { useState } from "react";

import PricePageWrapper from "../components/PricePageWrapper/PricePageWrapper";
import LineSection from "../components/LineSection/LineSection";

const PricesPage = () => {
  const location = useLocation();

  const [companies, setCompanies] = useState(companiesData);

  return (
    <PricePageWrapper>
      <OutletNavaigation locationPath={location} />
      <CostCalculation />
      <ProposalsFilter companies={companies} setCompanies={setCompanies} />
      <LineSection props></LineSection>
    </PricePageWrapper>
  );
};
export default PricesPage;
