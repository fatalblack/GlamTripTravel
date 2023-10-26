import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  // Esto es una idea en desarrollo
  // // Este use State es para saber si el menu esta abierto o cerrado
  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  // // Este useState es para detectar el tamaño de la pantalla
  // const [windowDimension, setWindowDimension] = useState({
  //   innerHeight: window.innerHeight,
  //   innerWidth: window.innerWidth,
  // });

  return (
    <div id="navbar">
      <div className="flex bg-zinc-600 justify-center">
        <img src="logo-9.svg" className="logo" />
        
        <div className="fake-link-bar">
          <a href="#home">
            Home
          </a>
          &nbsp;|&nbsp;
          <a href="#services">
            Servicios
          </a>
          &nbsp;|&nbsp;
          <a href="#formulario">
            Formulario
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
