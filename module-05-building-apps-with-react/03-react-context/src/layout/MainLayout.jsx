import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
