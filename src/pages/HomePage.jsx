
import { Link } from "react-router-dom";
import { Button, Typography } from "@mui/material";

import { BlueButton, WhiteButton, YellowButton } from "../style/Global.styled";
import HeroTabs from "../components/HeroTabs/HeroTabs";


import { AccordionSection } from "../components/AccordionSektion/AccordionSection";


const HomePage = () => {
  return (
    <>

      <div>HomePage</div>
      <BlueButton component={Link} display={{ xs: "none", sm: "block" }}>
        Hallo
      </BlueButton>
      <Button variant="contained">New Button</Button>
      <WhiteButton> WhiteButton</WhiteButton>
      <YellowButton width={300}>HALLLLLLLLLL</YellowButton>
      <Typography variant="h1">Автоцивілка без зайвих рухів</Typography>
      <HeroTabs />

      <AccordionSection />

    </>
  );
};

export default HomePage;
