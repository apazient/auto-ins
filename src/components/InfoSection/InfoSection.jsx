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
import { InfoSectionContainer, ListText } from "./InfoSectionStyle";
import { TransitionGroup } from "react-transition-group";

const InfoSection = ({ text }) => {
  const [checked, setChecked] = useState(false);
  const newText = text.split("\n").filter((el) => el !== "");
  const mobText = newText.slice(0, 3);

  const handleChange = () => {
    console.log(checked);
    setChecked((prev) => !prev);
  };
  const splitText = (text) => {
    const vieportWidth = window.visualViewport.width;
    const splitedText = text.split("\n").filter((el) => el !== "");
    const renderText = [];

    if (vieportWidth < 768) {
      renderText.push(splitedText.slice(0, 2));
      renderText.push(splitedText.slice(2));
      return renderText;
    }
    if (vieportWidth >= 768 && vieportWidth < 1080) {
      renderText.push(splitedText.slice(0, 3));
      renderText.push(splitedText.slice(3));
      return renderText;
    }
    if (vieportWidth >= 1080) {
      renderText.push(splitedText.slice(0, 13));
      renderText.push(splitedText.slice(13));
      return renderText;
    }
  };

  return (
    <section>
      <InfoSectionContainer>
        <Box>
          <ListText>
            {splitText(text)[0]?.map((el, index) => (
              <Typography
                variant="body2"
                key={index}
                sx={{ width: "50%", marginBottom: { sx: "", md: "14px" } }}
              >
                {el}
              </Typography>
            ))}
          </ListText>
        </Box>

        <Fade in={checked} unmountOnExit>
          <ListText>
            {splitText(text)[1]?.map((el, index) => (
              <Typography variant="body2" key={index} sx={{ width: "50%" }}>
                {el}
              </Typography>
            ))}
          </ListText>
        </Fade>
        <FormControlLabel
          sx={{ display: "block", textAlign: "center" }}
          control={
            <YellowButton onClick={handleChange}>
              {!checked ? "Читати далі" : "Назад"}
            </YellowButton>
          }
        />
      </InfoSectionContainer>
    </section>
  );
};

export default InfoSection;
