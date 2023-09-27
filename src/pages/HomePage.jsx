import { Link } from "react-router-dom";
import { Button, Typography } from "@mui/material";

import { BlueButton, WhiteButton, YellowButton } from "../style/Global.styled";
import HeroTabs from "../components/HeroTabs/HeroTabs";

import { AccordionSection } from "../components/AccordionSection/AccordionSection";
import CheckInsSection from "../components/CheckInsSection/CheckInsSection";
import InfoSection from "../components/InfoSection/InfoSection";
import info from "../assets/texts/infos.json";
import { useState } from "react";

const HomePage = () => {
  const [text, setText] = useState(info.text);

  return (
    <>
      <Typography variant="h1">Автоцивілка без зайвих рухів</Typography>
      <HeroTabs />
      <CheckInsSection />
      <AccordionSection />
      <InfoSection text={text} />
    </>
  );
};

export default HomePage;
