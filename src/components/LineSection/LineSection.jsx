import { Typography } from "@mui/material";
import { Line } from "./LineSectionStyled";

export const LineSection = ({ props }) => {
  const word = (companies) => {
    if (companies.length === 0) return "пропозицій";
    if (companies.length % 1 > 1) return "пропозиція";
    if (companies.length > 1) return "пропозицій";
  };
  return (
    <section>
      <Line>
        <Typography variant="body1" component="span">
          {props.length} {word(props)}
        </Typography>
      </Line>
    </section>
  );
};

export default LineSection;
