import { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Calculator } from "./components/Calculator/Calculator";
import Layout from "./components/Layout";
import Loader from "./components/Loader/Loader";

const HomePage = lazy(() => import("./pages/HomePage.jsx"));
const PricesPage = lazy(() => import("./pages/PricesPage.jsx"));
const FormPage = lazy(() => import("./pages/FormPage.jsx"));

function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/prices" element={<PricesPage />} />
            <Route path="/form" element={<FormPage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
