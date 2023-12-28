import { useLocation } from "react-router-dom";
import CompanySmall from "../components/CompanySmall/CompanySmall";
import { Wrapper } from "./FormPageStyled";
import Stepper from "../components/Stepper/Stepper";
import { Box } from "@mui/material";
import { useRef } from "react";
import OutletPageWrapper from "../components/OutletPageWrapper";
import { useSelector } from "react-redux";
import { getIsContractOSAGO } from "../redux/Global/selectors";
import BlockThank from "../components/BlockThank/index.js";

const FormPage = () => {
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from);
  const isContractOSAGO = useSelector(getIsContractOSAGO);

  return (
    <OutletPageWrapper className="formPage">
      {isContractOSAGO ? (
        <BlockThank />
      ) : (
        <Wrapper>
          <CompanySmall />
          <Box sx={{ display: "block" }}>
            <Stepper backLinkRef={backLinkRef} />
          </Box>
        </Wrapper>
      )}
    </OutletPageWrapper>
  );
};

export default FormPage;
