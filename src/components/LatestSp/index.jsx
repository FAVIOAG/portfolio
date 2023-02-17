import React from "react";
import "./Latest.css";
import hero from "../../assets/hero.jpg";
import wallet from "../../assets/wallet.jpg";
import { BsGithub } from "react-icons/bs";
const LatestSp = () => {
  return (
    <div id="latestSp">
      <h1 className="mainTit">Mis ultimos proyectos</h1>
      <div className="latestCards">
        <div className="latestCardA">
          <h1 className="latCardTit">Hero Section</h1>
          <img src={hero} className="imageCont" alt="proyecto_hero" />
          <p className="latestP">
            Desarrollo de una seccion Hero para un portfolio, incluye sectores
            de diseño no rectangulares con CSS
          </p>
          <h2 className="latCardTit">
            Clickea el icono para ver el proyecto completo
          </h2>
          <a
            className="gitLink"
            href="https://favioag.github.io/TP_HERO/"
            target="_blank"
          >
            <BsGithub />
          </a>
        </div>

        <div className="latestCardB">
          <h1 className="latCardTit">Wallet</h1>
          <img src={wallet} className="imageCont" alt="proyecto_billetera" />
          <p className="latestP">
            Desarrollo de una billetera virtual para control y flujo de gastos
            personales
          </p>
          <h2 className="latCardTit">
            Clickea el icono para ver el proyecto completo
          </h2>
          <a
            className="gitLink"
            href="https://favioag.github.io/walletd/"
            target="_blank"
          >
            <BsGithub />
          </a>
        </div>
      </div>
    </div>
  );
};
export { LatestSp };
