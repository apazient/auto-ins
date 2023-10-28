import HeroTabs from "../components/HeroTabs/HeroTabs";
import AccordionSection from "../components/AccordionSection/index";
import CheckInsSection from "../components/CheckInsSection/index";
import InfoSection from "../components/InfoSection/index";

import { useEffect } from "react";
import AdvatagesSection from "../components/AdvantagesSection/index";
import { useLocation } from "react-router-dom";
import Partners from "../components/Partners/Partners";
//import { getPolicyByParamsInUa } from "../services/api";

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
    <main>
      <HeroTabs />
      <AdvatagesSection />
      <CheckInsSection />
      <Partners />
      <AccordionSection />
      <InfoSection />
    </main>
  );
};

export default HomePage;
