import { useSelector } from "react-redux";
import {
  getTariffPolicyChoose,
  getTariffVcl,
} from "../../redux/Calculator/selectors";
import { getIsLoading } from "../../redux/Global/selectors";
import Company from "../Company/Company";

const CompanyList = () => {
  let dgo = null;
  const proposals = useSelector(getTariffPolicyChoose);
  const dgos = useSelector(getTariffVcl);
  const isLoading = useSelector(getIsLoading);

  if (proposals && dgos) {
    const ViewData = () =>
      proposals?.map((companyObject) => {
        dgo =
          dgos?.find((el) => el?.insurerId === companyObject?.insurerId) ||
          null;
        return (
          <Company
            key={companyObject?.insurerId}
            proposal={companyObject}
            dgo={dgo}
          />
        );
      });
    return <ul>{!isLoading && ViewData()}</ul>;
  }
};

export default CompanyList;
