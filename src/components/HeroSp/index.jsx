import "./Hero.css";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import sitPic from "../../assets/sitPic.jpg";

const HeroSp = () => {
  return (
    <div>
      <div className='totalCont'>
        <div className='firstCont'>
          <h2 className="paragraph">👋 ¡Hola! ¿Como estas? soy...</h2>
          <h1>Favio Gonzalez</h1>
          <h2 className="paragraph">FullStack developer</h2>
          <p>
            Desarrollador independiente de Rosario, Argentina. Me mueven los
            desafios y la originalidad!
          </p>
          <div className="btnCont">
            <a
              href="https://api.whatsapp.com/send?phone=543416219049" 
              className="btn"  target="_blank"
            >
              <span className="wabtn">
                <FaWhatsapp />
              </span>
              Escribime
            </a>
            <a href= "https://drive.google.com/file/d/120KB1y0EJiekY_QZyE7i2w7oP16QkzeE/view?usp=sharing" className="btn" target="_blank"> Descargar Cv</a>
          </div>
        </div>
        <div className='imgCont'>
        <div className="imgCont">
          <img src={sitPic} alt="devImg" className='devImg'/>

        </div>
      </div>
    </div>
  </div>
  );
};
export { HeroSp };
