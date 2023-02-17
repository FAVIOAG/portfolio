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
      <div className="items">
        <a href="#aboutSp" className="navigation">
          Acerca de...
        </a>
        <a href="#servicesSp" className="navigation">
          Servicios
        </a>
        <a href="#latestSp" className="navigation">
          Proyectos
        </a>
        <a href="#whySp" className="navigation">
          Referencias
        </a>
      </div>
      <div className="hambMenu">
        <button className="hambBtn" onMouseEnter={openMenu}>
          <BsMenuDown /> Navegacion
        </button>
        {open && (
          <div className="menu" onMouseLeave={closeMenu}>
            <ul>
              <li>
                <a href="#aboutSp" className="navigationHam">
                  Acerca de...
                </a>
              </li>
              <li>
                <a href="#servicesSp" className="navigationHam">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#latestSp" className="navigationHam">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#whySp" className="navigationHam">
                  Referencias
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
      <a href="#formSp" className="contactButton">
        <span className="icon">
          <FaPaperPlane />
        </span>
        Contactame!
      </a>
    </div>
  );
};

export { NavbarSp };
