import { lazy, Suspense, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { getUser } from "../redux/Calculator/selectors";
import { getIsModalErrorOpen } from "../redux/Global/selectors";
import { useActions } from "../hooks/useActions";
const AccordionSection = lazy(() =>
  import("../components/AccordionSection/index")
);
const CheckInsSection = lazy(() =>
  import("../components/CheckInsSection/index")
);
const InfoSection = lazy(() => import("../components/InfoSection/index"));
const AdvatagesSection = lazy(() =>
  import("../components/AdvantagesSection/index")
);
const Partners = lazy(() => import("../components/Partners/Partners"));

import HeroTabs from "../components/HeroTabs/HeroTabs";
import ModalError from "../components/ModalError/ModalError";
import AlertMUI from "../components/Alert/AlertMUI";

const HomePage = () => {
  const location = useLocation();
  const { id } = location.state || {};
  const { loginThunk } = useActions();

  const user = useSelector(getUser);
  const isError = useSelector(getIsModalErrorOpen);

  useEffect(() => {
    let element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      delete location?.state;
    }
  }, [id, location?.state]);

  useEffect(() => {
    if (user) return;
    loginThunk();
  }, [user, loginThunk]);

  if (isError) {
    return <ModalError />;
  }
  return (
    <>
      <main style={{ height: "100%" }}>
        <AlertMUI type="info" message="Будь ласка, заповніть поля" />
        <HeroTabs />
        <Suspense>
          <AdvatagesSection />
          <CheckInsSection />
          <Partners />
          <AccordionSection />
          <InfoSection />
        </Suspense>
      </main>
    </>
  );
};

export default HomePage;
