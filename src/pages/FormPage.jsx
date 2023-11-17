import { useLocation } from "react-router-dom";
import CompanySmall from "../components/CompanySmall/CompanySmall";
import { Wrapper } from "./FormPageStyled";
import Stepper from "../components/Stepper/Stepper";
import { Box } from "@mui/material";
import { useEffect, useRef } from "react";
import OutletPageWrapper from "../components/OutletPageWrapper";
import { useDispatch, useSelector } from "react-redux";
import {
  allAutoMakers,
  autoByMakerAndModel,
} from "../redux/References/operations";
import { getAutoByNumber } from "../redux/References/selectors";

const FormPage = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const autoByNumber = useSelector(getAutoByNumber);
  const backLinkRef = useRef(location.state?.from);

  useEffect(() => {
    let subscribed = true;
    if (subscribed) {
      dispatch(allAutoMakers());
      dispatch(autoByMakerAndModel());
    }
    return () => {
      subscribed = false;
    };
  }, [dispatch]);

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
