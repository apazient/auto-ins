import { Box, Typography } from "@mui/material";
import { useState } from "react";
import { SpriteSVG } from "../../images/SpriteSVG";
import {
  Accordions,
  AccordionsDetails,
  AccordionsSummary,
  ContAccordion,
  MainText,
} from "./AccordionSectionStyle";

export const AccordionSection = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <section>
      <ContAccordion id="питання-відповіді">
        <MainText variant="h2">Питання - Відповіді</MainText>

        <Accordions
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionsSummary
            aria-controls="panel1bh-content"
            id="panel1bh-header"
            expandIcon={
              <Box sx={{ stroke: "#FFFF", width: "32px", height: "32px" }}>
                <SpriteSVG name={"icon-chevron-down"} />
              </Box>
            }
          >
            <Typography variant="subtitle1">
              Як я можу оформити автоцивілку через вашу платформу?
            </Typography>
          </AccordionsSummary>
          <AccordionsDetails>
            <Typography variant="body1">
              Ви можете легко оформити автоцивілку, заповнивши просту форму на
              нашому сайті. Після введення всіх необхідних даних, система
              автоматично згенерує найкращі пропозиції для вас.
            </Typography>
          </AccordionsDetails>
        </Accordions>
        <Accordions
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionsSummary
            aria-controls="panel2bh-content"
            id="panel2bh-header"
            expandIcon={
              <Box sx={{ stroke: "#FFFF", width: "32px", height: "32px" }}>
                <SpriteSVG name={"icon-chevron-down"} />
              </Box>
            }
          >
            <Typography variant="subtitle1">
              Чи безпечно надавати свої особисті дані на вашому сайті?
            </Typography>
          </AccordionsSummary>
          <AccordionsDetails>
            <Typography variant="body1">
              Так, ми гарантуємо високий рівень захисту ваших особистих даних.
              Вся інформація передається через захищені з´єднання, і ми не
              передаємо ваши дані третім особам.
            </Typography>
          </AccordionsDetails>
        </Accordions>
        <Accordions
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionsSummary
            aria-controls="panel3bh-content"
            id="panel3bh-header"
            expandIcon={
              <Box sx={{ stroke: "#FFFF", width: "32px", height: "32px" }}>
                <SpriteSVG name={"icon-chevron-down"} />
              </Box>
            }
          >
            <Typography variant="subtitle1">
              Як я можу зекономити на оформленні автоцивілки через вашу
              платформу?
            </Typography>
          </AccordionsSummary>
          <AccordionsDetails>
            <Typography variant="body1">
              Ми пропонуємо вам прямий доступ до найкращих страхових пропозицій
              без додаткових посередницьких витрат, що дозволяє зекономити ваші
              гроші.
            </Typography>
          </AccordionsDetails>
        </Accordions>
        <Accordions
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionsSummary
            aria-controls="panel4bh-content"
            id="panel4bh-header"
            expandIcon={
              <Box sx={{ stroke: "#FFFF", width: "32px", height: "32px" }}>
                <SpriteSVG name={"icon-chevron-down"} />
              </Box>
            }
          >
            <Typography variant="subtitle1">
              Чи безпечно надавати свої особисті дані на вашому сайті?
            </Typography>
          </AccordionsSummary>
          <AccordionsDetails>
            <Typography variant="body1">
              Так, ми гарантуємо високий рівень захисту ваших особистих даних.
              Вся інформація передається через захищені з`єднання, і ми не
              передаємо ваши дані третім особам.
            </Typography>
          </AccordionsDetails>
        </Accordions>
        <Accordions
          expanded={expanded === "panel5"}
          onChange={handleChange("panel5")}
        >
          <AccordionsSummary
            aria-controls="panel5bh-content"
            id="panel5bh-header"
            expandIcon={
              <Box sx={{ stroke: "#FFFF", width: "32px", height: "32px" }}>
                <SpriteSVG name={"icon-chevron-down"} />
              </Box>
            }
          >
            <Typography variant="subtitle1">
              Чи є підтримка, якщо у мене виникнуть питання або проблеми під час
              оформлення?
            </Typography>
          </AccordionsSummary>
          <AccordionsDetails>
            <Typography variant="body1">
              Звісно! Наша команда підтримки доступна 24/7 і завжди готова
              допомогти вам з будь-якими питаннями або проблемами.
            </Typography>
          </AccordionsDetails>
        </Accordions>
        <Accordions
          expanded={expanded === "panel6"}
          onChange={handleChange("panel6")}
        >
          <AccordionsSummary
            aria-controls="panel6bh-content"
            id="panel6bh-header"
            expandIcon={
              <Box sx={{ stroke: "#FFFF", width: "32px", height: "32px" }}>
                <SpriteSVG name={"icon-chevron-down"} />
              </Box>
            }
          >
            <Typography variant="subtitle1">
              Чи отримаю я нагадування про терміни оплати та продовження
              автоцивілки?
            </Typography>
          </AccordionsSummary>
          <AccordionsDetails>
            <Typography variant="body1">
              Так, наші спеціалісти будуть надсилати вам сповіщення щодо
              термінів оплати та продовження автоцивілки, щоб ви завжди були в
              курсі.
            </Typography>
          </AccordionsDetails>
        </Accordions>
        <Accordions
          expanded={expanded === "panel7"}
          onChange={handleChange("panel7")}
        >
          <AccordionsSummary
            aria-controls="panel7bh-content"
            id="panel7bh-header"
            expandIcon={
              <Box sx={{ stroke: "#FFFF", width: "32px", height: "32px" }}>
                <SpriteSVG name={"icon-chevron-down"} />
              </Box>
            }
          >
            <Typography variant="subtitle1">
              Які документи мені потрібні для оформлення автоцивілки через ваш
              сайт?
            </Typography>
          </AccordionsSummary>
          <AccordionsDetails>
            <Typography variant="body1">
              Вам потрібно мати при собі наступні документи: Телефон, ІПН,
              Прізвище, Ім`я, По-батькові, Дата народження, та документ на вибір
              (Паспорт, посвідчення водія, ID-карта). Також потрібно вказати
              дані про транспортний засіб
            </Typography>
          </AccordionsDetails>
        </Accordions>
        <Accordions
          expanded={expanded === "panel8"}
          onChange={handleChange("panel8")}
        >
          <AccordionsSummary
            aria-controls="panel8bh-content"
            id="panel8bh-header"
            expandIcon={
              <Box sx={{ stroke: "#FFFF", width: "32px", height: "32px" }}>
                <SpriteSVG name={"icon-chevron-down"} />
              </Box>
            }
          >
            <Typography variant="subtitle1">
              Чи можу я оформити автоцивілку для іншої особи?
            </Typography>
          </AccordionsSummary>
          <AccordionsDetails>
            <Typography variant="body1">
              Так, ви можете оформити автоцивілку для іншої особи, але вам
              потрібно мати всі необхідні документи та інформацію про цю особу
              та її транспортний засіб.
            </Typography>
          </AccordionsDetails>
        </Accordions>
        <Accordions
          expanded={expanded === "panel9"}
          onChange={handleChange("panel9")}
        >
          <AccordionsSummary
            aria-controls="panel9bh-content"
            id="panel9bh-header"
            expandIcon={
              <Box sx={{ stroke: "#FFFF", width: "32px", height: "32px" }}>
                <SpriteSVG name={"icon-chevron-down"} />
              </Box>
            }
          >
            <Typography variant="subtitle1">
              Чи є у вас мобільний додаток?
            </Typography>
          </AccordionsSummary>
          <AccordionsDetails>
            <Typography variant="body1">
              Так, наші спеціалісти будуть надсилати вам сповіщення щодо
              термінів оплати та продовження автоцивілки, щоб ви завжди були в
              курсі.
            </Typography>
          </AccordionsDetails>
        </Accordions>
        <Accordions
          expanded={expanded === "panel10"}
          onChange={handleChange("panel10")}
        >
          <AccordionsSummary
            aria-controls="panel10bh-content"
            id="panel10bh-header"
            expandIcon={
              <Box sx={{ stroke: "#FFFF", width: "32px", height: "32px" }}>
                <SpriteSVG name={"icon-chevron-down"} />
              </Box>
            }
          >
            <Typography variant="subtitle1">
              Чи отримаю я нагадування про терміни оплати та продовження
              автоцивілки?
            </Typography>
          </AccordionsSummary>
          <AccordionsDetails>
            <Typography variant="body1">
              Наразі ми працюємо над створенням мобільного додатку і
              сподіваємось запустити його найближчим часом. Тим часом ви можете
              використовувати нашу веб-платформу з будь-якого пристрою з
              доступом до Інтернету.
            </Typography>
          </AccordionsDetails>
        </Accordions>
      </ContAccordion>
    </section>
  );
};
