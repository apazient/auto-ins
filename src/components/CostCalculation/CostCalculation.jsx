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

import {
  getAddressAndAuto,
  getSubmitObject,
} from "../../redux/byParameters/selectors";
import { setSubmitObj } from "../../redux/byParameters/byParametersSlice";
import { Formik, useFormik } from "formik";
import { getIsLoading } from "../../redux/Global/selectors";

import { SpriteSVG } from "../../images/SpriteSVG";
import { getAutoByNumber } from "../../redux/References/selectors";

import {
  paramsByNumberNormalize,
  pramsByParamsNormalize,
} from "../../helpers/dataNormalize/paramsNormalize";

export const CostCalculation = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const stateNumber = useSelector(getStateNumber);
  const { dateFrom } = useSelector(getSubmitObject);
  const autoByNumber = useSelector(getAutoByNumber);
  const submitObject = useSelector(getSubmitObject);
  const isLoading = useSelector(getIsLoading);
  const autoByParams = useSelector(getAddressAndAuto);
  const [userDate, setUserDate] = useState(new Date(dateFrom));
  const [items, setItems] = useState([]);
  let inputProps = {
    disabled: isLoading,
  };

  useEffect(() => {
    if (autoByNumber.length > 0) {
      setItems(paramsByNumberNormalize(autoByNumber));
    }
    if (autoByNumber.length === 0 && stateNumber === "") {
      setItems(pramsByParamsNormalize(autoByParams));
    }
  }, [stateNumber, autoByParams, autoByNumber]);

  useEffect(() => {
    return () => {
      setItems([]);
    };
  }, []);

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
      ...submitObject,
      dateFrom: moment(e).format("YYYY-MM-DD"),
    };

    setUserDate(e);
    dispatch(setSubmitObj(newObject));
  };

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
