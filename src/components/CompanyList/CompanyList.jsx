import Company from "../Company/Company";

const CompanyList = ({ proposals, dgos }) => {
  let dgo = null;
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
