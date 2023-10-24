import HeroTabs from "../components/HeroTabs/HeroTabs";
import { AccordionSection } from "../components/AccordionSection/AccordionSection";
import CheckInsSection from "../components/CheckInsSection/CheckInsSection";
import InfoSection from "../components/InfoSection/InfoSection";

import { useEffect } from "react";
import AdvatagesSection from "../components/AdvatagesSection/AdvatagesSection";
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
//   const apiKey = process.env.REACT_APP_API_KEY
// console.log(apiKey);
  // useEffect(() => {

  //   const fetchData = async () => {
  //     try {

  //       // const { salePoint } = await getUserByEmail();
  //       const ob = {
  //         autoCategory: "B1",
  //         registrationPlace: "22",
  //       };
  //       // const { data } = await getPolicyByParamsInUa(ob);
  //       const arr = await getPolicyByParamsInUa(ob);
  //       // console.log('arr: ', arr);
  //       const tariff = arr.map((item)=>{
  //         return {
  //           id: item.tariff.insurer.id,
  //           name: item.tariff.insurer.name
  //         }
  //       })
  //        console.log('tariff: ', tariff);

  //     } catch (error) {
  //       console.log(error);
  //     } 
  //   };
  //   fetchData();
  // }, []);

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
