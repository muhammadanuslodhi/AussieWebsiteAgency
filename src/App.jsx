import React, { useState  } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import ServiceSlug from "./Pages/ServicesSlug";
import Contact from "./Pages/Contact";
import Review from "./Pages/Review"
import Navbar from "./Components/Navbar"; 
import PopupForm from "./Components/PopupForm"; 
import Footer from "./Components/Footer"; 
import ComboPackages from "./Pages/ComboPackages";
import Portfolio from "./Pages/Porfolio";
import './App.css'
import PrivacyPolicy from "./Pages/PrivacyPolicy";

function App() {

  const [showModal, setShowModal] = useState(false);
  return (
    <Router>
<PopupForm  showModal={showModal} setShowModal={setShowModal} />
      <Navbar /> {/* Header ko Router ke andar rakhein taaki links kaam karein */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
       <Route path="/:slug" element={<ServiceSlug />} />
       <Route path="/contact" element={<Contact />} />
       <Route path="/combo-package" element={<ComboPackages />} />
       <Route path="/portfolio" element={<Portfolio />} />
       <Route path="/review" element={<Review />} />
       <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App