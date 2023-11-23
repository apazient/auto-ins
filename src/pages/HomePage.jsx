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
  const { loginThunk, setIsBlockThanks } = useActions();

  const user = useSelector(getUser);
  const isError = useSelector(getIsModalErrorOpen);

  useEffect(() => {
    let element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, [id]);

  useEffect(() => {
    if (user) return;
    setIsBlockThanks(false);
    loginThunk();
  }, [user, loginThunk]);

  if (isError) {
    return <ModalError />;
  }

  return (
    <>
      <main>
        <AlertMUI type="info" message="Будь ласка, заповніть поля" />
        <HeroTabs />
        <Suspense>
          <AdvatagesSection />
        </Suspense>
        <Suspense>
          <CheckInsSection />
        </Suspense>
        <Suspense>
          <Partners />
        </Suspense>
        <Suspense>
          <AccordionSection />
        </Suspense>
        <Suspense>
          <InfoSection />
        </Suspense>
      </main>
    </>
  );
};

export default HomePage;
