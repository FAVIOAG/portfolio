import React from "react";
import argProg from "./../../assets/argProg.jpg";
import cCert from "./../../assets/cCert.jpg";
import java1 from "./../../assets/java1.jpg";
import java2 from "./../../assets/java2.jpg";
import "./cert.css";
const CertificationSp = () => {
  return (
    <div id="certificationSp">
      <h1 className="mainTit">Certificaciones de capacitacion</h1>
      <div className="certCont">
        <div className="certCard">
          <h1 className="certTit">Java 1</h1>
          <h2 className="certDesc">
            Primer modulo de capacitacion en Java, utilizando IDE para generar
            proyectos en java. Brindado por el Polo Tecnologico de Rosario con
            aval de la UTN (Universidad tecnologica nacional.)
          </h2>
          <div className="imageDiv">
            <a href={java1} target="_blank">
              <img
                src={java1}
                className="certImg"
                alt="imagenDeCertificacion"
              />
            </a>
          </div>
        </div>

        <div className="certCard">
          <h1 className="certTit">Java 2</h1>
          <h2 className="certDesc">
            Segundo modulo de capacitacion en Java, utilizando frameworks como
            Spring y Hibernate. Brindado por el Polo Tecnologico de Rosario con
            aval de la UTN (Universidad tecnologica nacional.)
          </h2>
          <div className="imageDiv">
            <a href={java2} target="_blank">
              <img
                src={java2}
                className="certImg"
                alt="imagenDeCertificacion"
              />
            </a>
          </div>
        </div>

        <div className="certCard">
          <h1 className="certTit">Argentina Programa 4.0</h1>
          <h2 className="certDesc">
            Etapa de formacion brindada por el Ministerio de Economia, con base
            en JavaScript y Ruby
          </h2>
          <div className="imageDiv">
            <a href={argProg} target="_blank">
              <img
                src={argProg}
                className="certImg"
                alt="imagenDeCertificacion"
              />
            </a>
          </div>
        </div>

        <div className="certCard">
          <h1 className="certTit">Curso de C#</h1>
          <h2 className="certDesc">
            Capacitacion referida a C# y .NET brindado por Educacion IT coding
            school.
          </h2>
          <div className="imageDiv">
            <a href={cCert} target="_blank">
              <img
                src={cCert}
                className="certImg"
                alt="imagenDeCertificacion"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export { CertificationSp };
