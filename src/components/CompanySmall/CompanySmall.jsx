/* eslint-disable react/display-name */
import React, { useEffect } from "react";

import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import {
  getGlobalCustomerData,
  getParamsFromUrl,
} from "../../redux/Global/selectors";
import CompanyCardMedia from "../CompanyCardMedia/index";
import { ContentBox, FormContainerS } from "./CompanySmallStyled";
import { getSubmitObject } from "../../redux/byParameters/selectors";

const CompanySmall = React.memo(() => {
  const paramsFromUrl =
    useSelector(getParamsFromUrl) ||
    JSON.parse(localStorage.getItem("insurer")); // потрібно додати збереження даного стейту в LS та його очистку після оформлення стархування
  const { dateFrom, outsideUkraine } = useSelector(getSubmitObject);

  useEffect(() => {
    // додає дані для відображення зображення після рефрешу сторінки
    paramsFromUrl &&
      localStorage.setItem("insurer", JSON.stringify(paramsFromUrl));
  }, [paramsFromUrl]);

  return (
    <FormContainerS component="article">
      <Typography variant="subtitle1" component="h3" className="title">
        Електронний поліс ОСЦПВ
      </Typography>
      <ContentBox>
        <CompanyCardMedia
          id={paramsFromUrl?.insurer.id}
          alt={paramsFromUrl?.insurer.name}
        />
        <Typography component="span" className="leightText">
          {paramsFromUrl?.insurer.name.replace(/,[^,]+$/, "")}
        </Typography>
      </ContentBox>

      <ContentBox>
        <Typography component="span" variant="body1">
          Франшиза
        </Typography>
        <Typography component="span" variant="body1">
          {paramsFromUrl?.franchise} грн
        </Typography>
      </ContentBox>

      <ContentBox>
        <Typography component="span" variant="body1">
          Реєстрація
        </Typography>
        <Typography component="span" variant="body1">
          {outsideUkraine
            ? "Без реєстрації"
            : paramsFromUrl?.registrationPlace?.name}
        </Typography>
      </ContentBox>
      <ContentBox>
        <Typography component="span" variant="body1">
          Початок дії поліса
        </Typography>
        <Typography component="span" variant="body1">
          {dateFrom}
        </Typography>
      </ContentBox>
      <ContentBox className="line" />

      <ContentBox>
        <Typography component="span" variant="subtitle1">
          До сплати:
        </Typography>
        <Typography component="span" variant="subtitle1" className="boldText">
          {paramsFromUrl?.price} грн
        </Typography>
      </ContentBox>
    </FormContainerS>
  );
});
export default CompanySmall;
