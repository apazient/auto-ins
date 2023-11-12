import { lazy, Suspense, useEffect } from "react";
import { useLocation } from "react-router-dom";
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

import { useDispatch, useSelector } from "react-redux";
import { loginThunk } from "../redux/Calculator/operations";
import { getUser } from "../redux/Calculator/selectors";

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
  }, [dispatch, user]);

  return (
    <>
      <main>
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
