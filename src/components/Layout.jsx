import { Link, Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const Layout = () => {
  return (
    <>
      <Header />
      <Link to="/" style={{ color: "lime" }}>
        HomePage |
      </Link>
      <Link to="/prices" style={{ color: "lime" }}>
        PricesPage |
      </Link>
      <Link to="/form" style={{ color: "lime" }}>
        FormPage
      </Link>
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
