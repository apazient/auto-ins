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
  return (
    <ul>
      {proposals?.map((companyObject, index) => {
        dgo =
          dgos.find((dgo) => dgo.insurerId === companyObject.insurerId) || null;
        return <Company key={index} proposal={companyObject} dgo={dgo} />;
      })}
    </ul>
  );
};

export default CompanyList;
