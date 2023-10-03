import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import Paper from "@mui/material/Paper";

import Box from "@mui/material/Box";
import { YellowButton } from "../../style/Global.styled";
import { Stack } from "@mui/system";
import CheckBox from "../CheckBox/CheckBox";
import { CardStyled, WrapperStyled } from "./CompanyStyled";
import HelpCircle from "../HelpCircle/HelpCircle";

const Company = () => {
  const prop = {
    name: "Євронінс Україна",
    price: "1000 грн",
  };
  const { name, price } = prop;

  return (
    <CardStyled>
      <WrapperStyled></WrapperStyled>
      <WrapperStyled>
        <WrapperStyled>
          <Typography>ОСЦПВ від {name}</Typography>
          <Stack>
            <HelpCircle lableText="Пояснення до франчизи"></HelpCircle>
          </Stack>
          <CheckBox label="Свідомий захист"></CheckBox>
        </WrapperStyled>
        <WrapperStyled>
          <Typography>Вартість</Typography>
          <Typography>{price}</Typography>
          <YellowButton>Придбати</YellowButton>
        </WrapperStyled>
      </WrapperStyled>
    </CardStyled>
  );
};

export default Company;
