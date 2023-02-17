import React from "react";
import "./footer.css";
import { AiOutlineLinkedin, AiOutlineHome } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footer'>
      <h1 className='footerTit'>Favio Gonzalez 2023</h1>
      <span>Social:</span>
      <a href="https://www.linkedin.com/in/favioag" className='footerBtn' target="_blank">
        <AiOutlineLinkedin />
      </a>
      <span>WhatsApp:</span>
      <a
        href="https://api.whatsapp.com/send?phone=543416219049"
        
        target="_blank" className='footerBtn'
      >
        <FaWhatsapp />
      </a>
    <span>Home:</span><a href="#" className='footerBtn'><AiOutlineHome/></a>
    </div>
  );
};

export { Footer };
