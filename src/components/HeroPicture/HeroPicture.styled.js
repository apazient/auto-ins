import { Box, styled } from "@mui/material";
import car_mobile from "../../images/heroCar/car_mobile.jpg";
import car_mobile2x from "../../images/heroCar/car_mobile@2x.jpg";
import car_mobile3x from "../../images/heroCar/car_mobile@3x.jpg";
import car_tablet from "../../images/heroCar/car_tablet.jpg";
import car_tablet2x from "../../images/heroCar/car_tablet@2x.jpg";
import car_tablet3x from "../../images/heroCar/car_tablet@3x.jpg";
import car_desktop from "../../images/heroCar/car_desktop.jpg";
import car_desktop2x from "../../images/heroCar/car_desktop@2x.jpg";
import car_desktop3x from "../../images/heroCar/car_desktop@3x.jpg";

export const PictureContainer = styled(Box)(({ theme }) => ({
  marginLeft: "auto",
  marginRight: "auto",
  width: "100%",
  height: 200,
  background: `url(${car_mobile})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundColor: `${theme.palette.primary.secondaryDark}`,

  "@media (min-device-pixel-ratio: 2),(-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi), (min-resolution: 2dppx)":
    {
      background: `url(${car_mobile2x})`,
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    },
  "@media (min-device-pixel-ratio: 3), (-webkit-min-device-pixel-ratio: 3), (min-resolution: 288dpi), (min-resolution: 3dppx)":
    {
      background: `url(${car_mobile3x})`,
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    },
  [theme.breakpoints.up("sm")]: {
    width: 744,
    height: 341,
    background: `url(${car_tablet})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",

    "@media (min-device-pixel-ratio: 2),(-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi), (min-resolution: 2dppx)":
      {
        background: `url(${car_tablet2x})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      },
    "@media (min-device-pixel-ratio: 3), (-webkit-min-device-pixel-ratio: 3), (min-resolution: 288dpi), (min-resolution: 3dppx)":
      {
        background: `url(${car_tablet3x})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      },
  },
  [theme.breakpoints.up("lg")]: {
    width: 1400,
    height: 434,
    background: `url(${car_desktop})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",

    "@media (min-device-pixel-ratio: 2),(-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi), (min-resolution: 2dppx)":
      {
        background: `url(${car_desktop2x})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      },
    "@media (min-device-pixel-ratio: 3), (-webkit-min-device-pixel-ratio: 3), (min-resolution: 288dpi), (min-resolution: 3dppx)":
      {
        background: `url(${car_desktop3x})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      },
  },
}));
