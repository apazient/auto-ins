import Company from "../Company/Company";

const CompanyList = ({ companies }) => {
  return (
    <ul>
      {companies?.map((companyObject, index) => {
        return <Company key={index} companyObject={companyObject} />;
      })}
    </ul>
  );
};

export default CompanyList;
