import { useState } from "react";
import { TabStyled, TabsContainer, TabsStyled } from "./HeroTabs.styled";
import ByParameters from "./ByParameters/ByParameters";
import ByLicensePlate from "./ByLicensePlate/ByLicensePlate";
import { Typography } from "@mui/material";

const HeroTabs = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <section>
      <TabsContainer>
        <Typography
          align="center"
          variant="h1"
          sx={{
            color: " #FEFEFF",
            fontFamily: "OpenSans-SemiBold",
            fontSize: 24,
            fontWeight: "800",
            lineHeight: "150%" /* 36px */,
            width: "fit-content",
            marginBottom: "24px",
          }}
        >
          Автоцивілка без зайвих рухів
        </Typography>
        <TabsStyled value={value} onChange={handleChange}>
          <TabStyled label="За параметрами" />
          <TabStyled label="За держ. номерним знаком" wrapped />
        </TabsStyled>
        {/* Вміст для вкладок */}
        {value === 0 && <ByParameters />}
        {value === 1 && <ByLicensePlate />}
      </TabsContainer>
    </section>
  );
};

export default HeroTabs;
