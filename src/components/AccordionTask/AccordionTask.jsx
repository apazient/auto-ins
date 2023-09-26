import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { useState } from "react";
import { Accordions } from "../../style/Global.styled";

export const AccordionTask = (p) => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  console.log(p);
  return (
    <div>
      {p?.map(({ id, ask, question }) => (
        <li key={id}>
          {ask}
          {question}
        </li>
      ))}
      <Accordions
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          //   expandIcon={<ExpandMoreIcon />}

          aria-controls="panel1bh-content"
          id="panel1bh-header"
        ></AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
            Aliquam eget maximus est, id dignissim quam.
          </Typography>
        </AccordionDetails>
        <AccordionSummary
          //   expandIcon={<ExpandMoreIcon />}

          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            General settings
          </Typography>
          <Typography sx={{ color: "text.secondary" }}>
            I am an accordion
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
            Aliquam eget maximus est, id dignissim quam.
          </Typography>
        </AccordionDetails>
      </Accordions>
    </div>
  );
};
