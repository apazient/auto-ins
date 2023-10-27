import { useLocation } from "react-router-dom";
import CompanyList from "../components/CompanyList/CompanyList";
import OutletNavaigation from "../components/OutletNavigation/OutletNavigation";
import { CostCalculation } from "../components/CostCalculation/CostCalculation";
import ProposalsFilter from "../components/ProposalsFilter/ProposalsFilter";
import { useEffect, useState } from "react";
import PricePageWrapper from "../components/PricePageWrapper/PricePageWrapper";

import { usePolicyByParams } from "../services/hooks/usePolicyByParams";
import { useChooseDgo } from "../services/hooks/useChooseDgo";
import { responseOSAGONormalize } from "../helpers/dataNormalize/responseOSAGONormalize";
import { mergeObjectsById } from "../helpers/mergeObjectsById";
import { responseDGONormalize } from "../helpers/dataNormalize/responseDGONormalize";

import { SkeletonStyled } from "../components/Skeleton/Skeleton";

const PricesPage = () => {
  const location = useLocation();
  const { data, isSuccess, isLoading } = usePolicyByParams(
    location.state?.data
  );
  const [companies, setCompanies] = useState([]);
  const [dgo, setDgo] = useState([]);

  const chooseDgoQuery = useChooseDgo(location.state?.data);

  if (isSuccess && data !== companies) {
    setCompanies(data);
  }

  if (chooseDgoQuery.isSuccess && chooseDgoQuery.data !== dgo) {
    setDgo(chooseDgoQuery.data);
  }

  const proposalPolicy = companies.length
    ? mergeObjectsById(companies, responseOSAGONormalize)
    : [];

  const chooseDgo = dgo.length
    ? mergeObjectsById(dgo, responseDGONormalize)
    : [];

  return (
    <>
      <PricePageWrapper>
        <OutletNavaigation locationPath={location} />
        <CostCalculation />
        {proposalPolicy.length && (
          <ProposalsFilter
            companies={proposalPolicy}
            setCompanies={setCompanies}
          />
        )}
        {isLoading && <SkeletonStyled />}
        {proposalPolicy.length && chooseDgo.length && (
          <CompanyList proposals={proposalPolicy} dgos={chooseDgo} />
        )}
      </PricePageWrapper>
    </>
  );
};
export default PricesPage;
