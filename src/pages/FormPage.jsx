import { useLocation } from "react-router-dom";
import CompanySmall from "../components/CompanySmall/CompanySmall";
import { Wrapper } from "./FormPageStyled";
import Stepper from "../components/Stepper/Stepper";
import { Box } from "@mui/material";
import { useRef } from "react";
import OutletPageWrapper from "../components/OutletPageWrapper";

const FormPage = () => {
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from);

  return (
    <OutletPageWrapper>
      <Wrapper>
        <CompanySmall />
        <Box sx={{ display: "block" }}>
          <Stepper backLinkRef={backLinkRef} />
        </Box>
      </Wrapper>
    </OutletPageWrapper>
  );
};

export default FormPage;
