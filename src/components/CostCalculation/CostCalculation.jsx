/* eslint-disable react/display-name */
import React from "react";
import { Box, Typography } from "@mui/material";
import {
  FormContainerS,
  Item,
  StackS,
  YellowButtonS,
} from "./CostCalculationStyled";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getStateNumber } from "../../redux/Calculator/selectors";
import { useEffect, useState } from "react";
import { getAddressAndAuto } from "../../redux/byParameters/selectors";
import { getAutoByNumber } from "../../redux/References/selectors";
import {
  paramsByNumberNormalize,
  pramsByParamsNormalize,
} from "../../helpers/dataNormalize/paramsNormalize";

export const CostCalculation = React.memo(() => {
  const navigate = useNavigate();
  const stateNumber = useSelector(getStateNumber);
  const autoByNumber = useSelector(getAutoByNumber);
  const autoByParams = useSelector(getAddressAndAuto);
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (autoByNumber?.length > 0) {
      setItems(paramsByNumberNormalize(autoByNumber));
    }
    if (autoByNumber?.length === 0 && stateNumber === "") {
      setItems(pramsByParamsNormalize(autoByParams));
    }
  }, [stateNumber, autoByParams, autoByNumber]);

  useEffect(() => {
    return () => {
      setItems([]);
    };
  }, []);
  return (
    <FormContainerS className="costCalc">
      <Typography variant="formTitle" component="span" className="formTitle">
        Розрахунок вартості:
      </Typography>
      <Box className="wrapContent">
        <StackS direction="row">
          {items.map((el, index) => {
            return (
              <Item key={index}>
                <Typography
                  component="span"
                  variant="inputLable"
                  className="inputLable"
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
});
