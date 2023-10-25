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
    <div className="flex bg-zinc-600 px-5 justify-center">
      <Link to={"/"} className="font-semibold text-xl p-2">
        Logo
      </Link>
    </div>
  );
};

export default Navbar;
