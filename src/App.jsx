import { useState } from "react";
import "./App.css";
import NavbarHeader from "./components/NavbarHeader";
import Footer from "./components/Footer";
import Places from "./components/Places";
import Services from "./components/Services";
import AboutUs from "./components/AboutUs";
import Testimonials from "./components/Testimonials";
import ContactUs from "./components/ContactUs";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";

function App() {
  return (
    <div className="flex flex-col">
      <BrowserRouter>
        <Routes>
          <Route path="/" />
          <Route path="/Home" element={<NavbarHeader />} />
        </Routes>
        <NavbarHeader />
        <Places />
        <Services />
        <AboutUs />
        <Testimonials />
        <ContactUs />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
