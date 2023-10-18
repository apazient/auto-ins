import { useLocation } from "react-router-dom";
import { ContainerSectionPage, PageContainerS } from "../style/Global.styled";
import OutletNavaigation from "../components/OutletNavigation/OutletNavigation";

import CompanySmall from "../components/CompanySmall/CompanySmall";
import { useState } from "react";

import companyForm from "../assets/mocapi/companyForm.json";
import { Wrapper } from "./FormPageStyled";

import Stepper from "../components/Stepper/Stepper";
import { Box } from "@mui/material";

const FormPage = () => {
  const location = useLocation();
  const [company, _] = useState(companyForm);

  return (
    <PageContainerS>
      <ContainerSectionPage component="div">
        <OutletNavaigation locationPath={location} />
        <Wrapper>
          <CompanySmall company={company} />

          <Box sx={{ display: "block" }}>
            <Stepper />            
          </Box>
        </Wrapper>
      </ContainerSectionPage>
    </PageContainerS>
  );
};

export default FormPage;
