


import "./App.css";

import { createRoot } from "react-dom/client";
import "./index.css";

import "sweetalert2/src/sweetalert2.scss";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./Components/Travels";
import AboutPage from "./Components/About";
import ContactPage from "./Components/Contact";
import TravelDesk from "./Components/TravelDesk";
import ToyotaEtios from "./Components/ToyotaEtios";
import ToyotaHiace from "./Components/ToyotaHiace";
import MercedesBenzEClass from "./Components/MercedesBenzEClass";
import FordEndeavour from "./Components/FordEndeavour.jsx";





function AppRouter() {
  return (
   <Router>
    <Routes>
      <Route path="/" element={<Home/>}/>
       <Route path="/about" element={<AboutPage/>}/>
        <Route path="/contactus" element={<ContactPage/>}/>
         <Route path="/traveldesk" element={<TravelDesk/>}/>
     
 <Route path="/car/toyota-etios" element={<ToyotaEtios />} />
        <Route path="/car/ford-endeavour" element={<FordEndeavour />} />
        <Route path="/car/toyota-hiace" element={<ToyotaHiace />} />
        <Route path="/car/mercedes-e-class" element={<MercedesBenzEClass />} />


 


    </Routes>
   </Router>
  );
}

export default AppRouter;


