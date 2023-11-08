import Typography from "@mui/material/Typography";

import CompanyCardMedia from "../CompanyCardMedia/index";

import { ContentBox, FormContainerS } from "./CompanySmallStyled";

const CompanySmall = () => {
  return (
    <FormContainerS component="article">
      <Typography variant="subtitle1" component="h3" className="title">
        Електронний поліс ОСЦПВ
      </Typography>
      <ContentBox>
        {/* <CompanyCardMedia id={insurerId} alt={tariff.insurer.name} />
        <Typography component="span" className="leightText">
          {tariff.insurer.name}
        </Typography>
      </ContentBox>

      <ContentBox>
        <Typography component="span" variant="body1">
          Франшиза
        </Typography>
        <Typography component="span" variant="body1">
          {tariff.franchise} грн
        </Typography>
      </ContentBox>

      <ContentBox>
        <Typography component="span" variant="body1">
          Реєстрація
        </Typography>
        <Typography component="span" variant="body1">
          {registrationPlace.name}
        </Typography>
      </ContentBox>
      <ContentBox className="line" />

      <ContentBox>
        <Typography component="span" variant="subtitle1">
          До сплати:
        </Typography>
        <Typography component="span" variant="subtitle1" className="boldText">
          {price} грн
        </Typography> */}
      </ContentBox>
    </FormContainerS>
  );
};

export default CompanySmall;
