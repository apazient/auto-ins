import { useState } from "react";
import { useChooseDgo } from "../../services/hooks/useChooseDgo";
import { usePolicyByParams } from "../../services/hooks/usePolicyByParams";
import ProposalsFilter from "../ProposalsFilter/ProposalsFilter";
import { SkeletonStyled } from "../Skeleton/Skeleton";
export const PricePageContent = ({ proposal }) => {
  const { data, isSuccess, isLoading } = usePolicyByParams(proposal);
  console.log(data);
  const [companies, setCompanies] = useState([]);
  const [dgo, setDgo] = useState([]);

  const chooseDgoQuery = useChooseDgo(proposal);

  if (isLoading) {
    return <SkeletonStyled />;
  }

  if (isSuccess && data !== companies) {
    setCompanies(data);
  }

  if (chooseDgoQuery.isSuccess && chooseDgoQuery.data !== dgo) {
    setDgo(chooseDgoQuery.data);
  }

  if (companies.length && dgo.length) {
    return (
      <>
        <ProposalsFilter insurers={companies} dgos={dgo} />
      </>
    );
  }

  //   const { data, isSuccess, isLoading } = usePolicyByParams(proposal);
  //   console.log(usePolicyByParams(proposal));
  //   const [companies, setCompanies] = useState([]);
  //   const [dgo, setDgo] = useState([]);

  //   const chooseDgoQuery = useChooseDgo(location.state?.data);
  //   console.log(data);
  //   if (isLoading) {
  //     return <SkeletonStyled />;
  //   }

  //   if (isSuccess && data !== companies) {
  //     setCompanies(data);
  //   }

  //   if (chooseDgoQuery.isSuccess && chooseDgoQuery.data !== dgo) {
  //     setDgo(chooseDgoQuery.data);
  //   }

  //   const proposalPolicy = companies.length
  //     ? mergeObjectsById(companies, responseOSAGONormalize)
  //     : [];

  //   const chooseDgo = dgo.length
  //     ? mergeObjectsById(dgo, responseDGONormalize)
  //     : [];

  //   if (proposalPolicy.length || chooseDgo.length) {
  //     return (
  //       <>
  //         <ProposalsFilter
  //           companies={proposalPolicy}
  //           setCompanies={setCompanies}
  //         />
  //         <CompanyList proposals={proposalPolicy} dgos={chooseDgo} />;
  //       </>
  //     );
  //   }
};
export default PricePageContent;
