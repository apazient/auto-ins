import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { useSelector } from "react-redux";
import { getIsLoading } from "../redux/Global/selectors";
import Loader from "./Loader/Loader";

const Layout = () => {
  const isLoading = useSelector(getIsLoading);    
  return (
    <>      
      <Header />
      <Outlet />
      <Footer />
      {isLoading && <Loader />}
    </>
  );
};

export default Layout;
