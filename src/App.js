import "./App.css";
import {
  NavbarSp,
  NavbarEn,
  HeroSp,
  HeroEn,
  SkillsSp,
  SkillsEn,
  AboutEn,
  AboutSp,
  ServicesEn,
  ServicesSp,
  LatestEn,
  LatestSp,
  WhyChoseMeSp,
  WhyChoseMeEn,
  CertificationEn,
  CertificationSp,
  FormSp,
  FormEn
} from "./components/";
import React, { useState } from "react";


function App({ Component, pageProps }) {
  let [lng, setLng] = useState("sp");
  let showLng = () => {
    setLng(lng === "sp" ? "en" : "sp");
  };

  return (
    <>
      <div className="mainDiv">
        <div className="navDiv">
          {lng === "sp" ? <NavbarSp /> : <NavbarEn />}
        </div>
        <div className="langDiv">
          <h1 className="lang">Idioma</h1>
          <button className="langBtn" onClick={showLng}>
            {lng === "sp" ? "English" : "Spanish"}
          </button>
        </div>
      </div>
      {lng === "sp" ? <HeroSp /> : <HeroEn />}
      {lng === "sp" ? <SkillsSp /> : <SkillsEn />}
      {lng === "sp" ? <AboutSp /> : <AboutEn />}
      {lng === "sp" ? <ServicesSp /> : <ServicesEn />}
      {lng === "sp" ? <LatestSp /> : <LatestEn />}
      {lng === "sp" ? <WhyChoseMeSp /> : <WhyChoseMeEn />}
      {lng === "sp" ? <CertificationSp /> : <CertificationEn />}
      {lng === "sp" ? <FormSp /> : <FormEn />}
    </>
  );
}

export default App;
