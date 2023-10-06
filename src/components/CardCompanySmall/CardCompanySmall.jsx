import { Grid, Typography } from "@mui/material";
import { FormContainer } from "../../style/Global.styled";
import { PartnersImgs } from "../Partners/PartnersImgs";
import { FormContainerS } from "./CardCompanySmallStyled";

const CardCompanySmall = ({ company }) => {
  // "calculator": {
  //   "idFransize": 0,
  //   "idCompany": 0,
  //   "idRegion": 0,
  //   "idCity": 0,
  //   "idTermin": 0,
  //   "idSubTypeTs": 0,
  //   "dateStartCon": "2023-10-06T15:21:54.419Z",
  //   "isLygot": true,
  //   "setMonth": "string"
  // }

  //    "raitingCompany": 5,
  // "idCompany": 2,
  // "nameCompany": "Євроінс",
  // "fransizes": [
  // {
  // "sum": 2584,
  // "idFransize": 1,
  // "nameFransize": "0"

  // {
  //
  //   "idCompany": 2,
  //   "nameCompany": "Євроінс",
  //   "sum": 2584,
  //   "city": "Київ",
  //   "nameFransize": "0"
  // }
  const { idCompany, nameCompany, nameFransize, sum, city } = company[0];
  console.log(company);
  return (
    <FormContainerS>
      <Typography variant="subtitle1" component="h3">
        Електронний поліс ОСЦПВ
      </Typography>
      <Grid container>
        <Grid item sm={6}>
          <PartnersImgs
            sx={{ width: { sm: "125px" } }}
            data={{ id: String(idCompany), imgAlt: nameCompany || "ОСЦП" }}
          />
        </Grid>
        <Grid item sm={6}>
          <Typography component="span">{nameCompany}</Typography>
        </Grid>
        <Grid item sm={6}>
          <Typography component="span" variant="body1">
            Франшиза
          </Typography>
        </Grid>
        <Grid item sm={6}>
          <Typography component="span" variant="body1">
            {nameFransize} грн
          </Typography>
        </Grid>
        <Grid item sm={6}>
          <Typography component="span" variant="body1">
            Реєстрація
          </Typography>
        </Grid>
        <Grid item sm={6}>
          <Typography component="span" variant="body1">
            {city}
          </Typography>
        </Grid>
        <Grid item sm={6}>
          <Typography component="span" variant="subtitle1">
            До сплати
          </Typography>
        </Grid>
        <Grid item sm={6}>
          <Typography component="span" variant="subtitle1">
            {sum} грн
          </Typography>
        </Grid>
      </Grid>
    </FormContainerS>
  );
};

export default CardCompanySmall;
