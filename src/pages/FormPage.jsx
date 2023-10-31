import { useLocation } from "react-router-dom";
import { ContainerSectionPage, PageContainerS } from "../style/Global.styled";
import OutletNavaigation from "../components/OutletNavigation/OutletNavigation";

import CompanySmall from "../components/CompanySmall/CompanySmall";
import { Wrapper } from "./FormPageStyled";
import Stepper from "../components/Stepper/Stepper";
import { Box } from "@mui/material";
import { useRef } from "react";

const FormPage = () => {
  const location = useLocation();  
  const backLinkRef = useRef(location.state?.from);  

  return (
    <PageContainerS>
      <ContainerSectionPage component="div">
        <OutletNavaigation locationPath={location} />
        <Wrapper>
          <CompanySmall company={location.state?.data} />

          <Box sx={{ display: "block" }}>
            <Stepper backLinkRef={backLinkRef}/>
          </Box>
        </Wrapper>
      </ContainerSectionPage>
    </PageContainerS>
  );
};

export default FormPage;
