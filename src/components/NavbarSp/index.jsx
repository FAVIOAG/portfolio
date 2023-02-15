import "./../NavbarEn/Navbar.css";
import React from "react";
import { FaPaperPlane } from "react-icons/fa";
const NavbarSp = () => {  
  return (
    <div className="container">
      <a href="#" className="logo">
        Favio Gonzalez
      </a>
      <a href="#" className="navigation">
        Acerca de...
      </a>
      <a href="#" className="navigation">
        Servicios
      </a>
      <a href="#" className="navigation">
        Portfolio
      </a>
      <a href="#" className="navigation">
        Referencias
      </a>
      <a className="contactButton">
        <span className="icon">
          <FaPaperPlane />
        </span>
        Contactame!
      </a>
    </div>
  );
};

export {NavbarSp};
