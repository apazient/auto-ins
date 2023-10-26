import { useLocation } from "react-router-dom";
import CompanyList from "../components/CompanyList/CompanyList";
import OutletNavaigation from "../components/OutletNavigation/OutletNavigation";
import { CostCalculation } from "../components/CostCalculation/CostCalculation";
import ProposalsFilter from "../components/ProposalsFilter/ProposalsFilter";
import { useEffect, useRef, useState } from "react";
import PricePageWrapper from "../components/PricePageWrapper/PricePageWrapper";
import LineSection from "../components/LineSection/LineSection";
import {
  getPolicyByParams,
  usePolicyByParams,
} from "../services/hooks/usePolicyByParams";
import {
  chooseVclTariffDGO,
  useChooseDgo,
} from "../services/hooks/useChooseDgo";
import { responseOSAGONormalize } from "../helpers/dataNormalize/responseOSAGONormalize";
import { mergeObjectsById } from "../helpers/mergeObjectsById";
import { responseDGONormalize } from "../helpers/dataNormalize/responseDGONormalize";

import { SkeletonStyled } from "../components/Skeleton/Skeleton";
import { useQueries } from "@tanstack/react-query";

const PricesPage = () => {
  const location = useLocation();
  const proposalPolicyQuery = usePolicyByParams(location.state?.data);
  const chooseDgoQuery = useChooseDgo(location.state?.data);

  const proposalPolicy = mergeObjectsById(
    proposalPolicyQuery.data,
    responseOSAGONormalize
  );

  const [companies, setCompanies] = useState(proposalPolicy);

  const chooseDgo = mergeObjectsById(chooseDgoQuery.data, responseDGONormalize);

  return (
    <>
      <PricePageWrapper>
        <OutletNavaigation locationPath={location} />
        <CostCalculation />
        <ProposalsFilter companies={companies} setCompanies={setCompanies} />
        {proposalPolicyQuery.isLoading && <SkeletonStyled />}
        {proposalPolicyQuery.data && chooseDgoQuery.data && (
          <CompanyList proposals={companies} dgos={chooseDgo} />
        )}
      </PricePageWrapper>
    </>
  );
};
export default PricesPage;
