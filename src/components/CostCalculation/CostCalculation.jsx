import { Box, Typography } from "@mui/material";
import {
  FormContainerS,
  Item,
  StackS,
  StyledDatatimeWrapper,
  StyledDatetime,
  YellowButtonS,
} from "./CostCalculationStyled";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getAutoByNumber,
  getStateNumber,
} from "../../redux/Calculator/selectors";
import { useEffect, useState } from "react";
import { autoByNumber } from "../../redux/Calculator/operations";
import { setAutoByNumber } from "../../redux/Calculator/calculatorSlice";
import GeneralInput from "../GeneralInput/GeneralInput";
import { InputStyled } from "../ByParameters/ByParameters.styled";
import { getSubmitObject } from "../../redux/byParameters/selectors";
import { setSubmitObj } from "../../redux/byParameters/byParametersSlice";
import Datetime from "react-datetime";
import { Formik, useFormik } from "formik";

import moment from "moment";

export const CostCalculation = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const stateNumber = useSelector(getStateNumber);
  const { dateFrom } = useSelector((state) => state.byParameters.submitObj);
  const [userDate, setUserDate] = useState(new Date(dateFrom));

  const autoByNumberRes = useSelector(getAutoByNumber);
  const sendObject = useSelector(getSubmitObject);

  const {
    address: { label: address },
    engineCapacity: { label: params },
  } = useSelector((state) => state.byParameters);

  useEffect(() => {
    if (stateNumber) {
      dispatch(autoByNumber(stateNumber));
    } else {
      dispatch(
        setAutoByNumber([...params.split(" - "), address.split(",")[0]])
      );
    }
  }, [dispatch, stateNumber, params, address]);

  const formik = useFormik({
    initialValues: {
      date: userDate,
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });
  // const isValidDate = (currentDate) => {
  //   return (
  //     currentDate.isBefore(Datetime.moment()) ||
  //     currentDate.isSame(Datetime.moment(), "day")
  //   );
  // };
  const handleChangeDate = (e) => {
    const newObject = {
      ...sendObject,
      dateFrom: moment(e).format("YYYY-MM-DD"),
    };
    setUserDate(e);
    dispatch(setSubmitObj(newObject));
  };

  return (
    <FormContainerS className="costCalc">
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
              return el ? (
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
              ) : null;
            })
          }
          <Formik onSubmit={formik.handleSubmit}>
            <StyledDatatimeWrapper>
              <Datetime
                id="dateFrom"
                value={dateFrom}
                onChange={handleChangeDate}
                type="date"
                name="date"
                dateFormat="DD.MM.YYYY"
                timeFormat={false}
                closeOnSelect={true}
                // isValidDate={isValidDate}
              />
            </StyledDatatimeWrapper>
          </Formik>
        </StackS>
        <YellowButtonS type="submit" onClick={() => navigate("/")}>
          Змінити параметри
        </YellowButtonS>
      </Box>
    </FormContainerS>
  );
};
