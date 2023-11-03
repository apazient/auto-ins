import HeroTabs from "../components/HeroTabs/HeroTabs";
import AccordionSection from "../components/AccordionSection/index";
import CheckInsSection from "../components/CheckInsSection/index";
import InfoSection from "../components/InfoSection/index";

import { useEffect } from "react";
import AdvatagesSection from "../components/AdvantagesSection/index";
import { useLocation } from "react-router-dom";
import Partners from "../components/Partners/Partners";
import { useDispatch, useSelector } from "react-redux";
import { loginThunk } from "../redux/Global/operations";
import { getUser } from "../redux/Global/selectors";
//import { getPolicyByParamsInUa } from "../services/api";

const HomePage = () => {
  const { state } = useLocation();
  const { id } = state || {};
  const dispatch = useDispatch();
  const user = useSelector(getUser);
  useEffect(() => {
    let element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, [id]);

  useEffect(() => {
    if (user) return;
    dispatch(loginThunk())
      .unwrap()
      .catch((error) => {
        const { message } = error.response.data;
        if (message) {
          console.log(message);
        }
      });
  }, [dispatch]);

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
