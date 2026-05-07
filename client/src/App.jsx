


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






function AppRouter() {
  return (
   <Router>
    <Routes>
      <Route path="/" element={<Home/>}/>
       <Route path="/about" element={<AboutPage/>}/>
        <Route path="/contactus" element={<ContactPage/>}/>
         <Route path="/traveldesk" element={<TravelDesk/>}/>
     



 


    </Routes>
   </Router>
  );
}

export default AppRouter;


