import Box from "@mui/material/Box";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useActions } from "../../hooks/useActions";
import { SpriteSVG } from "../../images/SpriteSVG";
import {
  combineError,
  getIsModalErrorOpen,
} from "../../redux/Global/selectors";
import { BlueButton } from "../../style/Global.styled";
import {
  BoxImgYellow,
  ButtonCancel,
  DialogStyled,
  TitleWrapper,
} from "./ModalErrorStyled";

const ModalError = () => {
  const isError = useSelector(getIsModalErrorOpen);
  const [open, setOpen] = useState(isError);
  const {
    setIsModalErrorOpen,
    setStateNumber,
    setCalcError,
    setGlobError,
    setRefError,
  } = useActions();
  const globalError = useSelector(combineError);
  const validError =
    "Номер не відповідає вимогам оформлення Електронного поліса встановленим МТСБУ (Моторно-транспортне страхове бюро України).";

  const navigate = useNavigate();

  const handleClose = () => {
    setOpen(false);
    navigate("/");
    setIsModalErrorOpen(false);
    setStateNumber("");
  };
  useEffect(() => {
    return () => {
      setCalcError("");
      setGlobError("");
      setRefError("");
    };
  }, [setCalcError, setGlobError, setRefError]);

  return (
    <>
      <DialogStyled open={open} onClose={handleClose}>
        <Box
          aria-label="close"
          className="closeIcon"
          component="button"
          onClick={handleClose}
        >
          <SpriteSVG name={"icon-x"} />
        </Box>
        <TitleWrapper>
          <BoxImgYellow>
            <SpriteSVG name="icon-alert-triangle" />
          </BoxImgYellow>
          <Typography variant="subtitle1" className="title" component="h2">
            Увага
          </Typography>
        </TitleWrapper>

        <DialogContent>
          <DialogContentText component="div">
            <Typography component="p" variant="body1">
              {globalError || validError}
            </Typography>
            <Typography
              component="p"
              variant="subtitle1"
              sx={{ padding: { xs: "8px 0", sm: "16px 0" } }}
            >
              Будь ласка, перевірте правильність введення.
            </Typography>
            <Typography component="p" variant="body1">
              Якщо авто зареєстровано в іншій країні, здійсніть пошук “За
              параметрами” і виберіть “Авто на іноземних номерах”.
            </Typography>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <BlueButton
            arai-label="Розрахувати по єврономеру"
            className="buttonDesktop"
            onClick={handleClose}
            sx={{ width: { xs: "100%" } }}
          >
            Розрахувати по єврономеру
          </BlueButton>
          <ButtonCancel
            className="buttonDesktop"
            onClick={handleClose}
            aria-label="скасувати"
          >
            Скасувати
          </ButtonCancel>
        </DialogActions>
      </DialogStyled>
    </>
  );
};

export default ModalError;
