import Datetime from "react-datetime";
import moment from "moment";
import "moment/locale/uk";
import "react-datetime/css/react-datetime.css";
import { Box, Typography } from "@mui/material";
import {
  BoxImg,
  FormContainerS,
  Item,
  StackS,
  StyledDatatimeWrapper,
  StyledDatetime,
  YellowButtonS,
} from "./CostCalculationStyled";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getStateNumber } from "../../redux/Calculator/selectors";
import { useEffect, useState } from "react";

import { getSubmitObject } from "../../redux/byParameters/selectors";
import { setSubmitObj } from "../../redux/byParameters/byParametersSlice";
import { Formik, useFormik } from "formik";
import { getIsLoading } from "../../redux/Global/selectors";

import { SpriteSVG } from "../../images/SpriteSVG";
import { getAutoByNumber } from "../../redux/References/selectors";
import { autoByNumber } from "../../redux/References/operations";

export const CostCalculation = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const stateNumber = useSelector(getStateNumber);
  const { dateFrom } = useSelector((state) => state.byParameters.submitObj);
  const [userDate, setUserDate] = useState(new Date(dateFrom));

  const autoByNumberRes = useSelector(getAutoByNumber);
  const sendObject = useSelector(getSubmitObject);
  const isLoading = useSelector(getIsLoading);

  const {
    address: { label: address },
    engineCapacity: { label: params },
  } = useSelector((state) => state.byParameters);

  useEffect(() => {
    if (stateNumber !== "") {
      dispatch(autoByNumber(stateNumber));
    } else {
      // dispatch(
      //   setAutoByNumber([...params.split(" - "), address.split(",")[0]])
      // );
    }
  }, [dispatch, stateNumber, params, address]);

  const formik = useFormik({
    initialValues: {
      date: userDate,
    },
    onSubmit: (values) => {},
  });

  const valid = (current) => {
    const inThreeMonths = Datetime.moment().add(3, "months");
    return (
      current.isAfter(Datetime.moment()) && current.isBefore(inThreeMonths)
    );
  };
  const handleChangeDate = (e) => {
    const newObject = {
      ...sendObject,
      dateFrom: moment(e).format("YYYY-MM-DD"),
    };
    // dispatch(setIsLoading(true));
    setUserDate(e);
    dispatch(setSubmitObj(newObject));
  };
  let inputProps = {
    disabled: isLoading,
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
          {autoByNumberRes.map((el) => {
            if (el) {
              const { bodyNumber, year, modelText } = el;
              el = [bodyNumber, year, modelText];
              return el.map((item, index) => (
                <Item key={index}>
                  <Typography
                    component="span"
                    variant="inputLable"
                    sx={{
                      fontSize: { lg: "18px" },
                      fontWeight: { lg: "600" },
                    }}
                  >
                    {item}
                  </Typography>
                </Item>
              ));
            } else {
              return null;
            }
          })}
          <Formik onSubmit={formik.handleSubmit}>
            <StyledDatatimeWrapper>
              <label htmlFor="dateFrom" />
              Дата початку дії поліса:
              <Datetime
                id="dateFrom"
                value={dateFrom}
                onChange={handleChangeDate}
                type="date"
                name="date"
                dateFormat="YYYY-MM-DD"
                timeFormat={false}
                closeOnSelect={true}
                isValidDate={valid}
                locale="uk"
                inputProps={inputProps}
                className="datePicker"
              />
              <BoxImg>
                <SpriteSVG name={"icon-calendar"} />
              </BoxImg>
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
