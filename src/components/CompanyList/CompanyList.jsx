import { useSelector } from "react-redux";
import {
  getTariffPolicyChoose,
  getTariffVcl,
} from "../../redux/Calculator/selectors";

import Company from "../Company/Company";

const CompanyList = () => {
  let dgo = null;
  const proposals = useSelector(getTariffPolicyChoose);
  const dgos = useSelector(getTariffVcl);

  if (proposals && dgos) {
    console.log(proposals, dgos);
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
    return <ul>{ViewData()}</ul>;
  }
};

export default CompanyList;
