import { useLocation } from "react-router-dom";
import CompanyList from "../components/CompanyList/CompanyList";
import OutletNavaigation from "../components/OutletNavigation/OutletNavigation";
import { ContainerSectionPage, PageContainerS } from "../style/Global.styled";
import ProposalsFilter from "../components/ProposalsFilter/ProposalsFilter";

import companiesData from "../assets/mocapi/companyDataList.json";
import { useState } from "react";
import { Line } from "./PricesPageStyled";
import { Typography } from "@mui/material";

export const PricesPage = () => {
  const location = useLocation();

  const [companies, _] = useState(companiesData);
  const word = (companies) => {
    if (companies.length === 0) return "пропозицій";
    if (companies.length === 1) return "пропозиція";
    if (companies.length > 1) return "пропозицій";


  return (
    <PageContainerS>
      <ContainerSectionPage component="div">
        <OutletNavaigation locationPath={location} />
<
        <ProposalsFilter companies={companies} setCompanies={setCompanies} />



        <section>
          <Line>
            <Typography variant="body1" component="span">
              {companies.length} {word(companies)}
            </Typography>
          </Line>
          <CompanyList companies={companies} />
        </section>

      </ContainerSectionPage>
    </PageContainerS>
  );
};

export default PricesPage;
