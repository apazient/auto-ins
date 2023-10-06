import { Grid, Typography } from "@mui/material";
import { FormContainer } from "../../style/Global.styled";

const CardCompanySmall = () => {
  const data = {
    img: "logo-ukraine",
    name: "Україна",
    prise: "1000",
    address: "Київ",
    total: "1000",
  };
  const { img, name, prise, address, total } = data;
  return (
    <FormContainer>
      <Typography variant="subtitle1" component="h3">
        Електронний поліс ОСЦПВ
      </Typography>
      <Grid container>
        <Grid item>{img}</Grid>
        <Grid item>
          <Typography component="span">{name}</Typography>
        </Grid>
        <Grid item>
          <Typography component="span" variant="">
            Франшиза
          </Typography>
        </Grid>
        <Grid item>
          <Typography component="span" variant="">
            {prise}
          </Typography>
        </Grid>
        <Grid item>
          <Typography component="span" variant="">
            Реєстрація
          </Typography>
        </Grid>
        <Grid item>
          <Typography component="span" variant="">
            {address}
          </Typography>
        </Grid>
      </Grid>
    </FormContainer>
  );
};

export default CardCompanySmall;
