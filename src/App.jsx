import { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Formulario from "./components/Formulario";
import Footer from "./components/footer";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Cards from "./components/Cards";

function App() {
  return (
    <div className="flex flex-col">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" />
          <Route path="/Home" element={<Home />} />
          <Route path="/Formulario" element={<Formulario />} />
        </Routes>
        <Cards />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
