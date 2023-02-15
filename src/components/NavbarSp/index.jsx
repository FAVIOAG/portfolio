import "./../NavbarEn/Navbar.css";
import React from "react";
import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import { BsMenuDown } from "react-icons/bs";
const NavbarSp = () => {
  const [open, setopen] = useState(false);

  const openMenu = () => {
    setopen(true);
  };

  const closeMenu = () => {
    setopen(false);
  };

  return (
    <div className="container">
      
      <a href="#" className="logo">
        Favio Gonzalez
      </a>
      <div className='items'>
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
      </div>
      <div className="hambMenu">
        <button className="hambBtn" onMouseEnter={openMenu}>
          <BsMenuDown/> Navegacion
        </button>
        {open && (
          <div className="menu" onMouseLeave={closeMenu}>
            <ul>
              <li>
                <a href="#" className="navigation">
                  Acerca de...
                </a>
              </li>
              <li>
                <a href="#" className="navigation">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#" className="navigation">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#" className="navigation">
                  Referencias
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
      <a className="contactButton">
        <span className="icon">
          <FaPaperPlane />
        </span>
        Contactame!
      </a>
    </div>
  );
};

export { NavbarSp };
