import { Box, Typography } from "@mui/material";
import {
  BoxImg,
  FormContainerS,
  Item,
  StackS,
  YellowButtonS,
} from "./CostCalculationStyled";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getStateCalculator,
  getStateNumber,
} from "../../redux/Calculator/selectors";
import { useEffect, useState } from "react";

import {
  getAddressAndAuto,
  getSubmitObject,
} from "../../redux/byParameters/selectors";
import { setSubmitObj } from "../../redux/byParameters/byParametersSlice";
import { Formik, useFormik } from "formik";

import { SpriteSVG } from "../../images/SpriteSVG";
import { getAutoByNumber } from "../../redux/References/selectors";

import {
  paramsByNumberNormalize,
  pramsByParamsNormalize,
} from "../../helpers/dataNormalize/paramsNormalize";

import DatePicker, { registerLocale, setDefaultLocale } from "react-datepicker";
import moment from "moment/moment";
import "react-datepicker/dist/react-datepicker.css";
import { uk } from "date-fns/locale";
import addDays from "date-fns/addDays";
import addMonths from "date-fns/addMonths";

export const CostCalculation = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const stateNumber = useSelector(getStateNumber);
  const { dateFrom } = useSelector(getSubmitObject);
  const autoByNumber = useSelector(getAutoByNumber);
  const submitObject = useSelector(getSubmitObject);
  const isLoagingCalculator = useSelector(getStateCalculator);
  const autoByParams = useSelector(getAddressAndAuto);
  const [userDate, setUserDate] = useState(new Date(dateFrom));

  const [items, setItems] = useState([]);

  registerLocale("uk", uk);
  setDefaultLocale("uk");
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
            <Box>
              <label htmlFor="dateFrom" />
              Дата початку дії поліса:
              <DatePicker
                id="dateFrom"
                value={dateFrom}
                closeOnScroll={(e) => e.target === document}
                onChange={handleChangeDate}
                disabled={isLoagingCalculator}
                name="date"
                dateFormat="yyyy-MM-dd"
                showIcon={true}
                minDate={addDays(new Date(), 1)}
                maxDate={addMonths(new Date(), 3)}
                startDate={dateFrom}
                locale="uk"
                icon={
                  <BoxImg>
                    <SpriteSVG name={"icon-calendar"} />
                  </BoxImg>
                }
              />
            </Box>
          </Formik>
        </StackS>
        <YellowButtonS type="submit" onClick={() => navigate("/")}>
          Змінити параметри
        </YellowButtonS>
      </Box>
    </FormContainerS>
  );
};
