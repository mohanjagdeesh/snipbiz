import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useMediaQuery } from 'react-responsive'
import './App.css';
import Contacts from "./Components/contact/Contacts";
import Home from './Components/Home/Home';
import Partners from "./Components/Partners/Partners";
import { useGlobalStore } from "./store/useGlobalStore";

const App = () => {
  const setIsMobile = useGlobalStore(state => state.setIsMobile);
  
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

  useEffect(() => {
    setIsMobile(isTabletOrMobile);
  }, [isTabletOrMobile, setIsMobile])

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="contact" element={<Contacts/>} ></Route>
        <Route path="partners" element={<Partners/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
