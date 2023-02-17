import "./Services.css";
import React from "react";
import { TfiWorld } from "react-icons/tfi";
import { RxUpdate } from "react-icons/rx";
import { MdTouchApp } from "react-icons/md";
const ServicesSp = () => {
  return (
    <div className="cardCont" id="servicesSp">
      <h2 className="services">Mis servicios</h2>
      <h1 className="title">¿Que puedo ofrecerte?</h1>
      <div className="cont">
        <div className="cardDiv">
          <span className="cardIcon">
            <TfiWorld />
          </span>
          <h1 className="cardTit">Website design</h1>
          <p className="description">
            Creacion y desarrollo de sitios web, basados en estrategias de
            marketing y enfocados en la experiencia del usuario.
          </p>
        </div>
        <div className="cardDiv">
          <span className="cardIcon">
            <RxUpdate />
          </span>
          <h1 className="cardTit">Actualizacion y mejora </h1>
          <p className="description">
            Mantenimiento, actualizacion, desarrollo y transformacion de su
            sitio web existente para lograr su mejor forma. Organice y defina su
            contenido para obtener un mejor impacto!{" "}
          </p>
        </div>
        <div className="cardDiv">
          <span className="cardIcon">
            <MdTouchApp />
          </span>
          <h1 className="cardTit">Aplicaciones Web</h1>
          <p className="description">
            Desarrollo de aplicaciones nuevas acordes a la necesidad de su
            negocio.
          </p>
        </div>
      </div>
    </div>
  );
};

export { ServicesSp };
