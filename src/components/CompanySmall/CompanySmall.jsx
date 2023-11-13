/* eslint-disable react/display-name */
import React from "react";

import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import { getParamsFromUrl } from "../../redux/Global/selectors";
import CompanyCardMedia from "../CompanyCardMedia/index";
import { ContentBox, FormContainerS } from "./CompanySmallStyled";

const CompanySmall = React.memo(() => {
  const paramsFromUrl = useSelector(getParamsFromUrl);

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
          {paramsFromUrl?.registrationPlace?.name}
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
