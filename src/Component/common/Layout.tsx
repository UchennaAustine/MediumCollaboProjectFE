import { Outlet } from "react-router-dom";
import Header from "../static/Header";
import LandingScreen from "../../pages/LandingPage/LandingScreen";

const Layout = () => {
  return (
    <div>
      <LandingScreen/>
      <Outlet />
    </div>
  );
};

export default Layout;
