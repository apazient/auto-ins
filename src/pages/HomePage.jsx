import HeroTabs from "../components/HeroTabs/HeroTabs";
import { AccordionSection } from "../components/AccordionSection/AccordionSection";
import CheckInsSection from "../components/CheckInsSection/CheckInsSection";
import InfoSection from "../components/InfoSection/InfoSection";
import info from "../assets/texts/infos.json";
import { useState } from "react";
import AdvatagesSection from "../components/AdvatagesSection/AdvatagesSection";

const HomePage = () => {
  const [text, setText] = useState(info.text);

  return (
    <>
      <HeroTabs />
      <AdvatagesSection />
      <CheckInsSection />
      <AccordionSection />
      <InfoSection text={text} />
    </>
  );
};

export default HomePage;
