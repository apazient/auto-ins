import Typography from "@mui/material/Typography";
import { useActions } from "../../hooks/useActions";
import { SpriteSVG } from "../../images/SpriteSVG";

import { BoxImgS, ButtonS, FormContainerS } from "./BlockThankStyled";

export const BlockThank = () => {
  const { setContractData } = useActions();

  return (
    <FormContainerS component="article">
      <BoxImgS>
        <SpriteSVG name="icon-check-circle"></SpriteSVG>
      </BoxImgS>
      <Typography
        component="h2"
        variant="formTitle"
        sx={{ marginBottom: { xs: "4px", sm: "8px" } }}
      >
        Дякуємо за замовлення!
      </Typography>
      <Typography
        variant="body1"
        sx={{ marginBottom: { xs: "16px", sm: "32px", lg: "48px" } }}
      >
        На Вашу електронну пошту надіслано проєкт договору/посилання на оплату.
      </Typography>
      <ButtonS to="/" onClick={() => setContractData({})}>
        На головну
      </ButtonS>
    </FormContainerS>
  );
};
