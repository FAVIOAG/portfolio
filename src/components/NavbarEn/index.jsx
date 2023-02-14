import "./Navbar.css";
import React from "react";
import { FaPaperPlane } from "react-icons/fa";
const NavbarEn = () => {
 
 
  return (
    
    <div className="container">
      <a href="#" className="logo">
        Favio Gonzalez
      </a>
      <a href="#" className="navigation">
        About me...
      </a>
      <a href="#" className="navigation">
        Services...
      </a>
      <a href="#" className="navigation">
        Portfolio
      </a>
      <a href="#" className="navigation">
        References
      </a>
      <a className="contactButton">
        <span className="icon">
          <FaPaperPlane />
        </span>
        Contact Me!
      </a>
    </div>
  );
};

export {NavbarEn};
