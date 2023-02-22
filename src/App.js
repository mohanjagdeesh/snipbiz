import { Route, Routes } from "react-router-dom";
import './App.css';
import Contact from "./Components/Contact/Contact";
import Home from './Components/Home/Home';
import Partners from "./Components/Partners/Partners";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="contact" element={<Contact/>} ></Route>
        <Route path="partners" element={<Partners/>}></Route>

      </Routes>
    
    </div>
  );
}

export default App;
