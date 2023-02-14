import "./About.css";
import React from "react";
import picStand from './../../assets/picStand.jpg'

const AboutEn = () => {
  return (
    <div className="totalCont">
      <img src={picStand} className="aboutImg" alt="fotoDePie" />
      <div className="aboutText">
        <h1 className="aboutTitle">About me...</h1>
        <h2 className="descriptionAbout">
          Dedicated and advocated to tecnology. Since first age studying to be
          an electronical tecnhician and nowadays in my job, in touch with
          telecommunications and new technologies. Learning programming
          languages, and frameworks, to improve and develop myself
          professionally and get into new working challenges{" "}
        </h2>
      </div>
    </div>
  );
};

export { AboutEn };
