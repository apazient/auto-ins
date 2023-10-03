import HeroTabs from "../components/HeroTabs/HeroTabs";
import { AccordionSection } from "../components/AccordionSection/AccordionSection";
import CheckInsSection from "../components/CheckInsSection/CheckInsSection";
import InfoSection from "../components/InfoSection/InfoSection";

import { useEffect } from "react";
import AdvatagesSection from "../components/AdvatagesSection/AdvatagesSection";
import { useLocation } from "react-router-dom";
import Partners from "../components/Partners/Partners";
import HeroPicture from "../components/HeroPicture/HeroPicture";

const HomePage = () => {
  const { state } = useLocation();
  const { id } = state || {};

  useEffect(() => {
    let element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, [id]);

  return (
    <>
      <HeroTabs />
      <HeroPicture />
      <AdvatagesSection />
      <CheckInsSection />
      <Partners />
      <AccordionSection />
      <InfoSection />
    </>
  );
};

export default HomePage;
