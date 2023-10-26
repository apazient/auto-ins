import { useLocation } from "react-router-dom";
import CompanyList from "../components/CompanyList/CompanyList";
import OutletNavaigation from "../components/OutletNavigation/OutletNavigation";
import { CostCalculation } from "../components/CostCalculation/CostCalculation";
import ProposalsFilter from "../components/ProposalsFilter/ProposalsFilter";

import companiesData from "../assets/mocapi/companyDataList.json";
import { useState } from "react";

import PricePageWrapper from "../components/PricePageWrapper/PricePageWrapper";
import LineSection from "../components/LineSection/LineSection";
import { usePolicyByParams } from "../services/hooks/usePolicyByParams";
import { useChooseDgo } from "../services/hooks/useChooseDgo";
import { responseOSAGONormalize } from "../helpers/dataNormalize/responseOSAGONormalize";
import { mergeObjectsById } from "../helpers/mergeObjectsById";
import { responseDGONormalize } from "../helpers/dataNormalize/responseDGONormalize";

const PricesPage = () => {
  const location = useLocation();

  const [companies, setCompanies] = useState(companiesData);

  const proposalPolicyQuery = usePolicyByParams(location.state?.data);
  const chooseDgoQuery = useChooseDgo(location.state?.data);

  const proposalPolicy = mergeObjectsById(
    proposalPolicyQuery.data,
    responseOSAGONormalize
  );
  const chooseDgo = mergeObjectsById(chooseDgoQuery.data, responseDGONormalize);

  return (
    <PricePageWrapper>
      <OutletNavaigation locationPath={location} />
      <CostCalculation />
      <ProposalsFilter companies={companies} setCompanies={setCompanies} />
      <LineSection props />
      {proposalPolicyQuery.data && chooseDgoQuery.data && (
        <CompanyList proposals={proposalPolicy} dgos={chooseDgo} />
      )}
    </PricePageWrapper>
  );
};
export default PricesPage;
