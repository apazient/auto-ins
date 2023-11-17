import { Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { getTariffPolicyChoose } from "../../redux/Calculator/selectors";
import { Line } from "./LineSectionStyled";

export const LineSection = () => {
  const proposal = useSelector(getTariffPolicyChoose);
  const word = (companies) => {
    if (companies.length === 0) return "пропозицій";
    if (companies.length % 1 > 1) return "пропозиція";
    if (companies.length > 1) return "пропозицій";
  };
  return (
    <section>
      <Line>
        <Typography variant="body1" component="span">
          {proposal.length} {word(proposal)}
        </Typography>
      </Line>
    </section>
  );
};

export default LineSection;
