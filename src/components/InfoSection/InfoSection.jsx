import {
  Box,
  Collapse,
  Fade,
  FormControlLabel,
  Grow,
  List,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { ContainerSection, YellowButton } from "../../style/Global.styled";
import { InfoSectionContainer } from "./InfoSectionStyle";
import { TransitionGroup } from "react-transition-group";

const InfoSection = ({ text }) => {
  const [checked, setChecked] = useState(false);
  const newText = text.split("\n").filter((el) => el !== "");
  const mobText = newText.slice(0, 3);
  console.log(mobText);
  const handleChange = () => {
    console.log(checked);
    setChecked((prev) => !prev);
  };
  const splitText = (text) => {};
  return (
    <>
      <InfoSectionContainer>
        <List>
          <List
            sx={{ display: { sm: "none", md: "none", lg: "none", xl: "none" } }}
          >
            {mobText?.map((el, index) => (
              <Typography variant="body2" key={index}>
                {el}
              </Typography>
            ))}
          </List>
        </List>

        <Fade in={checked} unmountOnExit>
          <List>
            {newText?.map((el, index) => (
              <Typography variant="body2" key={index}>
                {el}
              </Typography>
            ))}
          </List>
        </Fade>
        <FormControlLabel
          control={
            <YellowButton onClick={handleChange}>
              {!checked ? "Читати далі" : "Назад"}
            </YellowButton>
          }
        />
      </InfoSectionContainer>
    </>
  );
};

export default InfoSection;
