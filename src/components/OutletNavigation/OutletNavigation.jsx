import Box from "@mui/material/Box";
import { SpriteSVG } from "../../images/SpriteSVG";
import { BoxImg, BoxImgRotate, NavStyled } from "./OutletNavigationStyled";

const OutletNavigation = () => {
  return (
    <NavStyled component="nav">
      <BoxImg>
        <SpriteSVG name="icon-home-smaller" />
      </BoxImg>
      <BoxImgRotate>
        <SpriteSVG name="icon-chevron-down" />
      </BoxImgRotate>
    </NavStyled>
  );
};

export default OutletNavigation;
