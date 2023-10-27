import { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Loader from "./components/Loader/Loader";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const HomePage = lazy(() => import("./pages/HomePage.jsx"));
const PricesPage = lazy(() => import("./pages/PricesPage.jsx"));
const FormPage = lazy(() => import("./pages/FormPage.jsx"));

function App() {
  const queryClient = new QueryClient({
    defaultOptions: { queries: { refetchOnWindowFocus: false } },
  });
  return (
    <QueryClientProvider client={queryClient}>
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
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
