import { Link, Navigate, Outlet, Route, Routes } from "react-router-dom";
import { BlueButton, WhiteButton, YellowButton } from "./style/Global.styled";
import { Button,  Typography } from "@mui/material";
import { Suspense, lazy } from "react";
import Layout from "./components/Layout";
import Loader from "./components/Loader/Loader";

const HomePage = lazy(()=>import('./pages/HomePage.jsx'));
const PricesPage = lazy(()=>import('./pages/PricesPage.jsx'));
const FormPage = lazy(()=>import('./pages/FormPage.jsx'));


function App() {
  return (
    <>
      {/* <BlueButton component={Link} display={{ xs: "none", sm: "block" }}>
        Hallo
      </BlueButton>
      <Button variant="contained">New Button</Button>
      <WhiteButton> WhiteButton</WhiteButton>

      <YellowButton width={300}>HALLLLLLLLLL</YellowButton>

      <Typography variant="h1">Автоцивілка без зайвих рухів</Typography> */}
      
      {/* Vite */}
      {/* <nav>
      <Link to='/auto-ins/' style={{color: "#fff"}}>HomePage |</Link>
        <Link to='/auto-ins/prices' style={{color: "#fff"}}> PricesPage |</Link>
        <Link to='/auto-ins/form' style={{color: "#fff"}}> FormPage</Link>
      </nav>
      <Outlet/> */}

      <Suspense fallback={<Loader/>}>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<HomePage/>}/>
            <Route path="prices" element={<PricesPage/>}/>
            <Route path="form" element={<FormPage/>}/>
            <Route path='*' element={<Navigate to='/'/>}/>
          </Route>
        </Routes>
      </Suspense>


    </>
  );
}

export default App;
