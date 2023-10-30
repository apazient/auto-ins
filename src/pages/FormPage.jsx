import { useLocation } from "react-router-dom";
import { ContainerSectionPage, PageContainerS } from "../style/Global.styled";
import OutletNavigation from "../components/OutletNavigation/OutletNavigation";

import CompanySmall from "../components/CompanySmall/CompanySmall";
import { Wrapper } from "./FormPageStyled";
import Stepper from "../components/Stepper/Stepper";
import { Box } from "@mui/material";

const FormPage = () => {
  const location = useLocation();

  return (
    <PageContainerS>
      <ContainerSectionPage component="div">
        <OutletNavigation locationPath={location} />
        <Wrapper>
          <CompanySmall company={location.state?.data} />

          <Box sx={{ display: "block" }}>
            <Stepper />
          </Box>
        </Wrapper>
      </ContainerSectionPage>
    </PageContainerS>
  );
};

export default FormPage;
