import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { SpriteSVG } from "../../images/SpriteSVG";
import {
  BoxImg,
  BoxImgRotate,
  BreadcrumbsStyled,
} from "./OutletNavigationStyled";
import { NavLink } from "react-router-dom";

const OutletNavigation = ({ locationPath }) => {
  const [location, _] = useState(locationPath);
  const currentLink = (location) => {
    switch (location.pathname) {
      case "/prices":
        return "/prices";
      case "/form":
        return "/prices/form";
      default:
        "/";
    }
  };

  const crumbs = currentLink(location)
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb) => {
      // currentLink = +`/${crumb}`;
      crumb === "prices" ? (crumb = "Калькулятор") : (crumb = "Ваші дані");

      return (
        <NavLink
          key={crumb}
          component="span"
          className="navLink"
          to={location.state?.from}
        >
          {crumb}
        </NavLink>
      );
    });

  return (
    <BreadcrumbsStyled
      aria-label="breadcrumb"
      separator={
        <BoxImgRotate>
          <SpriteSVG name="icon-chevron-down" />
        </BoxImgRotate>
      }
    >
      <BoxImg to="/">
        <SpriteSVG name="icon-home-smaller" />
      </BoxImg>
      {crumbs}
    </BreadcrumbsStyled>
  );
};

export default OutletNavigation;
OutletNavigation.propTypes = {
  locationPath: PropTypes.object,
};
