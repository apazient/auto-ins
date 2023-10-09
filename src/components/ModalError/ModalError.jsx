import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { SpriteSVG } from "../../images/SpriteSVG";
import { BlueButton, WhiteButton } from "../../style/Global.styled";
import { BoxImg, DialogStyled, TitleWrapper } from "./ModalErrorStyled";

const ModalError = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <DialogStyled open={open} onClose={handleClose}>
        <TitleWrapper>
          <BoxImg>
            <SpriteSVG name="icon-alert-triangle" />
          </BoxImg>
          <Typography variant="subtitle1" className="title" component="h2">
            Увага
          </Typography>
        </TitleWrapper>

        <DialogContent>
          <DialogContentText component="div">
            <Typography component="p" variant="body1">
              Номер не відповідає вимогам оформлення Електронного поліса
              встановленим МТСБУ (Моторно-транспортне страхове бюро України).
            </Typography>
            <Typography
              component="p"
              variant="subtitle1"
              sx={{ padding: { xs: "8px 0", sm: "16px 0" } }}
            >
              Будь ласкаю перевірте правильність введення.
            </Typography>
            <Typography component="p" variant="body1">
              Якщо власник авто зареєстрований в іншій країні, виберіть
              відповідне місто реєстрації “ТЗ зареєстровано в іншій країні”.
            </Typography>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <BlueButton onClick={handleClose}>
            Розрахувати по єврономеру
          </BlueButton>
          <WhiteButton onClick={handleClose} sx={{ border: "none" }}>
            Скасувати
          </WhiteButton>
        </DialogActions>
      </DialogStyled>
    </div>
  );
};

export default ModalError;
