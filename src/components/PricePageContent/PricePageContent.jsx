import { useEffect, useState } from "react";
import { useChooseDgo } from "../../services/hooks/useChooseDgo";
import { usePolicyByParams } from "../../services/hooks/usePolicyByParams";
import ProposalsFilter from "../ProposalsFilter/ProposalsFilter";
import { SkeletonStyled } from "../Skeleton/Skeleton";
import { useDispatch, useSelector } from "react-redux";
// import { osagoByParams } from "../../redux/Calculator/operations";

export const PricePageContent = ({ proposal }) => {
  const { data, isSuccess, isLoading } = usePolicyByParams(proposal);
  const dispatch = useDispatch();
  const searchObj = useSelector((state) => state.byParameters.submitObj);
  const companies = useSelector((state) => state.calculator.tariffPolicyChoose);

  // useEffect(() => {
  //   dispatch(osagoByParams(searchObj))
  // },[searchObj, dispatch])
  // // console.log(data);
  // // const [companies, setCompanies] = useState([]);
  // const [dgo, setDgo] = useState([]);

  // const chooseDgoQuery = useChooseDgo(proposal);

  if (isLoading) {
    return <SkeletonStyled />;
  }

  // if (isSuccess && data !== companies) {
  //   setCompanies(data);
  // }

  // if (chooseDgoQuery.isSuccess && chooseDgoQuery.data !== dgo) {
  //   setDgo(chooseDgoQuery.data);
  // }
  // console.log(companies);
  // if (companies.length && dgo.length) {
  return (
    <>
      <ProposalsFilter companies={companies} dgos={dgo} />
    </>
  );
  // }

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
