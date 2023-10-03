import { Box, IconButton, Tooltip, Zoom } from "@mui/material";
import { SpriteSVG } from "../../images/SpriteSVG";
import PropTypes from "prop-types";

const HelpCircle = ({ lableText }) => {
  return (
    <Box component="span">
      <Tooltip
        title={lableText}
        arrow
        placement="right-end"
        TransitionComponent={Zoom}
      >
        <IconButton
          aria-label="info"
          sx={{ padding: 0, width: 16, height: 16 }}
        >
          <SpriteSVG name="icon-help-circle" />
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default HelpCircle;

HelpCircle.propTypes = {
  lableText: PropTypes.string.isRequired,
};
