import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";
import { SpriteSVG } from "../../images/SpriteSVG";

import {
  BoxImg,
  Button,
  ContainerSectionS,
  ContCheck,
} from "./CheckInsSectionStyle";

const CheckInsSection = () => {
  return (
    <section>
      <ContainerSectionS>
        <ContCheck>
          <BoxImg>
            <SpriteSVG name={"icon-car"} />
          </BoxImg>
          <Grid container>
            <Grid xs={12} sm={12} md={12} lg={4} spacing={2}>
              <Typography
                variant="h3"
                sx={{
                  marginBottom: { xs: "4px", sm: "8px", lg: "0" },
                }}
              >
                Перевірка страховки співробітниками поліції
              </Typography>
            </Grid>
            <Grid xs={12} sm={12} md={12} lg={8}>
              <Typography variant="body1">
                Усі оформлені поліси зберігаються в єдиній базі МТСБУ. Поліція
                може перевірити дійсність вашого поліса онлайн. Також ви можете
                зробити це самостійно за номером авто або номером поліса.
              </Typography>
              <Button>Перевірити поліс</Button>
            </Grid>
          </Grid>
        </ContCheck>
      </ContainerSectionS>
    </section>
  );
};

export default CheckInsSection;
