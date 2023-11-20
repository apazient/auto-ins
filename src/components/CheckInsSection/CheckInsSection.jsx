import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";
import { SpriteSVG } from "../../images/SpriteSVG";
import { BlueButton } from "../../style/Global.styled";

import { BoxImg, ContainerSectionS, ContCheck } from "./CheckInsSectionStyle";

const CheckInsSection = () => {
  return (
    <section>
      <ContainerSectionS>
        <ContCheck>
          <BoxImg>
            <SpriteSVG name={"icon-car"} />
          </BoxImg>
          <Grid container className="container">
            <Grid xs={12} sm={12} md={12} lg={3.6}>
              <Typography variant="h3" className="title">
                Перевірка страховки співробітниками поліції
              </Typography>
            </Grid>
            <Grid xs={12} sm={12} md={12} lg={8.1}>
              <Typography variant="body1">
                Усі оформлені поліси зберігаються в єдиній базі МТСБУ. Поліція
                може перевірити дійсність вашого поліса онлайн. Також ви можете
                зробити це самостійно за номером авто або номером поліса.
              </Typography>
              <BlueButton
                href="https://policy-web.mtsbu.ua/"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Перевірити коректність даних по ТЗ в базі МТСБУ"
                className="button"
              >
                Перевірити поліс
              </BlueButton>
            </Grid>
          </Grid>
        </ContCheck>
      </ContainerSectionS>
    </section>
  );
};

export default CheckInsSection;
