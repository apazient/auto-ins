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

export const CostCalculation = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const stateNumber = useSelector(getStateNumber);
  const [autoByNumberRes] = useSelector(getAutoByNumber);

  useEffect(() => {
    dispatch(autoByNumber(stateNumber));
  }, [dispatch, stateNumber]);

  const { bodyNumber, year, modelText } = autoByNumberRes;
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
          {[bodyNumber, year, modelText].map((el, index) => {
            return (
              <Item key={index}>
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
