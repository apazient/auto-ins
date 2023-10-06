import { useLocation } from "react-router-dom";
import { FormContainer } from "../../style/Global.styled";
import BtnBack from "../Buttons/BtnBack";
import BtnSubmit from "../Buttons/BtnSubmit";
import { useMediaQuery, useTheme } from "@mui/material";
import { BtnBoxS } from "./FormContactsStyled";

const FormContacts = () => {
  const location = useLocation();
  console.log(location);
  const theme = useTheme();
  // const isLargeScreen = useMediaQuery(`${theme.breakpoints.up("xs")}`);
  const isLargeScreen = useMediaQuery(`${theme.breakpoints.up("sm")}`);
  console.log(isLargeScreen);

  return (
    <FormContainer>
      <h2 style={{ color: "black" }}>FormContacts</h2>
      <form>
        <label>
          <input></input>
        </label>
        <p style={{ color: "black" }}>
          *ПЕРЕКОНАЙТЕСЬ ЩО ПОШТУ ВКАЗАНО КОРЕКТНО. НА ВКАЗАНУ ВАМИ ЕЛЕКТРОННУ
          ПОШТУ БУДЕ НАДІСЛАНО ДОГОВІР СТРАХУВАННЯ.
        </p>
        <label>
          <input></input>
        </label>
      </form>
      <BtnBoxS>
        {isLargeScreen ? (
          <>
          <BtnBack />
          <BtnSubmit />
        </>
          
        ) : (
          <>
            <BtnSubmit />
            <BtnBack />
          </>
        )}
      </BtnBoxS>
    </FormContainer>
  );
};

export default FormContacts;
