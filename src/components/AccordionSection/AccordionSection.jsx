import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { SpriteSVG } from "../../images/SpriteSVG";
import {
  Accordions,
  AccordionsDetails,
  AccordionsSummary,
  ContAccordion,
  MainText,
} from "./AccordionSectionStyle";
import { faq } from "../../assets/utils/faq";
export const AccordionSection = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <section>
      <ContAccordion id="питання-відповіді">
        <MainText variant="h2">Питання - Відповіді</MainText>
        {faq.map(({ question, answer }, index) => {
          return (
            <Accordions
              key={index}
              expanded={expanded === index}
              onChange={handleChange(index)}
              TransitionProps={{ unmountOnExit: true }}
            >
              <AccordionsSummary
                aria-controls={index + "-content"}
                id={index + "-header"}
                expandIcon={
                  <Box sx={{ stroke: "#FFFF", width: "32px", height: "32px" }}>
                    <SpriteSVG name={"icon-chevron-down"} />
                  </Box>
                }
              >
                <Typography variant="subtitle1" component="h3">
                  {question}
                </Typography>
              </AccordionsSummary>
              <AccordionsDetails>
                <Typography variant="body1">{answer}</Typography>
              </AccordionsDetails>
            </Accordions>
          );
        })}
      </ContAccordion>
    </section>
  );
};
