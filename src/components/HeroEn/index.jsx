import "./../HeroSp/Hero.css";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import sitPic from "../../assets/sitPic.jpg";
const HeroEn = () => {
  return (
    <div>
      <div className="totalCont">
        <div className="firstCont">
          <h2 className="paragraph">👋 Hi there! How are you? I'm...</h2>
          <h1>Favio Gonzalez</h1>
          <h2 className="paragraph">FullStack developer</h2>
          <p>
            Freelance Dev from Rosario, Argentina. Challenges and originality
            are my inspiration!!
          </p>
          <div className="btnCont">
            <a
              href="https://api.whatsapp.com/send?phone=543416219049"
              className="btn"
              target="_blank"
            >
              <span className="wabtn">
                <FaWhatsapp />
              </span>
              Write me!
            </a>
            <a
              href="https://drive.google.com/file/d/120KB1y0EJiekY_QZyE7i2w7oP16QkzeE/view?usp=sharing"
              className="btn"
              target="_blank"
            >
              Download Cv
            </a>
          </div>
        </div>
        <div className="imgCont">
          <img src={sitPic} alt="devImg" className='devImg'/>
        </div>
      </div>
    </div>
  );
};
export { HeroEn };
