import { Box, IconButton, Tooltip, Zoom } from "@mui/material";
import { SpriteSVG } from "../../images/SpriteSVG";
import PropTypes from "prop-types";
import { useTheme } from "@emotion/react";

const HelpCircle = ({ lableText = "", colorStyle = "" }) => {
  const theme = useTheme();
  if (!colorStyle) {
    colorStyle = theme.palette.primary.white;
  }
  return (
    <Box component="span" sx={{ marginLeft: 1 }}>
      <Tooltip
        title={lableText}
        arrow
        placement="right-end"
        TransitionComponent={Zoom}
      >
        <IconButton
          aria-label="info"
          sx={{
            padding: 0,
            width: 16,
            height: 16,
            stroke: colorStyle,
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
  lableText: PropTypes.string,
  colorStyle: PropTypes.string,
};
