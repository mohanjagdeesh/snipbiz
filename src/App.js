import { useEffect } from "react";
import { Route } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import "./App.css";
import Footer from "./Components/footerSection/Footer";
import Home from "./Components/Home/Home";
import { useGlobalStore } from "./store/useGlobalStore";
import { Navbar } from "./Components/Navbar/Navbar";
import { routes as AllRoutes } from "./Components/routes/Routes";

const App = () => {
  const setIsMobile = useGlobalStore((state) => state.setIsMobile);
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  useEffect(() => {
    setIsMobile(isTabletOrMobile);
  }, [isTabletOrMobile, setIsMobile]);

  return (
    <>
      <div className="App">
        <Navbar />
        <AllRoutes />
        <Footer />
      </div>
    </>
  );
};

export default App;
