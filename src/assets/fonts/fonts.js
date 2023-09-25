import OpenSansWoff2 from "./OpenSans-Regular.woff2";
import OpenSansWoff from "./OpenSans-Regular.woff";
import OpenSansBoldWoff2 from "./OpenSans-Bold.woff2";
import OpenSansBoldWoff from "./OpenSans-Bold.woff";
import OpenSansExtraBoldWoff2 from "./OpenSans-ExtraBold.woff2";
import OpenSansExtraBoldWoff from "./OpenSans-ExtraBold.woff";
import OpenSansSemiBoldWoff2 from "./OpenSans-SemiBold.woff2";
import OpenSansSemiBoldWoff from "./OpenSans-SemiBold.woff";

export const openSansRegular = {
  fontFamily: "OpenSans-Regular",
  fontStyle: "normal",
  fontWeight: 400,
  src: `url(${OpenSansWoff}) format('woff'), url(${OpenSansWoff2}) format('woff2')`,
};
export const openSansSemiBold = {
  fontFamily: "OpenSans-SemiBold",
  fontStyle: "normal",
  fontWeight: 600,
  src: `url(${OpenSansSemiBoldWoff}) format('woff'), url(${OpenSansSemiBoldWoff2}) format('woff2')`,
};
export const openSansBold = {
  fontFamily: "OpenSans-Bold",
  fontStyle: "normal",
  fontWeight: 700,
  src: `url(${OpenSansBoldWoff}) format('woff'), url(${OpenSansBoldWoff2}) format('woff2')`,
};
export const openSansExtraBold = {
  fontFamily: "OpenSans-ExtraBold",
  fontStyle: "normal",
  fontWeight: 800,
  src: `url(${OpenSansExtraBoldWoff}) format('woff'), url(${OpenSansExtraBoldWoff2}) format('woff2')`,
};
