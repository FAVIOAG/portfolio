import React from "react";
import "./../LatestSp/Latest.css";
import hero from "../../assets/hero.jpg";
import wallet from "../../assets/wallet.jpg";
import { BsGithub } from "react-icons/bs";
const LatestEn = () => {
  return (
    <div id="latestEn">
      <h1 className="mainTit">My latest proyects</h1>
      <div className="latestCards">
        <div className="latestCardA">
          <h1 className="latCardTit">Hero Section</h1>
          <img src={hero} className="imageCont" alt="proyecto_hero" />
          <p className="latestP">
            Developed a portfolio's Hero section, it includes no-rectangular
            designs from CSS.
          </p>
          <h2 className="latCardTit"> Click the icon to see full proyect.</h2>
          <a className="gitLink" href="https://favioag.github.io/TP_HERO/">
            <BsGithub />
          </a>
        </div>

        <div className="latestCardB">
          <h1 className="latCardTit">Wallet</h1>
          <img src={wallet} className="imageCont" alt="proyecto_billetera" />
          <p className="latestP">
            Developed a Wallet to control and manage personal expenses and money
            flux.
          </p>
          <h2 className="latCardTit">Click the icon to see full proyect.</h2>
          <a className="gitLink" href="https://favioag.github.io/walletd/">
            <BsGithub />
          </a>
        </div>
      </div>
    </div>
  );
};

export { LatestEn };
