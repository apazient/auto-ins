import { Box, IconButton, Tooltip, Zoom } from "@mui/material";
import { SpriteSVG } from "../../images/SpriteSVG";
import PropTypes from "prop-types";
import { useTheme } from "@emotion/react";

const HelpCircle = ({ lableText = "", color = "" }) => {
  const theme = useTheme();
  if (!color) {
    color = theme.palette.primary.white;
  }
  return (
    <Box component="span" sx={{ marginLeft: 1 }}>
      <Tooltip
        title={lableText}
        arrow
        placement="top"
        TransitionComponent={Zoom}
      >
        <IconButton
          aria-label="info"
          sx={{
            padding: 0,
            width: 16,
            height: 16,
            stroke: color,
            fill: "transparent",
          }}
        >
          <SpriteSVG name="icon-help-circle" />
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default HelpCircle;

HelpCircle.propTypes = {
  lableText: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string
  ]),
  color: PropTypes.string,
  colorBG: PropTypes.string,
};
