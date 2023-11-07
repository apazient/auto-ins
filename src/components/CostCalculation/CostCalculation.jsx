import { Box, Typography } from "@mui/material";
import {
  FormContainerS,
  Item,
  StackS,
  YellowButtonS,
} from "./CostCalculationStyled";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getAutoByNumber,
  getStateNumber,
} from "../../redux/Calculator/selectors";
import { useEffect } from "react";
import { autoByNumber } from "../../redux/Calculator/operations";
import { setAutoByNumber } from "../../redux/Calculator/calculatorSlice";

export const CostCalculation = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const stateNumber = useSelector(getStateNumber);
  const autoByNumberRes = useSelector(getAutoByNumber);
  const { address: { label: address }, engineCapacity: { label: params } } = useSelector(state => state.byParameters);
  
  useEffect(() => {
    if (stateNumber) {
      dispatch(autoByNumber(stateNumber));
    } else {
      dispatch(setAutoByNumber([...params.split(' - '), address.split(',')[0]]))
    }
  }, [dispatch, stateNumber, params, address]);
  
  return (
    <FormContainerS>
      <Typography
        variant="formTitle"
        component="span"
        sx={{
          fontSize: { sm: "18px", lg: "22px" },
          fontWeight: { sm: "700", lg: "800" },
        }}
      >
        Розрахунок вартості:
      </Typography>
      <Box className="wrapContent">
        <StackS direction="row">

          {
            // [bodyNumber, year, modelText].map((el, index) => {
            autoByNumberRes.map((el, index) => {
            return (
              el
              ? <Item key={index}>
                <Typography
                  component="span"
                  variant="inputLable"
                  sx={{
                    fontSize: { lg: "18px" },
                    fontWeight: { lg: "600" },
                  }}
                >
                  {el}
                </Typography>
              </Item>
              : null
            );
          })}
        </StackS>
        <YellowButtonS type="submit" onClick={() => navigate("/")}>
          Змінити параметри
        </YellowButtonS>
      </Box>
    </FormContainerS>
  );
};
