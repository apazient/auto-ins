import { styled } from "@mui/material/styles";
import { SpriteSVG } from "../../images/SpriteSVG";

export const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <SpriteSVG name={"icon-chevron-down"} {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default ExpandMore;
