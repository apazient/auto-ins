import HeroTabs from "../components/HeroTabs/HeroTabs";
import { AccordionSection } from "../components/AccordionSection/AccordionSection";
import CheckInsSection from "../components/CheckInsSection/CheckInsSection";
import InfoSection from "../components/InfoSection/InfoSection";
import info from "../assets/texts/infos.json";
import { useState } from "react";
import Partners from "../components/Partners/Partners";


const HomePage = () => {
  const [text, setText] = useState(info.text);

  return (
    <>
      <HeroTabs />
      <CheckInsSection />
      <Partners/>
      <AccordionSection />
      <InfoSection text={text} />
    </>
  );
};

export default HomePage;
