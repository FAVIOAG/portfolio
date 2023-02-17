import "./../NavbarEn/Navbar.css";
import React from "react";
import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import { BsMenuDown } from "react-icons/bs";
const NavbarEn = () => {
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
        <a href="#aboutEn" className="navigation">
          About me...
        </a>
        <a href="#servicesEn" className="navigation">
          Services...
        </a>
        <a href="#latestEn" className="navigation">
          Projects
        </a>
        <a href="#whyEn" className="navigation">
          References
        </a>
      </div>
      <div className="hambMenu">
        <button className="hambBtn" onMouseEnter={openMenu}>
          <BsMenuDown /> Navigation
        </button>
        {open && (
          <div className="menu" onMouseLeave={closeMenu}>
            <ul>
              <li>
                <a href="#aboutEn" className="navigationHamb">
                  About me
                </a>
              </li>
              <li>
                <a href="#servicesEn" className="navigationHamb">
                  Services
                </a>
              </li>
              <li>
                <a href="#latestEn" className="navigationHamb">
                  Projects
                </a>
              </li>
              <li>
                <a href="#whyEn" className="navigationHamb">
                  References
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
      <a href='#formEn' className="contactButton">
        <span className="icon">
          <FaPaperPlane />
        </span>
        Contact Me!
      </a>
    </div>
  );
};

export { NavbarEn };
