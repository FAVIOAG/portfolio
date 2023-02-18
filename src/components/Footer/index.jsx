import React from "react";
import "./footer.css";
import { AiOutlineLinkedin, AiOutlineHome } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footer'>
      <h1 className='footerTit'>Favio Gonzalez 2023</h1>
      <span className='footerItem'>Social:</span>
      <a href="https://www.linkedin.com/in/favioag" className='footerBtn' target="_blank" rel="noreferrer">
        <AiOutlineLinkedin />
      </a>
      <span className='footerItem'>WhatsApp:</span>
      <a
        href="https://api.whatsapp.com/send?phone=543416219049"
        
        target="_blank" className='footerBtn' rel="noreferrer"
      >
        <FaWhatsapp />
      </a>
    <span className='footerItem'>Home:</span><a href="#navBar" className='footerBtn'><AiOutlineHome/></a>
    </div>
  );
};

export { Footer };
