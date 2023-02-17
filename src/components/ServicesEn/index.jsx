import "./../ServicesSp/Services.css";
import React from "react";
import { TfiWorld } from "react-icons/tfi";
import { RxUpdate } from "react-icons/rx";
import { MdTouchApp } from "react-icons/md";
const ServicesEn = () => {
  return (
    <div className="cardCont" id="servicesEn">
      <h2 className="services">My services</h2>
      <h1 className="title">What I Do...</h1>
      <div className="cont">
        <div className="cardDiv">
          <span className="cardIcon">
            <TfiWorld />
          </span>
          <h1 className="cardTit">Website design</h1>
          <p className="description">
            Create and develop websites, based on marketing strategys and user
            focused
          </p>
        </div>
        <div className="cardDiv">
          <span className="cardIcon">
            <RxUpdate />
          </span>
          <h1 className="cardTit">Update & improve </h1>
          <p className="description">
            Mantain, update, grow, transform and fit your existing website to
            it's best shape. Organice and define your content's to get a better
            impact!
          </p>
        </div>
        <div className="cardDiv">
          <span className="cardIcon">
            <MdTouchApp />
          </span>
          <h1 className="cardTit">WebApp building</h1>
          <p className="description">
            Develop a brand new Web App acording to your bussines necessities.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export { ServicesEn };
