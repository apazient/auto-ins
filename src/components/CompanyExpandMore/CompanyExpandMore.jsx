import { useState } from "react";
import { SpriteSVG } from "../../images/SpriteSVG";
import Button from "@mui/material/Button";
import Collapse from "@mui/material/Collapse";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { ExpandIconBox } from "./CompanyExpandMoreStyled";

const CompanyExpandMore = () => {
  const [expanded, setExpanded] = useState(false);
  const rotate = !expanded ? "rotate(0deg)" : "rotate(180deg)";

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <>
      <Button
        aria-label="Докладніше"
        onClick={handleExpandClick}
        sx={{
          textTransform: "none",
          textAlign: "center",
          width: "100%",
          padding: "0px",
        }}
        endIcon={
          <ExpandIconBox sx={{ transform: rotate }}>
            <SpriteSVG name="icon-chevron-down" />
          </ExpandIconBox>
        }
      >
        Докладніше
      </Button>
      <Box sx={{ width: "100%" }}>
        <Collapse in={expanded} unmountOnExit>
          <Typography variant="body1">
            АВТОЦИВІЛКА від СК Оберіг (для юридичних осіб). Оплата виключно з
            рахунку ЮО-Страхувальника згідно автоматично сформованого
            рахунку-фактури
          </Typography>
        </Collapse>
      </Box>
    </>
  );
};

export default CompanyExpandMore;
